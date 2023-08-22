import React, { createContext, useContext } from 'react';
import { io, Socket } from 'socket.io-client';

interface SocketProviderProps {
  children: React.ReactNode;
}
const SocketContext = createContext<Socket | null>(null);

export const useSocket = () => useContext(SocketContext);

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const socket = io('http://localhost:3001');

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
