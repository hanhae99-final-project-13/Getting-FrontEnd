import React, { useState } from 'react';
import { Grid, Text } from '../../elements';
import styled from 'styled-components';
import dokking_logo from '../../images/doking_logo.jpg';
import { useDispatch } from 'react-redux';
import { history } from '../../redux/configureStore';

const EduCheckAlert = (props) => {
  const dispatch = useDispatch();
  const { closeModal } = props;

  return (
    <Grid
      padding='0 50px'
      position='fixed'
      bg='#FFFFFF'
      bottom='250px'
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
        margin='40.25px 0 0 0'
        width='60px'
        height='120px'
        bgisize='cover'
        bgiposition='center'
        bgi={dokking_logo}></Grid>
      <Text
        margin='14.25px 0 0 0'
        align='center'
        line_height='21px'
        weight='600'>
        입양 신청 전 <span style={{ fontWeight: '800' }}> 입양 필수지식</span>을
        <br />
        수료하셔야합니다!
        <br />
        튜토리얼 페이지로 이동합니다.
      </Text>
      <Grid display='flex' justifyContent='center'>
        <Button
          margin='17px 0 0 10px'
          width='130px'
          size='14px'
          weight='600'
          height='40px'
          padding='12px 0px'
          bg='#FE7968'
          border='none'
          border_radius='34px'
          onClick={() => {
            closeModal();
            history.push('/tutorial');
          }}>
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
