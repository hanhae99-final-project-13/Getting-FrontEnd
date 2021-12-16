import React from 'react';
import { Grid, Text } from '../../elements';

const Tutorial2 = (props) => {
  const { history } = props;

  return (
    <Grid
      position='relative'
      maxWidth='414px'
      width='auto'
      margin='0 auto 120px auto'>
      <Grid
        _onClick={() => {
          history.goBack();
        }}
        position='absolute'
        top='-155px'
        left='36px'
        width='25px'
        height='25px'
        cusor='pointer'>
        <Grid width='12px' height='7px'>
          <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
        </Grid>
      </Grid>

      <Grid display='flex' width='315px' margin='221px auto 36px'>
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
            boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'>
            <img
              width='57.11px'
              height='53px'
              src={
                process.env.PUBLIC_URL + '/img/GUIicon/badge_1_icon.svg'
              }></img>
          </Grid>
        </Grid>
        <Grid
          display='flex'
          flexDirection='column'
          alignItems='center'
          margin='0 0 0 6px'>
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
            boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'>
            <img
              width='61px'
              height='53px'
              src={
                process.env.PUBLIC_URL + '/img/GUIicon/badge_2_icon.svg'
              }></img>
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
            boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'>
            <img
              width='60px'
              height='54px'
              src={
                process.env.PUBLIC_URL + '/img/GUIicon/badge_3_icon.svg'
              }></img>
          </Grid>
        </Grid>
      </Grid>

      <Grid display='flex' justifyContent='center' margin='0 auto 30px'>
        <Text align='center' margin='0' weight='700' line_height='24px'>
          튜토리얼은 총 세단계로 나눠져있습니다. <br />
          아직 <span style={{ fontWeight: '800' }}>필수지식</span>을 이수하지
          않으셨네요! <br />
          <span style={{ fontWeight: '800' }}>필수지식 튜토리얼</span>을
          시작할까요?
        </Text>
      </Grid>
      <Grid
        _onClick={() => {
          history.push('/essentialknowledge');
        }}
        display='flex'
        justifyContent='center'
        alignItems='center'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.15)'
        width='157px'
        height='52px'
        margin=' 0 auto'
        bg='#FE7968'
        borderRadius='26px'
        cusor='pointer'>
        <Text margin='0' color='white' weight='800' size='16px'>
          시작할래요!
        </Text>
      </Grid>
    </Grid>
  );
};

export default Tutorial2;
