import { ChangeEvent, useState } from 'react';
import { Skeleton, notification } from 'antd';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader';
import { updateUserAvatar } from '@/entities/User';
import { UserProfileEdit } from '@/widgets/UserProfile';
import { UserProfileView } from '@/widgets/UserProfile/ui/UserProfileView';

type Mode = 'view' | 'edit';

const ProfilePage = () => {
  const { user, authData, loading } = useAppSelector(state => state.user);
  const [notify, contextHolder] = notification.useNotification();
  const [mode, setMode] = useState<Mode>('view');
  const dispatch = useAppDispatch();

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      // TODO: проверить работу
      const selectedFile = e.target.files[0];
      dispatch(updateUserAvatar(selectedFile));
      notify.success({ message: 'Данные успешно обновлены' });
    } catch (error) {
      console.error(error);
      notify.error({ message: error.message });
    }
  };

  const handleEditProfile = () => {
    setMode(mode === 'view' ? 'edit' : 'view');
  };

  if (!user?.email || !user?.username) {
    return <PageLoader />;
  }

  if (loading) {
    return <Skeleton />;
  }

  return (
    <>
      {contextHolder}
      {mode === 'view' ? (
        <UserProfileView
          user={user}
          mode={mode}
          onEditProfile={handleEditProfile}
          onFileChange={handleFileChange}
        />
      ) : (
        <UserProfileEdit
          user={user}
          authData={authData}
          onFileChange={handleFileChange}
          onEditProfile={handleEditProfile}
          notify={notify}
        />
      )}
    </>
  );
};

export default ProfilePage;
