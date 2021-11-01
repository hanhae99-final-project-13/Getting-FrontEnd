import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators as userAction } from '../redux/modules/user';

const Setting = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userAction.LogOutDB());
  };

  return (
    <div style={{ margin: '200px', width: '150px' }}>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
};

export default Setting;
