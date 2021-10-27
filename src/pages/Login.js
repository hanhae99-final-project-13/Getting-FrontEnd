import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators as userAction } from '../redux/modules/user';

import styled from 'styled-components';
import { Grid, Input, Text } from '../elements';
import Logo from '../images/doking_logo.jpg';
import { KAKAO_AUTH_URL } from '../shared/kakaoAuth';

const Login = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  const [id, setID] = useState('');
  const [pw, setPw] = useState('');

  const handleChangeID = (e) => {
    setID(e.target.value);
    console.log(e.target.value);
  };

  const handleChangePW = (e) => {
    setPw(e.target.value);
    console.log(e.target.value);
  };

  const user = {
    username: id,
    password: pw,
  };
  const onClickButton = () => {
    dispatch(userAction.GetUserDB(user));
  };

  return (
    <Grid width='80vw' margin='80px auto 0'>
      <Grid margin='0 0 60px 0' display='flex' justifyContent='center'>
        <ImageBox
          alt='mainlogo'
          cursor
          src={Logo}
          onClick={() => {
            history.push('/');
          }}
        />
      </Grid>

      <Grid>
        <Text size='15px' bold>
          Login to your Account
        </Text>
      </Grid>

      <Grid width='80vw' margin=' 20px 0px 0px 0px'>
        <Grid>
          <Input
            border_radius='5px'
            width='100%'
            padding='15px'
            box-sizing
            value={id}
            _onChange={handleChangeID}
            placeholder='Email'
          />
        </Grid>

        <Grid margin=' 15px 0 0 0'>
          <Input
            type='password'
            border_radius='5px'
            width='100%'
            padding='15px'
            box-sizing
            value={pw}
            _onChange={handleChangePW}
            placeholder='Password'
          />
        </Grid>
      </Grid>

      <Grid
        display='flex'
        flexDirection='column'
        margin=' 20px 0 0 0'
        width='80vw'>
        <Button
          padding='10px'
          bg='black'
          border='1px solid black'
          border_radius='5px'
          onClick={onClickButton}>
          로그인
        </Button>
        <Grid margin='5px 0 0 0'>
          <Button
            padding='10px'
            bg='black'
            border='1px solid black'
            border_radius='5px'
            onClick={() => {
              history.push('/signup');
            }}>
            회원가입
          </Button>
        </Grid>
      </Grid>

      <Grid
        display='flex'
        flexDirection='column'
        width='80vw'
        margin='30px 0 0 0'>
        <Text bold align='center' size='12px'>
          - Or sign in with -
        </Text>

        <Grid display='flex' justifyContent='space-around'>
          {/* <Button
            margin='0 5px 0 0 '
            width='auto'
            padding='10px'
            bg='black'
            border='1px solid black'
            border_radius='5px'
            onClick={() => {}}>
            페이스북
          </Button> */}
          <Button
            margin='0 5px 0 0 '
            width='auto'
            padding='10px'
            bg='black'
            border='1px solid black'
            border_radius='5px'
            onClick={() => {
              window.location.href = KAKAO_AUTH_URL;
            }}>
            카카오로 바로 시작하기
          </Button>
          {/* <Button
            padding='10px'
            bg='black'
            border='1px solid black'
            border_radius='5px'
            onClick={() => {}}>
            구글
          </Button> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

const ImageBox = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  src: '';
  ${(props) => (props.cursor ? `cursor : pointer;` : '')}
`;

const Button = styled.button`
  border: ${(props) => props.border};
  border-radius: ${(props) => props.border_radius};
  width: 100%;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  color: white;
`;

export default Login;
