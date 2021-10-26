import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators as userAction } from '../redux/modules/user';

import styled from 'styled-components';
import { Grid } from '../elements';
import { Input } from '../elements';

const Login = () => {
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
    <Grid width='80vw' margin='200px auto 0px'>
      <Grid>
        <Text size='30px'>로그인</Text>
      </Grid>

      <Grid width='80vw' margin=' 15px 0px 0px 0px'>
        <Grid display='flex'>
          <Text size='15px' width='90px' padding='5px'>
            아이디
          </Text>
          <Input
            width='100%'
            padding='5px'
            box-sizing
            value={id}
            _onChange={handleChangeID}
            placeholder='아이디를 적어주세요'
          />
        </Grid>

        <Grid display='flex' margin=' 10px 0 0 0'>
          <Text size='15px' width='90px' padding='5px'>
            비밀번호
          </Text>
          <Input
            width='100%'
            padding='5px'
            box-sizing
            value={pw}
            _onChange={handleChangePW}
            placeholder='비밀번호를 적어주세요'
          />
        </Grid>
      </Grid>

      <Grid display='flex' flexDirection='column' margin=' 10px 0 0 0'>
        <Button padding='10px' bg='black' onClick={onClickButton}>
          로그인
        </Button>
        <Button padding='10px' margin='5px 0 0 0' bg='black'>
          회원가입
        </Button>
        <Button padding='10px' margin='5px 0 0 0' bg='black'>
          카카오 로그인
        </Button>
      </Grid>
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

export default Login;
