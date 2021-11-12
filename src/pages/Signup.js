import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Input, Text } from '../elements';

import {
  SuccessAlert,
  WarningAlert,
  ErrorAlert,
  SuccessAlert2,
  ErrorAlert2,
} from '../shared/Alerts';
import { emailCheck } from '../shared/emailCheck';
import Timer from '../components/Timer';

import { useDispatch } from 'react-redux';
import { actionCreators as userAction } from '../redux/modules/user';
import { apis } from '../lib/axios';

const Signup = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  // 휴대폰 인증 토글
  const [openCodeInput, setOpenCodeInput] = useState(false);
  const [clickCodeAuthButton, setClickCodeAuthButton] = useState(false);

  //ID, nickName 중복체크, 휴대폰인증 useState
  const [checkId, setCheckId] = useState(false);
  const [checknickName, setChecknickName] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  console.log(checkId, '아이디중복체크 확인');
  console.log(checknickName, '닉네임중복체크 확인');

  // 회원가입데이터 useState
  const phone = {
    phoneNumber: phoneNumber,
  };

  const data = {
    username: '',
    password: '',
    pwcheck: '',
    nickname: '',
    email: '',
  };
  const [form, setForm] = useState(data);

  const { username, password, pwcheck, nickname, email } = form;

  //phoneNumber, phoneAuthCode 서버에 넘기는 데이터

  const phoneNumberInfo = {
    username: username,
    phoneNumber: phoneNumber,
  };

  const phoneAuthCode = {
    username: username,
    phoneNumber: phoneNumber,
    randomNumber: phoneCode,
  };

  //회원가입데이터 onChange에 넣는 함수
  const handleForm = (e) => {
    const Newform = { ...form, [e.target.name]: e.target.value };
    setForm(Newform);
  };
  console.log('회원가입 입력값', form);

  // ID 중복체크 버튼 함수
  const idCheckButton = () => {
    if (username === '') {
      WarningAlert('아이디를 입력해주세요');
      setCheckId(false);
      return;
    }

    apis
      .checkId(username)
      .then((res) => {
        console.log(res.data.data, '아이디 중복체크');
        console.log(res.data.status, '아이디 중복체크');

        console.log(res.data.status);
        SuccessAlert('아이디 중복확인이 완료되었습니다.');
        setCheckId(true);
      })
      .catch((error) => {
        ErrorAlert(error.response.data.errorMessage);
        setCheckId(false);
        console.log(error, '아이디중복');
      });
  };

  // 닉네임 중복체크 버튼 함수
  const nicknameCheckButton = () => {
    if (nickname === '') {
      WarningAlert('닉네임을 입력해주세요');
      setChecknickName(false);
      return;
    }

    console.log(nickname);
    apis
      .checknickName(nickname)
      .then((res) => {
        console.log(res.data.data, '닉네임 중복체크');
        console.log(res.data.status, '닉네임 중복체크');

        SuccessAlert('닉네임 중복확인이 완료되었습니다.');
        setChecknickName(true);
      })
      .catch((error) => {
        ErrorAlert(error.response.data.errorMessage);
        setChecknickName(false);
        console.log(error, '닉네임 중복');
      });
  };

  // 휴대폰 번호전송 버튼 함수
  const sendPhoneNumber = (phoneNumberInfo) => {
    if (phoneNumber === '') {
      WarningAlert('휴대폰 번호를 입력해주세요');
      return;
    }
    console.log(phoneNumberInfo, '서버에전송되는 번호데이터');
    //서버에 phoneNumber전송 api
    apis
      .sendPhoneNumber(phoneNumberInfo)
      .then((res) => {
        console.log(res.data.status, '번호전송 성공');
        SuccessAlert2(`${phoneNumber} 로 인증번호가 <br/>
        발송되었습니다.`);
        setOpenCodeInput(!openCodeInput);
      })
      .catch((error) => {
        // ErrorAlert(error.response.data.errorMessage);
        console.log(error, '번호전송 실패');
      });
  };

  // 휴대폰 인증코드 인증하기 버튼 함수

  const sendPhoneAuthCode = (phoneAuthCode) => {
    if (phoneCode === '') {
      WarningAlert('인증코드를 입력해주세요.');
      return;
    }

    console.log(phoneAuthCode, '서버에전송되는 코드데이터');
    apis
      .sendPhoneAuthCode(phoneAuthCode)
      .then((res) => {
        console.log(res.data.status, '코드인증 성공');
        setClickCodeAuthButton(!clickCodeAuthButton);

        SuccessAlert2('휴대폰 인증 성공!');
      })
      .catch((error) => {
        console.log(error, '코드 잘못입력');
        ErrorAlert2(
          '인증코드가 일치하지 않습니다! </br>다시 인증을 진행해주세요.',
        );
        setPhoneCode('');
        setOpenCodeInput(!openCodeInput);
      });
    console.log(clickCodeAuthButton, '인증코드버튼 확인용');
  };
  console.log(clickCodeAuthButton, '인증코드버튼 확인용');
  //회원가입 버튼 함수
  const registerClick = () => {
    if (username === '' || checkId === false) {
      ErrorAlert('아이디 중복확인을 먼저 진행해 주세요');
      return;
    }
    if (password === '') {
      ErrorAlert('패스워드를 입력해주세요');
      return;
    }
    if (password !== pwcheck) {
      ErrorAlert('패스워드 확인을 다시 확인해주세요.');
      return;
    }
    if (nickname === '' || checknickName === false) {
      ErrorAlert('닉네임을 중복확인을 먼저 진행해주세요 입력해주세요');
      return;
    }
    if (email === '') {
      ErrorAlert('이메일을 입력해주세요');
      return;
    }
    if (!emailCheck(email)) {
      ErrorAlert('이메일양식에 맞게 입력해주세요.  test@test.com');
      return;
    }

    if (!clickCodeAuthButton) {
      ErrorAlert('휴대폰 인증을 진행해 주세요.');
      return;
    }

    dispatch(userAction.SignupDB({ ...form, ...phone }));
  };

  return (
    <Grid>
      <Grid width='305px' margin='0 auto'>
        <Grid
          zIndex='9999'
          _onClick={() => {
            history.goBack();
          }}
          position='sticky'
          width='20px' //width, height를 안주면 sticky left가 안먹음..
          height='20px'
          top='65px'
          left='36px'>
          <Grid width='12px' height='7px'>
            <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
          </Grid>
        </Grid>

        <Grid margin='110px 0 0 0'>
          <Text size='24px' weight='700' align='center'>
            회원가입
          </Text>
        </Grid>

        <Grid width='305px' margin='70px auto 0px'>
          <Grid position='relative'>
            <Text
              color='#FE7968'
              _onClick={idCheckButton}
              position='absolute'
              right='10px'
              width='auto'
              top='19px'
              size='12px'
              weight='800'
              margin='0'>
              중복확인
            </Text>

            {checkId ? (
              <Grid
                margin='0 4px 0 0'
                position='absolute'
                right='57px'
                top='15px'
                width='20px'
                height='20px'>
                <img
                  width='20px'
                  height='20px'
                  src={process.env.PUBLIC_URL + '/img/icon/check_icon_pink.svg'}
                />
              </Grid>
            ) : (
              ' '
            )}

            <Input
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
              position='absolute'
              right='10px'
              top='19px'
              width='20px'
              height='20px'>
              {password !== '' && password === pwcheck ? (
                <img
                  width='20px'
                  height='20px'
                  src={process.env.PUBLIC_URL + '/img/icon/check_icon_pink.svg'}
                />
              ) : (
                <img
                  width='20px'
                  height='20px'
                  src={
                    process.env.PUBLIC_URL + '/img/icon/check_icon_black.svg'
                  }
                />
              )}
            </Grid>
            <Input
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
              color='#FE7968'
              _onClick={nicknameCheckButton}
              position='absolute'
              right='10px'
              width='auto'
              top='19px'
              size='12px'
              weight='800'
              margin='0'>
              중복확인
            </Text>

            {checknickName ? (
              <Grid
                margin='0 4px 0 0'
                position='absolute'
                right='57px'
                top='15px'
                width='20px'
                height='20px'>
                <img
                  width='20px'
                  height='20px'
                  src={process.env.PUBLIC_URL + '/img/icon/check_icon_pink.svg'}
                />
              </Grid>
            ) : (
              ''
            )}

            <Input
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

          {openCodeInput ? (
            <Grid position='relative'>
              <Grid position='absolute' left='160px' width='auto'>
                {clickCodeAuthButton === true ? '' : <Timer />}
              </Grid>
              <Text
                _onClick={() => {
                  if (clickCodeAuthButton === true) {
                    SuccessAlert2('이미 휴대폰 인증을 완료하셨습니다');
                    return;
                  }
                  sendPhoneAuthCode(phoneAuthCode);
                }}
                color='#FE7968'
                position='absolute'
                right='10px'
                width='auto'
                top='19px'
                size='12px'
                weight='800'
                margin='0'>
                코드인증하기
              </Text>
              <Input
                type='number'
                bg='#FFFFFF'
                width='100%'
                border='none'
                border_bottom='1px solid rgba(225, 225, 225, 0.5) '
                padding='16px'
                box-sizing
                placeholder='인증코드'
                placeholder_color='#DFDFDF'
                name='phoneCode'
                value={phoneCode}
                _onChange={(e) => {
                  setPhoneCode(e.target.value);
                }}
              />
            </Grid>
          ) : (
            <Grid position='relative'>
              <Text
                _onClick={() => {
                  sendPhoneNumber(phoneNumberInfo);
                }}
                color='#FE7968'
                position='absolute'
                right='10px'
                width='auto'
                top='19px'
                size='12px'
                weight='800'
                margin='0'>
                인증하기
              </Text>
              <Input
                type='number'
                bg='#FFFFFF'
                width='100%'
                border='none'
                border_bottom='1px solid rgba(225, 225, 225, 0.5) '
                padding='16px'
                box-sizing
                placeholder='휴대폰번호(- 없이입력해주세요)'
                placeholder_color='#DFDFDF'
                name='phoneNumber'
                value={phoneNumber}
                _onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </Grid>
          )}
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
            <Span style={{ fontWeight: '600', fontSize: '10px' }}>
              {' '}
              개인정보 처리방침
            </Span>
            을 읽었으며
            <br />
            <Span style={{ fontWeight: '600', fontSize: '10px' }}>
              이용약관
            </Span>
            에 동의하신 것으로 간주합니다.
          </Text>
        </Grid>

        <Grid margin=' 12px 0 0 0' width='305px'>
          <Button
            size='16px'
            weight='700'
            height='50px'
            padding='16px'
            bg='#FE7968'
            border='none'
            border_radius='25px'
            onClick={registerClick}>
            가입하기
          </Button>
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

const Span = styled.span`
  font-weight: ${(props) => props.weight};
  color: black;
`;

export default Signup;
