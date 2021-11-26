import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as userAction } from '../redux/modules/user';

import styled from 'styled-components';
import { Grid, Input, Text } from '../elements';
import { KAKAO_AUTH_URL } from '../shared/kakaoAuth';
import LoginErrorAlert from '../components/LoginErrorAlert';
import { WarningAlert } from '../shared/Alerts';
import { deleteCookie } from '../shared/Cookie';
import WebSocket from '../components/WebSocket';
import { reject } from 'lodash';
const Login = (props) => {
  // const [wsConnectSubscribe] = WebSocket();
  const { history } = props;
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user?.error);
  // console.log(error.errorAlert);

  const [id, setID] = useState('');
  const [pw, setPw] = useState('');

  const handleChangeID = (e) => {
    setID(e.target.value);
  };

  const handleChangePW = (e) => {
    setPw(e.target.value);
  };

  const user = {
    username: id,
    password: pw,
  };
  const onClickLogin = () => {
    dispatch(userAction.GetUserDB(user));
  };

  useEffect(() => {
    if (localStorage.getItem('USER_TOKEN')) localStorage.clear();
  }, []);

  return (
    <>
      <Grid maxWidth='414px' width='auto' margin='0 auto' padding='0 35px'>
        <Grid width='auto' margin='122px auto 0'>
          <Grid>
            <Grid
              cusor='pointer'
              hover='white'
              maxWidth='78px'
              width='auto'
              height='35px'
              margin='0 auto 20px'
              _onClick={() => {
                history.push('/main');
              }}
            >
              <img src={process.env.PUBLIC_URL + '/img/getting_typo_4.svg'} />
            </Grid>

            <Text
              align='center'
              weight='700'
              size='12px'
              margin='0px'
              line_height='18px'
            >
              반려친구와 내가
              <span style={{ fontWeight: '800', fontSize: '12px' }}>
                이어지는 순간,
              </span>{' '}
              <br />내 손 안에
              <span style={{ fontWeight: '800', fontSize: '12px' }}>
                가장 믿음직스러운
              </span>{' '}
              입양 서비스
            </Text>
          </Grid>

          <Grid margin='30px 0 0 0'>
            <Grid margin='0 0 0 8px'>
              <Text size='18px' weight='800' margin='0'>
                개팅하기
              </Text>
            </Grid>

            <Grid margin=' 28px 0px 0px 0px'>
              <Input
                bg='#FFFFFF'
                border='0.3px solid rgba(0, 0, 0, 0.05)'
                border_radius='25px'
                padding='16px'
                box-sizing
                value={id}
                _onChange={handleChangeID}
                placeholder='아이디를 입력해주세요'
                placeholder_color='#DFDFDF'
                placeholder_weight='bold'
              />
            </Grid>

            <Grid margin=' 12px 0 0 0'>
              <Input
                bg='#FFFFFF'
                type='password'
                border=' 0.3px solid rgba(0, 0, 0, 0.05)'
                border_radius='25px'
                padding='16px'
                box-sizing
                value={pw}
                _onChange={handleChangePW}
                placeholder='비밀번호를 입력해주세요'
                placeholder_color='#DFDFDF'
                placeholder_weight='bold'
              />
            </Grid>

            <Grid margin=' 12px 0 0 0'>
              <Button
                size='16px'
                weight='600'
                height='50px'
                padding='16px'
                bg='#FE7968'
                border='none'
                border_radius='25px'
                onClick={onClickLogin}
                // onClick={test}
              >
                로그인하기
              </Button>
            </Grid>

            <Grid display='flex' justifyContent='flex-end' margin='12px 0 0 0'>
              <Text
                size='12px'
                bold
                margin='0'
                color='#DFDFDF'
                _onClick={() => {
                  WarningAlert('서비스 준비중 입니다');
                }}
              >
                아이디찾기
              </Text>
              <Text
                size='12px'
                bold
                margin='0 0 0 14px'
                color='#DFDFDF'
                _onClick={() => {
                  WarningAlert('서비스 준비중 입니다');
                }}
              >
                비밀번호 찾기
              </Text>
            </Grid>

            <Hr margin='12px 0 0 0' />
          </Grid>

          <Grid margin='24px 0 0 0' position='relative'>
            <Grid margin='0 0 0 8px'>
              <Text size='14px' bold margin='0' color='#DFDFDF'>
                더 빠르게
                <Span weight='700' size='14px'>
                  개팅
                </Span>
                하기
                <Grid position='absolute' top='-1px' left='115px' width='auto'>
                  <img src={process.env.PUBLIC_URL + '/img/icon/fire.svg'} />
                </Grid>
              </Text>
            </Grid>

            <Grid margin='24px 0 0 0'>
              <Button
                size='16px'
                weight='600'
                height='50px'
                padding='16px'
                bg='#FFDA7C'
                border='none'
                border_radius='25px'
                onClick={() => {
                  window.location.href = KAKAO_AUTH_URL;
                }}
              >
                카카오톡으로 시작하기
              </Button>

              <Grid margin='12px 0 0 0'>
                <Button
                  size='16px'
                  weight='700'
                  height='50px'
                  padding='16px'
                  bg='#CECBCA'
                  border='none'
                  border_radius='25px'
                  onClick={() => {
                    history.push('/signup');
                  }}
                >
                  메일로 회원가입하기
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {error.errorAlert ? <LoginErrorAlert></LoginErrorAlert> : ''}
    </>
  );
};

const Button = styled.button`
  border: ${(props) => props.border};
  border-radius: ${(props) => props.border_radius};
  height: ${(props) => props.height};
  width: 100%;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  color: white;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  cursor: pointer;
`;

const Hr = styled.hr`
  border: 1px solid #e1e1e180;
  margin: ${(props) => props.margin};
`;

const Span = styled.span`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: black;
`;

export default Login;
