import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Input, Text } from '../elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import { actionCreators as userAction } from '../redux/modules/user';
import { apis } from '../lib/axios';

const Signup = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  //중복 체크 useState
  const [check, setCheck] = useState('');
  console.log(check);

  // 회원가입 useState

  const data = {
    username: '',
    password: '',
    pwcheck: '',
    nickname: '',
    email: '',
  };
  const [form, setForm] = useState(data);

  const { username, password, pwcheck, nickname, email } = form;

  //회원가입 onChange에 넣는 함수
  const handleForm = (e) => {
    const Newform = { ...form, [e.target.name]: e.target.value };

    // const idcheckButton = document.querySelector('#idcheckButton');
    // const idValue = document.querySelector('#idValue').value;

    // const pwcheckIcon = document.querySelector('#pwcheckIcon');
    // let pwcheckValue = document.querySelector('#pwcheckValue').value;

    // const nicknameCheckButton = document.querySelector('#nicknameCheckButton');
    // let nicknameValue = document.querySelector('#nicknameValue').value;

    // if (idValue !== '') {
    //   idcheckButton.style.display = 'block';
    // } else {
    //   idcheckButton.style.display = 'none';
    // }

    // if (pwcheckValue !== '') {
    //   pwcheckIcon.style.display = 'block';
    // } else {
    //   pwcheckIcon.style.display = 'none';
    // }

    // if (nicknameValue !== '') {
    //   nicknameCheckButton.style.display = 'block';
    // } else {
    //   nicknameCheckButton.style.display = 'none';
    // }

    setForm(Newform);
  };
  console.log(form);

  //회원가입 버튼 함수
  const registerClick = () => {
    dispatch(userAction.SignupDB(form));
  };

  return (
    <Grid width='80vw' margin='142px auto 0px'>
      <Grid>
        <Text size='24px' weight='700' align='center'>
          회원가입
        </Text>
      </Grid>

      <Grid width='80vw' margin='70px auto 0px'>
        <Grid position='relative'>
          {!check ? (
            <Text
              _onClick={() => {
                setCheck(true);
                // apis
                //   .checkId(username)
                //   .then((res) => {
                //     if (!res.data.data.msg) {
                //       alert('중복된 아이디가 존재합니다.');
                //       return;
                //     }
                //     setCheck(res.data.data.msg);
                //     // console.log(res.data.data, '아이디체크');
                //     // console.log(res.data.status, '아이디체크');
                //   })
                //   .catch((error) => {
                //     // error.response.data.data.message
                //     console.log(error, '아이디체크 실패');
                //   });
              }}
              id='idcheckButton'
              position='absolute'
              right='10px'
              width='auto'
              top='15px'
              size='12px'
              bold
              margin='0'>
              중복확인
            </Text>
          ) : (
            <Grid
              id='pwcheckIcon'
              position='absolute'
              right='10px'
              top='15px'
              width='20px'
              height='20px'
              borderRadius='10px'
              bg={'#00B412'}>
              <Grid margin='0 0 0 2px'>
                <FontAwesomeIcon icon={faCheck} color='white' fontSize='1x' />
              </Grid>
            </Grid>
          )}

          <Input
            id='idValue'
            bg='#FFFFFF'
            width='100%'
            border='none'
            border_top='1px solid rgba(225, 225, 225, 0.5) '
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            padding='16px'
            box-sizing
            placeholder='아이디'
            placeholder_color='#DFDFDF'
            name='username'
            value={username}
            _onChange={handleForm}
          />
        </Grid>

        <Grid>
          <Input
            bg='#FFFFFF'
            width='100%'
            border='none'
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            padding='16px'
            box-sizing
            placeholder='패스워드'
            placeholder_color='#DFDFDF'
            type='password'
            name='password'
            value={password}
            _onChange={handleForm}
          />
        </Grid>

        <Grid position='relative'>
          <Grid
            id='pwcheckIcon'
            position='absolute'
            right='10px'
            top='15px'
            width='20px'
            height='20px'
            borderRadius='10px'
            bg={
              password !== '' && password === pwcheck ? '#00B412' : '#DFDFDF'
            }>
            <Grid margin='0 0 0 2px'>
              <FontAwesomeIcon icon={faCheck} color='white' fontSize='1x' />
            </Grid>
          </Grid>
          <Input
            id='pwcheckValue'
            bg='#FFFFFF'
            width='100%'
            border='none'
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            padding='16px'
            box-sizing
            placeholder='패스워드 확인'
            placeholder_color='#DFDFDF'
            type='password'
            name='pwcheck'
            value={pwcheck}
            _onChange={handleForm}
          />
        </Grid>

        <Grid position='relative'>
          <Text
            _onClick={() => {
              dispatch(userAction.Checknickname(nickname));
            }}
            id='nicknameCheckButton'
            position='absolute'
            right='10px'
            width='auto'
            top='15px'
            size='12px'
            bold
            margin='0'>
            중복확인
          </Text>
          <Input
            id='nicknameValue'
            bg='#FFFFFF'
            width='100%'
            border='none'
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            padding='16px'
            box-sizing
            placeholder='닉네임'
            placeholder_color='#DFDFDF'
            name='nickname'
            value={nickname}
            _onChange={handleForm}
          />
        </Grid>

        <Grid position='relative'>
          <Text
            color='#00B412'
            position='absolute'
            right='10px'
            width='auto'
            top='15px'
            size='12px'
            bold
            margin='0'>
            인증하기
          </Text>
          <Input
            bg='#FFFFFF'
            width='100%'
            border='none'
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            padding='16px'
            box-sizing
            placeholder='이메일'
            placeholder_color='#DFDFDF'
            name='email'
            value={email}
            _onChange={handleForm}
          />
        </Grid>
      </Grid>

      <Grid margin='81px 0 50px 0'>
        <Text
          color='#A5A5A5'
          align='center'
          bold
          size='10px'
          margin='0px'
          line_height='18px'>
          회원가입시,
          <Span style={{ fontWeight: '600' }}> 개인정보 처리방침</Span>을
          읽었으며
          <br />
          <Span style={{ fontWeight: '600' }}>이용양관</Span>에 동의하신 것으로
          간주합니다.
        </Text>
      </Grid>

      <Grid margin=' 12px 0 0 0' width='80vw'>
        <Button
          size='16px'
          weight='700'
          height='50px'
          padding='16px'
          bg='#FF6666'
          border='none'
          border_radius='25px'
          onClick={registerClick}>
          가입하기
        </Button>
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

const Span = styled.span`
  font-weight: ${(props) => props.weight};
  color: black;
`;

export default Signup;
