import React from 'react';
import { Grid, Image, Text } from '../../elements';
import Footer from '../Footer';

const Tutorial = (props) => {
  const { history } = props;

  return (
    <Grid width='375px' margin='0 auto'>
      <Grid
        _onClick={() => {
          history.goBack();
        }}
        position='sticky'
        top='65px'
        left='36px'
        width='25px'
        height='25px'
      >
        <Grid width='12px' height='7px'>
          <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
        </Grid>
      </Grid>

      <Grid width='200px' margin='196px auto 0'>
        <img
          src={process.env.PUBLIC_URL + '/img/GUIicon/tutorial_1_icon.svg.svg'}
        />
      </Grid>

      <Grid margin='0 auto 49px' display='flex' justifyContent='center'>
        <Text margin='0' weight='700' align='center' line_height='24px'>
          안녕하세요 , 항해님
          <br /> 입양 지식은 처음이시네요! <br />
          <span style={{ fontWeight: '800' }}>튜토리얼</span>을 시작할까요?
        </Text>
      </Grid>

      <Grid
        margin='0 auto'
        _onClick={() => {
          history.push('/tutorial2');
        }}
        bg='#FF6666'
        width='157px'
        height='52px'
        borderRadius='26px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        boxShadow='1px 1px 5px rgba(0, 0, 0, 0.5)'
      >
        <Text color='white' margin='0' weight='800'>
          네, 시작할래요!
        </Text>
      </Grid>
    </Grid>
  );
};

export default Tutorial;
