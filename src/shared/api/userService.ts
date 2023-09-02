import { getDatabase, ref, child, get, update } from 'firebase/database';
import { CurrentUser } from '@/entities/User';

export const userService = {
  getCurrentUser: async (userId: string): Promise<CurrentUser> => {
    const dbRef = ref(getDatabase());
    try {
      const snapshot = await get(child(dbRef, `users/${userId}`));
      if (snapshot.exists()) {
        const data = snapshot.val();
        return data;
      }
      return null;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  updateUser: async (params: CurrentUser, userId: string) => {
    try {
      const db = getDatabase();
      const { lastName, firstName, email, about, avatarUrl } = params;
      return await update(ref(db, `/users/${userId}`), {
        lastName,
        firstName,
        email,
        about,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  updateUserAvatar: async (
    avatarUrl: CurrentUser['avatarUrl'],
    userId: string,
  ) => {
    try {
      const db = getDatabase();
      return await update(ref(db, `/users/${userId}`), {
        avatarUrl,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
