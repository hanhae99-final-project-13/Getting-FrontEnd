import React from 'react';
import * as StompJs from '@stomp/stompjs';
// import SockJS from 'sockjs-client';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../redux/modules/user';

const WebSocket2 = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.user.userInfo.userId);
  const token = localStorage.getItem('USER_TOKEN');

  if (!token) return null;

  const client = new StompJs.Client({
    brokerURL: 'wss:///seonkang.shop/ws-stomp',
    // brokerURL: 'ws:///52.78.159.191/ws-stomp',
    debug: function (str) {
      console.log(str);
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
  });

  client.onStompError = (frame) => {
    console.log(frame);
    console.log('Broker reported error: ' + frame.headers['message']);
    console.log('Additional details: ' + frame.body);
  };

  client.activate();

  client.subscribe(
    `/sub/${userId}`,
    (msg) => {
      const alarmData = JSON.parse(msg.body);

      dispatch(actionCreators.readAlarm(false));
      dispatch(actionCreators.updateAlarm(alarmData));
    },
    { token },
  );
  return <div></div>;
};

export default WebSocket2;
