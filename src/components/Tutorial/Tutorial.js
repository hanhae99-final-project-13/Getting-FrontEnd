import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Text } from '../../elements';

const Tutorial = (props) => {
  const { history } = props;
  const userInfo = useSelector((state) => state.user.user.userInfo);
  const isToken = document.cookie.includes('USER_TOKEN');

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
        top='-130px'
        left='36px'
        width='25px'
        height='25px'
      >
        <Grid width='12px' height='7px'>
          <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
        </Grid>
      </Grid>

      <Grid maxWidth='200px' width='auto' margin='196px auto 0'>
        <img
          src={process.env.PUBLIC_URL + '/img/GUIicon/tutorial_1_icon.svg'}
        />
      </Grid>

      <Grid margin='0 auto 32px' display='flex' justifyContent='center'>
        <Text margin='0' weight='700' align='center' line_height='24px'>
          안녕하세요 {isToken && `,  ${userInfo.nickname}님`}
          <br /> 입양 지식은 처음이시네요! <br />
          <span style={{ fontWeight: '800' }}>튜토리얼</span>을 시작할까요?
        </Text>
      </Grid>

      <Grid
        cusor='pointer'
        margin='0 auto'
        _onClick={() => {
          history.push('/tutorial2');
        }}
        bg='#FE7968'
        maxWidth='157px'
        width='auto'
        height='52px'
        borderRadius='26px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.15)'
      >
        <Text color='white' margin='0' weight='800' size='16px'>
          네, 시작할래요!
        </Text>
      </Grid>
    </Grid>
  );
};

export default Tutorial;
