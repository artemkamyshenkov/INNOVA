import { getDatabase, ref, child, get } from 'firebase/database';
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
      throw error; // Отправляем ошибку дальше для обработки
    }
  },
};
