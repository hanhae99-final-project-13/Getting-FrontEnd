import React from 'react';
import { Grid, Image, Text } from '../elements';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';

const FosterKnowledge = (props) => {
  const { history } = props;
  const userInfo = useSelector((state) => state.user.user.userInfo);

  const token = localStorage.getItem('USER_TOKEN');
  const isLogin = useSelector((state) => state.user?.user.isLogin);

  if (token && !isLogin) {
    return <div>로딩중~</div>;
  }

  return (
    <Grid width='375px' margin='0 auto '>
      <Grid
        _onClick={() => {
          history.goBack();
        }}
        position='absolute'
        top='65px'
        left='36px'
        width='25px'
        height='25px'>
        <Grid width='12px' height='7px'>
          <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
        </Grid>
      </Grid>

      <Grid position='absolute' top='66px'>
        <Text size='18px' margin='0' weight='800' align='center'>
          튜토리얼 이수 현황
        </Text>
      </Grid>

      <Grid
        position='relative'
        _onClick={() => {
          history.push('/essentialknowledge');
        }}
        display='flex'
        justifyContent='center'
        alignItems='center'
        width='128px'
        height='128px'
        margin='119px auto 0'
        borderRadius='64px'
        bg='#FFFFFF'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'>
        {userInfo.eduList && userInfo.eduList[0].필수지식 === true ? (
          <Grid
            top='-8px'
            left='-7px'
            width='37px'
            height='37px'
            bg='#FFBE5B'
            position='absolute'
            borderRadius='18px'
            display='flex'
            justifyContent='center'
            alignItems='center'>
            <Text color='white' margin='0' size='12px'>
              완료
            </Text>
          </Grid>
        ) : (
          ''
        )}
        <img
          width='95.18px'
          height='87.97px'
          src={process.env.PUBLIC_URL + '/img/GUIicon/badge_1_icon.svg'}></img>
      </Grid>

      <Grid margin='21px auto 0'>
        <Text width='auto' size='18px' weight='800' align='center'>
          필수지식
        </Text>
      </Grid>

      <Footer></Footer>
    </Grid>
  );
};

export default FosterKnowledge;
