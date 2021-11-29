import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StompJs from 'stompjs';
import SockJS from 'sockjs-client';
import { actionCreators } from '../redux/modules/user';

export default function WebSocket() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.user.userInfo.userId);

  const token = localStorage.getItem('USER_TOKEN');
  const sock = new SockJS(`https://seonkang.shop/ws-stomp`);
  const ws = StompJs.over(sock);

  const wsConnectSubscribe = React.useCallback(() => {
    if (!token) {
      return null;
    }
    try {
      ws.connect({}, () => {
        if (!token) {
          return null;
        }

        ws.subscribe(
          `/sub/${userId}`,
          (msg) => {
            const alarmData = JSON.parse(msg.body);

            dispatch(actionCreators.readAlarm(false));
            dispatch(actionCreators.updateAlarm(alarmData));
          },
          { token },
        );
      });
    } catch (err) {
      console.log(err);
    }
    return null;
  }, [token]);

  return [wsConnectSubscribe];
}
