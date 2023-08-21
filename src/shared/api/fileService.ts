import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { storage } from '../config/firebase/firebaseConfig';

export const fileService = {
  uploadFile: async (file: File, userId: string) =>
    new Promise<string>(resolve => {
      const storageRef = ref(storage, `avatar/${userId}/${file?.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          switch (error.code) {
            case 'storage/unauthorized':
              throw new Error('Ошибка авторизации');
            case 'storage/canceled':
              throw new Error('Ошибка, загрузка отменена');
            case 'storage/unknown':
              throw new Error('Неизвестная ошибка');
            default:
              return null;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadURL =>
            resolve(downloadURL),
          );
        },
      );
    }),
};
