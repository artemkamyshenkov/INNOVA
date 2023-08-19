import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

const storage = getStorage();

export const fileService = {
  uploadFile: async (
    file: File,
    userId: string,
    onProgress: (progress: number) => void,
  ) =>
    new Promise<string>((resolve, reject) => {
      const storageRef = ref(storage, `avatar/${userId}/${file?.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          onProgress(progress);
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
