import React from 'react';
import { Grid, Text } from '../../elements';

const Tutorial2 = (props) => {
  const { history } = props;

  return (
    <Grid
      maxWidth='414px'
      width='auto'
      margin='0 auto 120px auto'
      position='relative'
    >
      <Grid
        cusor='pointer'
        _onClick={() => {
          history.goBack();
        }}
        position='absolute'
        top='-155px'
        left='36px'
        width='25px'
        height='25px'
      >
        <Grid width='12px' height='7px'>
          <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
        </Grid>
      </Grid>

      <Grid margin='221px auto 36px' display='flex' width='315px'>
        <Grid display='flex' flexDirection='column' alignItems='center'>
          <Text margin='0 0 16px 0' weight='800'>
            필수지식
          </Text>

          <Grid
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='80px'
            height='80px'
            borderRadius='40px'
            bg='#FFFFFF'
            boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'
          >
            <img
              width='57.11px'
              height='53px'
              src={process.env.PUBLIC_URL + '/img/GUIicon/badge_1_icon.svg'}
            ></img>
          </Grid>
        </Grid>
        <Grid
          display='flex'
          flexDirection='column'
          alignItems='center'
          margin='0 0 0 6px'
        >
          <Text margin='0 0 16px 0' weight='800'>
            심화지식1
          </Text>
          <Grid
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='80px'
            height='80px'
            borderRadius='40px'
            bg='#FFFFFF'
            boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'
          >
            <img
              width='61px'
              height='53px'
              src={process.env.PUBLIC_URL + '/img/GUIicon/badge_2_icon.svg'}
            ></img>
          </Grid>
        </Grid>
        <Grid display='flex' flexDirection='column' alignItems='center'>
          <Text margin='0 0 16px 0' weight='800'>
            심화지식2
          </Text>
          <Grid
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='80px'
            height='80px'
            borderRadius='40px'
            bg='#FFFFFF'
            boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'
          >
            <img
              width='60px'
              height='54px'
              src={process.env.PUBLIC_URL + '/img/GUIicon/badge_3_icon.svg'}
            ></img>
          </Grid>
        </Grid>
      </Grid>

      <Grid margin='0 auto 30px' display='flex' justifyContent='center'>
        <Text margin='0' weight='700' align='center' line_height='24px'>
          튜토리얼은 총 세단계로 나눠져있습니다. <br />
          아직 <span style={{ fontWeight: '800' }}>필수지식</span>을 이수하지
          않으셨네요! <br />
          <span style={{ fontWeight: '800' }}>필수지식 튜토리얼</span>을
          시작할까요?
        </Text>
      </Grid>
      <Grid
        cusor='pointer'
        _onClick={() => {
          history.push('/essentialknowledge');
        }}
        margin=' 0 auto'
        bg='#FE7968'
        width='157px'
        height='52px'
        borderRadius='26px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.15)'
      >
        <Text color='white' margin='0' weight='800' size='16px'>
          시작할래요!
        </Text>
      </Grid>
    </Grid>
  );
};

export default Tutorial2;
