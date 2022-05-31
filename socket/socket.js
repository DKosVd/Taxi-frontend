import React from 'react';
import {io} from 'socket.io-client';
export const socket = io("http://192.168.1.52:3003");
export const SocketContext = React.createContext();