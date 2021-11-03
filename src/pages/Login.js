import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators as userAction } from '../redux/modules/user';

import styled from 'styled-components';
import { Grid, Input, Text } from '../elements';
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
    <Grid width='305px' margin='120px auto 0' position='relative'>
      <Grid>
        <Grid
          position='absolute'
          left='180px'
          top='-5px'
          width='8px'
          height='8px'
          bg='#FF6666'
          borderRadius='4px'></Grid>

        <Text weight='800' align='center' size='35px' margin='0 0 12px 0'>
          도킹
        </Text>

        <Text
          align='center'
          weight='500'
          size='12px'
          margin='0px'
          line_height='18px'>
          반려친구와 내가
          <span style={{ fontWeight: 'bold' }}>이어지는 순간,</span> <br />내 손
          안에
          <span style={{ fontWeight: 'bold' }}>가장 믿음직스러운</span> 입양
          서비스
        </Text>
      </Grid>

      <Grid margin='37px 0 0px 0'>
        <Grid>
          <Text size='18px' weight='800' margin='0'>
            도킹하기
          </Text>
        </Grid>

        <Grid margin=' 22px 0px 0px 0px'>
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
          />
        </Grid>

        <Grid margin=' 12px 0 0 0'>
          <Button
            size='16px'
            weight='600'
            height='50px'
            padding='16px'
            bg='#FF6666'
            border='none'
            border_radius='25px'
            onClick={onClickButton}>
            로그인하기
          </Button>
        </Grid>

        <Grid display='flex' justifyContent='flex-end' margin='14px 0 0 0'>
          <Text size='12px' bold margin='0' color='#DFDFDF'>
            아이디찾기
          </Text>
          <Text size='12px' bold margin='0 0 0 14px' color='#DFDFDF'>
            비밀번호 찾기
          </Text>
        </Grid>

        <Hr margin='14px 0 0 0' />
      </Grid>

      <Grid margin='22px 0 0px 0'>
        <Grid margin='0 0 0 0px'>
          <Text size='14px' bold margin='0' color='#DFDFDF'>
            더 빠르게
            <Span weight='700'> 도킹</Span>
            하기🔥
          </Text>
        </Grid>

        <Grid margin='16px 0 0 0'>
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
            }}>
            카카오톡으로 시작하기
          </Button>

          <Grid margin='12px 0 0 0'>
            <Button
              size='16px'
              weight='700'
              height='50px'
              padding='16px'
              bg='#DDDDDD'
              border='none'
              border_radius='25px'
              onClick={() => {
                history.push('/signup');
              }}>
              메일로 회원가입하기
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
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
`;

const Hr = styled.hr`
  border: 1px solid #e1e1e180;
  margin: ${(props) => props.margin};
`;

const Span = styled.span`
  font-weight: ${(props) => props.weight};
  color: black;
`;

export default Login;
