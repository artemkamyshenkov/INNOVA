import { getDatabase, ref, child, get, update } from 'firebase/database';
import { CurrentUser } from '@/entities/User';
import { ProfileData } from '@/screens/ProfilePage/ui/ProfilePage';

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
  updateUser: async (params: ProfileData, userId: string) => {
    try {
      const db = getDatabase();
      const updates: { [key: string]: ProfileData } = {};
      updates[`/users/${userId}`] = params;
      return await update(ref(db), updates);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
