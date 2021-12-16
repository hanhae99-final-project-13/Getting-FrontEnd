import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { Grid, Text } from '../../elements';
import { history } from '../../redux/configureStore';

const EduCheckAlert = (props) => {
  const dispatch = useDispatch();
  const { closeModal } = props;

  return (
    <Grid
      position='fixed'
      right='0'
      left='0'
      bottom='250px'
      display='flex'
      flexDirection='column'
      alignItems='center'
      zIndex='9999'
      height='264px'
      maxWidth='414px'
      width='auto'
      margin='35px auto'
      padding='0 50px'
      boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1);'
      bg='#FFFFFF'
      borderRadius='30px 30px 0 0'
      boxSizing='border-box'>
      <Grid margin='25px 0 0 0' width='60px' height='120px'>
        <img
          src={process.env.PUBLIC_URL + '/img/GUIicon/warning_dog_icon.svg'}
        />
      </Grid>
      <Text
        align='center'
        margin='14.25px 0 0 0'
        line_height='21px'
        weight='600'>
        입양 신청 전 <span style={{ fontWeight: '800' }}> 입양 필수지식</span>을
        <br />
        수료하셔야합니다!
        <br />
        튜토리얼 페이지로 이동합니다
      </Text>
      <Grid display='flex' justifyContent='center'>
        <Button
          onClick={() => {
            closeModal();
            window.sessionStorage.clear();
            history.push('/tutorial');
          }}
          height='40px'
          width='130px'
          margin='17px 0 0 10px'
          padding='12px 0px'
          size='14px'
          weight='600'
          bg='#FE7968'
          border='none'
          border_radius='34px'>
          튜토리얼로 이동!
        </Button>
      </Grid>
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

export default EduCheckAlert;
