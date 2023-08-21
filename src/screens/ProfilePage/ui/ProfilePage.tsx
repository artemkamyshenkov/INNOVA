import { ChangeEvent, useEffect, useState } from 'react';
import { notification } from 'antd';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader';
import { userService } from '@/shared/api/userService';
import { CurrentUser, userActions } from '@/entities/User';
import { fileService } from '@/shared/api/fileService';
import { UserProfileEdit } from '@/widgets/UserProfile';
import { UserProfileView } from '@/widgets/UserProfile/ui/UserProfileView';

type Mode = 'view' | 'edit';

const ProfilePage = () => {
  const { user, authData } = useAppSelector(state => state.user);
  const [notify, contextHolder] = notification.useNotification();
  const [uploadProgress, setUploadProgress] = useState(0);

  const { setValue } = useForm<CurrentUser>({
    mode: 'onBlur',
  });

  const [mode, setMode] = useState<Mode>('view');
  const dispatch = useAppDispatch();

  const handleUploadProgress = (progress: number) => {
    setUploadProgress(progress);
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const selectedFile = e.target.files[0];
      const avatarUrl = await fileService.uploadFile(
        selectedFile,
        authData?.id,
        handleUploadProgress,
      );
      await userService.updateUser({ ...user, avatarUrl }, authData?.id);
      const currentUser = await userService.getCurrentUser(authData?.id);
      dispatch(userActions.setCurrentUser(currentUser));
      setTimeout(() => {
        setUploadProgress(0);
      }, 2000);
      notify.success({ message: 'Данные успешно обновлены' });
    } catch (error) {
      console.error(error);
      notify.error({ message: error.message });
    }
  };

  const handleEditProfile = () => {
    setMode(mode === 'view' ? 'edit' : 'view');
  };

  useEffect(() => {
    if (user?.about) {
      setValue('about', user?.about);
    }
  }, [user, setValue]);

  if (!user?.email || !user?.username) {
    return <PageLoader />;
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
          uploadProgress={uploadProgress}
        />
      ) : (
        <UserProfileEdit
          user={user}
          authData={authData}
          uploadProgress={uploadProgress}
          onFileChange={handleFileChange}
          onEditProfile={handleEditProfile}
          notify={notify}
        />
      )}
    </>
  );
};

export default ProfilePage;
