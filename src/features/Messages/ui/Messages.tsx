import React from 'react';
import { MessageInput } from './MessageInput';
import styles from './Messages.module.scss';
import { MessagesList } from './MessagesList';

export const Messages = () => (
  <div className={styles.messagesConteiner}>
    <MessagesList />
    <MessageInput />
  </div>
);
