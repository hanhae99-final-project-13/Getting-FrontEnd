import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Input } from '../elements';

import { useDispatch } from 'react-redux';
import { actionCreators as userAction } from '../redux/modules/user';

const Signup = () => {
  const dispatch = useDispatch();

  const data = {
    username: '',
    password: '',
    pwcheck: '',
    nickname: '',
    email: '',
  };

  const [form, setForm] = useState(data);

  const { username, password, pwcheck, nickname, email } = form;

  const handleForm = (e) => {
    const Newform = { ...form, [e.target.name]: e.target.value };
    setForm(Newform);
  };
  console.log(form);

  const registerClick = () => {
    dispatch(userAction.SignupDB(form));
  };

  return (
    <Grid width='80vw' margin='200px auto 0px'>
      <Text size='30px' weight='600'>
        회원가입
      </Text>

      <Grid width='80vw' margin='15px auto 0px'>
        <Grid display='flex'>
          <Text size='15px' width='90px' padding='5px'>
            아이디
          </Text>
          <Input
            width='100%'
            name='username'
            value={username}
            _onChange={handleForm}
          />
        </Grid>

        <Grid display='flex' margin='5px 0 0 0'>
          <Text size='15px' width='90px' padding='5px'>
            비밀번호
          </Text>
          <Input
            type='password'
            width='100%'
            name='password'
            value={password}
            _onChange={handleForm}
          />
        </Grid>

        <Grid display='flex' margin='5px 0 0 0'>
          <Text size='15px' width='90px' padding='5px'>
            비밀번호확인
          </Text>
          <Input
            type='password'
            width='100%'
            name='pwcheck'
            value={pwcheck}
            _onChange={handleForm}
          />
        </Grid>

        <Grid display='flex' margin='5px 0 0 0'>
          <Text size='15px' width='90px' padding='5px'>
            닉네임
          </Text>
          <Input
            width='100%'
            name='nickname'
            value={nickname}
            _onChange={handleForm}
          />
        </Grid>

        <Grid display='flex' margin='5px 0 0 0'>
          <Text size='15px' width='90px' padding='5px'>
            이메일
          </Text>
          <Input
            width='100%'
            name='email'
            value={email}
            _onChange={handleForm}
          />
        </Grid>
      </Grid>

      <Button margin='15px 0 0 0' bg='black' onClick={registerClick}>
        회원가입하기
      </Button>
    </Grid>
  );
};

const Text = styled.p`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => props.align};
  width: ${(props) => props.width};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  margin: 0px;
`;

const Button = styled.button`
  width: 100%;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  color: white;
`;

export default Signup;
