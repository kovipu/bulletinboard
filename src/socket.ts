import { Dispatch } from 'react';

const sessionId = Math.random().toString(36).substring(7);
const url = `ws://localhost:8080/websocket/${sessionId}`;
const socket: WebSocket = new WebSocket(url);

const init = (dispatch: Dispatch<Action>) => {
  socket.onmessage = ({ data }) => {
    const { type, ...payload } = JSON.parse(data);
    dispatch({ type, payload });
  };
};

const emit = (event: ClientEvent) => {
  socket.send(JSON.stringify(event));
};

export { init, emit };
