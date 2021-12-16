import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Text } from '../../elements';

const Tutorial = (props) => {
  const { history } = props;
  const userInfo = useSelector((state) => state.user.user.userInfo);
  const isToken = localStorage.getItem('USER_TOKEN');

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
        top='-130px'
        left='36px'
        width='25px'
        height='25px'
        cusor='pointer'>
        <Grid width='12px' height='7px'>
          <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
        </Grid>
      </Grid>

      <Grid maxWidth='200px' width='auto' margin='196px auto 0'>
        <img
          src={process.env.PUBLIC_URL + '/img/GUIicon/tutorial_1_icon.svg'}
        />
      </Grid>

      <Grid display='flex' justifyContent='center' margin='0 auto 32px'>
        <Text align='center' margin='0' weight='700' line_height='24px'>
          안녕하세요 {isToken && `,  ${userInfo.nickname}님`}
          <br /> 입양 지식은 처음이시네요! <br />
          <span style={{ fontWeight: '800' }}>튜토리얼</span>을 시작할까요?
        </Text>
      </Grid>

      <Grid
        _onClick={() => {
          history.push('/tutorial2');
        }}
        display='flex'
        justifyContent='center'
        alignItems='center'
        maxWidth='157px'
        width='auto'
        height='52px'
        margin='0 auto'
        bg='#FE7968'
        borderRadius='26px'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.15)'
        cusor='pointer'>
        <Text color='white' margin='0' weight='800' size='16px'>
          네, 시작할래요!
        </Text>
      </Grid>
    </Grid>
  );
};

export default Tutorial;
