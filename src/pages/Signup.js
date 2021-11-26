import React, { useState, useCallback, useEffect } from 'react';
import { debounce } from 'lodash';

import styled from 'styled-components';
import { Grid, Input, Text } from '../elements';
import {
  SuccessAlert,
  WarningAlert,
  ErrorAlert,
  SuccessAlert2,
  ErrorAlert2,
} from '../shared/Alerts';
import { deleteCookie } from '../shared/Cookie';
import { emailCheck } from '../shared/emailCheck';
import Timer from '../components/Timer';
import { useDispatch } from 'react-redux';
import { actionCreators as userAction } from '../redux/modules/user';
import { apis } from '../lib/axios';

const Signup = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  // 휴대폰 인증 토글
  const [clickPhoneNumberAuthButton, setClickPhoneNumberAuthButton] =
    useState(false);
  const [clickCodeAuthButton, setClickCodeAuthButton] = useState(false);

  //ID, nickName 중복체크, 휴대폰인증 useState
  const [checkId, setCheckId] = useState('');
  const [checknickName, setChecknickName] = useState('');

  //입력 데이터
  const [phoneCode, setPhoneCode] = useState('');
  const data = {
    username: '',
    password: '',
    pwcheck: '',
    phoneNumber: '',
    nickname: '',
    email: '',
  };
  const [form, setForm] = useState(data);
  const { username, password, pwcheck, phoneNumber, nickname, email } = form;

  //회원가입데이터 onChange에 넣는 함수
  const handleForm = (e) => {
    const Newform = { ...form, [e.target.name]: e.target.value };
    setForm(Newform);
  };

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

  // id중복체크 함수
  const idCheck = useCallback((username) => {
    if (username === '') {
      setCheckId('');
      return;
    }
    apis
      .checkId(username)
      .then((res) => {
        setCheckId(true);
      })
      .catch((error) => {
        setCheckId(false);

        return;
      });
  }, []);

  //id 중복체크 debounce 함수
  const debounceOnchangeId = useCallback(
    debounce((username) => {
      idCheck(username);
    }, 900),
    [],
  );

  //닉네임중복체크 함수

  const nicknameCheck = useCallback((nickName) => {
    if (nickName === '') {
      setChecknickName('');
      return;
    }
    apis
      .checknickName(nickName)
      .then((res) => {
        setChecknickName(true);
      })
      .catch((error) => {
        setChecknickName(false);
        console.log('닉네임 중복 :', error);
      });
  }, []);

  // 닉네임중복체크 debounce 함수

  const debounceOnchangeNickname = useCallback(
    debounce((nickName) => {
      nicknameCheck(nickName);
    }, 900),
    [],
  );

  useEffect(() => {
    if (localStorage.getItem('USER_TOKEN')) localStorage.clear();
  }, []);

  // 휴대폰 번호전송 버튼 함수
  const sendPhoneNumber = (phoneNumberInfo) => {
    if (phoneNumber === '') {
      WarningAlert('휴대폰 번호를 입력해주세요');
      return;
    }
    apis
      .sendPhoneNumber(phoneNumberInfo)
      .then((res) => {
        SuccessAlert2(`${phoneNumber} 로 인증번호가 <br/>
        발송되었습니다.`);
        setClickPhoneNumberAuthButton(!clickPhoneNumberAuthButton);
      })
      .catch((error) => {
        // ErrorAlert(error.response.data.errorMessage);
        console.log('번호전송 실패 : ', error.response.data.errorMessage);
      });
  };

  // 휴대폰 인증코드 인증하기 버튼 함수
  const sendPhoneAuthCode = (phoneAuthCode) => {
    if (phoneCode === '') {
      WarningAlert('인증코드를 입력해주세요.');
      return;
    }
    apis
      .sendPhoneAuthCode(phoneAuthCode)
      .then((res) => {
        setClickCodeAuthButton(!clickCodeAuthButton);

        SuccessAlert2('휴대폰 인증 성공!');
      })
      .catch((error) => {
        console.log(error, '코드 잘못입력');
        ErrorAlert2(
          '인증코드가 일치하지 않습니다! </br>다시 인증을 진행해주세요.',
        );
        setPhoneCode('');
        setClickPhoneNumberAuthButton(!clickPhoneNumberAuthButton);
      });
    // console.log(`인증코드 성공실패체크 : ${clickCodeAuthButton}`);
  };
  // console.log(`인증코드 성공실패체크 : ${clickCodeAuthButton}`);

  //회원가입 버튼 함수
  const registerClick = () => {
    if (username === '' || checkId === false) {
      ErrorAlert2('아이디를 다시 확인해주세요');
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
      ErrorAlert('닉네임을 다시 확인해주세요');
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

    dispatch(userAction.SignupDB(form));
  };

  return (
    <Grid
      maxWidth='414px'
      width='auto'
      margin='0 auto'
      position='relative'
      padding='0 35px'>
      <Grid
        cusor='pointer'
        zIndex='9999'
        _onClick={() => {
          history.goBack();
        }}
        position='absolute'
        width='20px'
        height='20px'
        top='-45px'
        left='33px'>
        <Grid width='12px' height='7px'>
          <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
        </Grid>
      </Grid>

      <Grid margin='110px 0 0 0'>
        <Text size='24px' weight='700' align='center' margin='0'>
          회원가입
        </Text>
      </Grid>

      <Grid width='auto' margin='70px auto 0px'>
        <Grid position='relative'>
          {checkId ? (
            <Grid
              margin='0 4px 0 0'
              position='absolute'
              right='6px'
              top='15px'
              width='20px'
              height='20px'>
              <img
                width='20px'
                height='20px'
                src={
                  process.env.PUBLIC_URL + '/img/icon/check_icon_lightblue.svg'
                }
              />
            </Grid>
          ) : checkId === false ? (
            <Grid
              margin='0 4px 0 0'
              position='absolute'
              right='0px'
              top='15px'
              width='150px'
              height='20px'>
              <Text
                color='#FF1D00'
                position='absolute'
                right='0px'
                width='auto'
                top='5px'
                size='12px'
                weight='800'
                margin='0'>
                이미 존재하는 아이디입니다.
              </Text>
            </Grid>
          ) : (
            ''
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
            _onChange={(e) => {
              handleForm(e);
              debounceOnchangeId(e.target.value);
            }}
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
                src={
                  process.env.PUBLIC_URL + '/img/icon/check_icon_lightblue.svg'
                }
              />
            ) : (
              <img
                width='20px'
                height='20px'
                src={process.env.PUBLIC_URL + '/img/icon/check_icon_black.svg'}
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
          {checknickName ? (
            <Grid
              margin='0 4px 0 0'
              position='absolute'
              right='6px'
              top='15px'
              width='20px'
              height='20px'>
              <img
                width='20px'
                height='20px'
                src={
                  process.env.PUBLIC_URL + '/img/icon/check_icon_lightblue.svg'
                }
              />
            </Grid>
          ) : checknickName === false ? (
            <Grid
              margin='0 4px 0 0'
              position='absolute'
              right='0px'
              top='15px'
              width='150px'
              height='20px'>
              <Text
                color='#FF1D00'
                position='absolute'
                right='0px'
                width='auto'
                top='5px'
                size='12px'
                weight='800'
                margin='0'>
                이미 존재하는 닉네입입니다.
              </Text>
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
            _onChange={(e) => {
              handleForm(e);
              debounceOnchangeNickname(e.target.value);
            }}
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
            placeholder='이메일'
            placeholder_color='#DFDFDF'
            name='email'
            value={email}
            _onChange={handleForm}
          />
        </Grid>

        {clickPhoneNumberAuthButton ? (
          <Grid
            position='relative'
            display='flex'
            alignItems='center'
            bg='#FFFFFF'
            height='48px'
            borderBottom='1px solid rgba(225, 225, 225, 0.5) '
            boxSizing
            padding='1px 16px'>
            <img
              width='20px'
              height='20px'
              src={process.env.PUBLIC_URL + '/img/icon/timer-line.svg'}
            />

            <Timer />

            <Input
              type='text'
              bg='#FFFFFF'
              border='black'
              padding='16px'
              box-sizing
              placeholder='인증번호 입력하세요'
              placeholder_color='#DFDFDF'
              name='phoneCode'
              value={phoneCode}
              _onChange={(e) => {
                setPhoneCode(e.target.value);
              }}
            />
            <Text
              _onClick={() => {
                if (clickCodeAuthButton === true) {
                  SuccessAlert2('이미 휴대폰 인증을 완료하셨습니다');
                  return;
                }
                sendPhoneAuthCode(phoneAuthCode);
              }}
              color='#A4B8FF'
              position='absolute'
              right='42px'
              width='auto'
              top='19px'
              size='12px'
              weight='800'
              margin='0'>
              코드확인
            </Text>
          </Grid>
        ) : (
          <Grid position='relative'>
            <Text
              _onClick={() => {
                sendPhoneNumber(phoneNumberInfo);
              }}
              color='#A4B8FF'
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
              type='text'
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
              _onChange={handleForm}
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
          <Span style={{ fontWeight: '600', fontSize: '10px' }}>이용약관</Span>
          에 동의하신 것으로 간주합니다.
        </Text>
      </Grid>

      <Grid maxWidth='305px' width='auto' margin='0 auto'>
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

const Span = styled.span`
  font-weight: ${(props) => props.weight};
  color: black;
`;

export default Signup;
