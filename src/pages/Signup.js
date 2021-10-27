import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Input, Text } from '../elements';
import Logo from '../images/doking_logo.jpg';

import { useDispatch } from 'react-redux';
import { actionCreators as userAction } from '../redux/modules/user';

const Signup = (props) => {
  const { history } = props;
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
    <Grid width='80vw' margin='80px  auto 0px'>
      <Grid margin='30px 0' display='flex' justifyContent='center'>
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
          Create your Account
        </Text>
      </Grid>

      <Grid width='80vw' margin='15px auto 0px'>
        <Grid>
          <Input
            width='100%'
            border_radius='5px'
            padding='15px'
            box-sizing
            placeholder='ID'
            name='username'
            value={username}
            _onChange={handleForm}
          />
        </Grid>

        <Grid margin='8px 0 0 0'>
          <Input
            width='100%'
            border_radius='5px'
            padding='15px'
            box-sizing
            placeholder='Password'
            type='password'
            name='password'
            value={password}
            _onChange={handleForm}
          />
        </Grid>

        <Grid display='flex' margin='8px 0 0 0'>
          <Input
            width='100%'
            border_radius='5px'
            padding='15px'
            box-sizing
            placeholder='Confirm Password'
            type='password'
            name='pwcheck'
            value={pwcheck}
            _onChange={handleForm}
          />
        </Grid>

        <Grid display='flex' margin='8px 0 0 0'>
          <Input
            width='100%'
            border_radius='5px'
            padding='15px'
            box-sizing
            placeholder='Nick Name'
            name='nickname'
            value={nickname}
            _onChange={handleForm}
          />
        </Grid>

        <Grid display='flex' margin='8px 0 0 0'>
          <Input
            width='100%'
            border_radius='5px'
            padding='15px'
            box-sizing
            placeholder='Email'
            name='email'
            value={email}
            _onChange={handleForm}
          />
        </Grid>
      </Grid>
      <Grid margin='15px 0 0 0'>
        <Button
          padding='10px'
          bg='black'
          border='1px solid black'
          border_radius='5px'
          onClick={registerClick}>
          회원가입
        </Button>
      </Grid>

      <Grid
        display='flex'
        flexDirection='column'
        width='80vw'
        margin='15px 0 0 0'>
        <Text bold align='center' size='12px'>
          - Or sign in with -
        </Text>

        <Grid display='flex' justifyContent='space-around'>
          <Button
            margin='0 5px 0 0 '
            width='auto'
            padding='10px'
            bg='black'
            border='1px solid black'
            border_radius='5px'
            onClick={() => {}}>
            페이스북
          </Button>
          <Button
            margin='0 5px 0 0 '
            width='auto'
            padding='10px'
            bg='black'
            border='1px solid black'
            border_radius='5px'
            onClick={() => {}}>
            카카오
          </Button>
          <Button
            padding='10px'
            bg='black'
            border='1px solid black'
            border_radius='5px'
            onClick={() => {}}>
            구글
          </Button>
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

export default Signup;
