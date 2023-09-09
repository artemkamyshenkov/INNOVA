import { updateUserAvatar } from '@/entities/User';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { Page } from '@/widgets/Page';
import { UserProfileEdit } from '@/widgets/UserProfile';
import { UserProfileView } from '@/widgets/UserProfile/ui/UserProfileView';
import { Skeleton, notification } from 'antd';
import { ChangeEvent, useState } from 'react';

type Mode = 'view' | 'edit';

const ProfilePage = () => {
  const { user, authData, loading } = useAppSelector(state => state.user);
  const [notify, contextHolder] = notification.useNotification();
  const [mode, setMode] = useState<Mode>('view');
  const dispatch = useAppDispatch();

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const selectedFile = e.target.files[0];
      await dispatch(updateUserAvatar(selectedFile));
      notify.success({ message: 'Данные успешно обновлены' });
    } catch (error) {
      console.error(error);
      notify.error({ message: error.message });
    }
  };

  const handleEditProfile = () => {
    setMode(mode === 'view' ? 'edit' : 'view');
  };

  if (loading) {
    return <Skeleton />;
  }

  return (
    <Page>
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
    </Page>
  );
};

export default ProfilePage;
