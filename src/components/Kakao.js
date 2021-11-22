import React from 'react';
import { useDispatch } from 'react-redux';

import { actionCreators as userAction } from '../redux/modules/user';

const Kakao = (props) => {
  // const { history } = props;
  const dispatch = useDispatch();
  let code = new URL(window.location.href).searchParams.get('code');
  console.log(code);

  React.useEffect(() => {
    // You can await here
    // ...
    dispatch(userAction.KakaoLogin(code));
    // history.push('/');
  }, [code, dispatch]);

  return <h1></h1>;
};

export default Kakao;
