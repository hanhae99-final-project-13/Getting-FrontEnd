import React from 'react';
import { Grid, Text } from '../elements';
import styled from 'styled-components';
import dokking_logo from '../images/doking_logo.jpg';
import { useDispatch } from 'react-redux';
import { actionCreators as errorAction } from '../redux/modules/user';

const LoginErrorAlert = () => {
  const dispatch = useDispatch();
  const data = { errorAlert: false };
  return (
    <Grid
      position='absolute'
      bg='#FFFFFF'
      top='584px'
      boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1);'
      height='264px'
      width='375px'
      margin='35px auto'
      borderRadius='30px 30px 0 0'
      boxSizing='border-box'
      display='flex'
      flexDirection='column'
      alignItems='center'
      zIndex='9999'>
      <Grid
        margin='21px 0 0 0'
        width='150px'
        height='100px'
        bgisize='cover'
        bgiposition='center'
        bgi={dokking_logo}></Grid>
      <Text margin='6.5px 0 0 0' align='center' line_height='21px' weight='800'>
        아이디 또는 패스워드가
        <br />
        일치하지 않습니다.
      </Text>

      <Button
        margin='17px 0 0 0'
        width='130px'
        size='14px'
        weight='600'
        height='40px'
        padding='12px 0px'
        bg='#FE7968'
        border='none'
        border_radius='34px'
        onClick={() => {
          dispatch(errorAction.checkError(data));
          window.scrollTo(0, 0);
        }}>
        확인했습니다
      </Button>
    </Grid>
  );
};
const Button = styled.button`
  border: ${(props) => props.border};
  border-radius: ${(props) => props.border_radius};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  color: white;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;

export default LoginErrorAlert;
