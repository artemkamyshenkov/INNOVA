import { useForm } from 'react-hook-form';
import { Button } from 'antd';
import { nanoid } from 'nanoid';
import { MessageData } from '../model/types/types';
import { Input } from '@/shared/ui/Input';
import styles from './Messages.module.scss';
import { useSocket } from '@/app/providers/socketProvider/SocketProvider';
import { useAppSelector } from '@/shared/hooks/redux';

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
      <Button htmlType="submit">Отправить</Button>
    </form>
  );
};
