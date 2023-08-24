import { createAsyncThunk } from '@reduxjs/toolkit';
import { CurrentUser } from '../types/types';
import { ThunkApiState } from '@/app/providers/storeProvider/config/store';
import { userService } from '@/shared/api/userService';
import { fileService } from '@/shared/api/fileService';

export const updateUser = createAsyncThunk<
  CurrentUser,
  CurrentUser,
  ThunkApiState
>('user/updateUser', async (data, { rejectWithValue, getState }) => {
  try {
    const { user } = getState();

    await userService.updateUser(data, user?.authData?.id);
    const currentUser = await userService.getCurrentUser(user?.authData?.id);
    return currentUser;
  } catch (e) {
    return rejectWithValue((e as Error).message);
  }
});

export const updateUserAvatar = createAsyncThunk<
  CurrentUser,
  File,
  ThunkApiState
>('user/updateUserAvatar', async (file, { rejectWithValue, getState }) => {
  try {
    const { user } = getState();
    const avatarUrl = await fileService.uploadFile(file, user?.authData?.id);
    await userService.updateUserAvatar(avatarUrl, user?.authData?.id);
    const currentUser = await userService.getCurrentUser(user?.authData?.id);
    return currentUser;
  } catch (e) {
    return rejectWithValue((e as Error).message);
  }
});
