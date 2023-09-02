import { useForm } from 'react-hook-form';
import { Button, Tooltip } from 'antd';
import { nanoid } from 'nanoid';
import { ChangeEvent } from 'react';
import { MessageData } from '../model/types/types';
import { Input } from '@/shared/ui/Input';
import styles from './Messages.module.scss';
import { useSocket } from '@/app/providers/socketProvider/SocketProvider';
import { useAppSelector } from '@/shared/hooks/redux';
import { InputFile } from '@/shared/ui/InputFile';
import { clipboardApi } from '@/shared/helpers/clipboardApi';

export const MessageInput = () => {
  const { register, handleSubmit, reset } = useForm<MessageData>();
  const socket = useSocket();
  const { user, authData } = useAppSelector(state => state.user);

  const onSubmit = ({ message }: Partial<MessageData>) => {
    if (message && message.trim() !== '') {
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

  const handleDoubleClick = async () => {
    const text = await clipboardApi.pasteText();
    onSubmit({ message: text });
  };

  return (
    <form
      name="formMessage"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.messageInputForm}
    >
      <Tooltip
        title="Для быстрой вставки текста и отправки сообщения кликните два раза"
        style={{ width: '100%' }}
      >
        <Input
          fieldName="message"
          register={register}
          id="message"
          className={styles.messageInput}
          rules={{ required: true }}
          autoComplete="off"
          placeholder="Введите сообщение..."
          onDoubleClick={handleDoubleClick}
        />
      </Tooltip>

      <InputFile label="Фото" onChange={handleSendPhoto} />
      <Button htmlType="submit">Отправить</Button>
    </form>
  );
};
