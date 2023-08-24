import { useForm } from 'react-hook-form';
import { Button } from 'antd';
import { nanoid } from 'nanoid';
import { ChangeEvent } from 'react';
import { MessageData } from '../model/types/types';
import { Input } from '@/shared/ui/Input';
import styles from './Messages.module.scss';
import { useSocket } from '@/app/providers/socketProvider/SocketProvider';
import { useAppSelector } from '@/shared/hooks/redux';
import { InputFile } from '@/shared/ui/InputFile';

export const MessageInput = () => {
  const { register, handleSubmit, reset } = useForm<MessageData>();
  const socket = useSocket();
  const { user, authData } = useAppSelector(state => state.user);

  const onSubmit = ({ message }: MessageData) => {
    if (message.trim() !== '') {
      socket.emit('send_message', {
        message,
        id: nanoid(),
        sender: user?.firstName || user?.username,
        senderId: authData?.id,
      });
      reset();
    }
  };
  const handleSendPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      reader.onload = event => {
        const photoData = event.target.result;
        console.log(photoData);
        socket.emit('send_message', {
          message: '',
          id: nanoid(),
          sender: user?.firstName || user?.username,
          senderId: authData?.id,
          file: photoData,
        });
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <form
      name="formMessage"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.messageInputForm}
    >
      <Input
        fieldName="message"
        register={register}
        id="message"
        className={styles.messageInput}
        rules={{ required: true }}
        autoComplete="off"
      />
      <InputFile label="Фото" onChange={handleSendPhoto} />
      <Button htmlType="submit">Отправить</Button>
    </form>
  );
};
