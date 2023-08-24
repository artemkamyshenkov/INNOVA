import { useEffect, useState } from 'react';
import cn from 'classnames';
import { Image } from 'antd';
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
      {messages.map(({ message, id, sender, senderId, file }) => (
        <div
          key={id}
          className={cn(
            styles.message,
            userId === senderId ? styles.messageMe : styles.messageOther,
          )}
        >
          <p>{`${sender}: ${message}`}</p>
          {file && <Image src={file} alt="file" width={200} />}
        </div>
      ))}
    </div>
  );
};
