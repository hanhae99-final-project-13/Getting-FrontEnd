import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import SockJsClient from 'react-stomp';

const WebSocket = () => {
  const $websocket = useRef(null);
  const userId = useSelector((state) => state.user.user.userInfo.userId);
  console.log(userId);
  let topics = ['/topic/' + userId];
  const handleMsg = (msg) => {
    console.log(msg);
  };
  const handleClickSendTo = () => {
    $websocket.current.sendMessage('/sendTo');
  };
  const handleClickSendTemplate = () => {
    $websocket.current.sendMessage('/Template');
  };

  return (
    <>
      <SockJsClient
        url='http://localhost:8080/ws-stomp'
        topics={topics}
        onMessage={(msg) => {
          console.log(msg);
        }}
        ref={$websocket}
      />
      <button onClick={handleClickSendTo}>sendTo</button>
      <button onClick={handleClickSendTemplate}>sendTemplate</button>
    </>
  );
};

export default WebSocket;
