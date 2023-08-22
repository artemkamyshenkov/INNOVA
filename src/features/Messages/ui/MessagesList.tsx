import { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './Messages.module.scss';
import { useSocket } from '@/app/providers/socketProvider/SocketProvider';
import { MessageData } from '../model/types/types';
import { useAuth } from '@/shared/hooks/useAuth';

export const MessagesList = () => {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const socket = useSocket();
  const { id: userId } = useAuth();
  useEffect(() => {
    socket.on('receive_message', data => {
      setMessages(prevMessages => [...prevMessages, data]);
    });
  }, []);

  return (
    <div className={styles.messagesList}>
      {messages.map(({ message, id, sender, senderId }) => (
        <div
          key={id}
          className={cn(
            styles.message,
            userId === senderId ? styles.messageMe : styles.messageOther,
          )}
        >{`${sender}: ${message}`}</div>
      ))}
    </div>
  );
};
