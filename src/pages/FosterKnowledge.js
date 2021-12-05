import React from 'react';
import { Grid, Text } from '../elements';
import { useSelector } from 'react-redux';

const FosterKnowledge = (props) => {
  const { history } = props;
  const token = localStorage.getItem('USER_TOKEN');

  const userInfo = useSelector((state) => state.user.user.userInfo);
  const isLogin = useSelector((state) => state.user?.user.isLogin);

  if (token && !isLogin) {
    return <div></div>;
  }

  return (
    <Grid
      position='relative'
      maxWidth='414px'
      width='auto'
      margin='0 auto 90px'>
      <Grid
        _onClick={() => {
          history.goBack();
        }}
        position='absolute'
        top='-58px'
        left='36px'
        zIndex='9999'
        width='20px'
        height='20px'
        cusor='pointer'>
        <Grid width='12px' height='7px'>
          <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
        </Grid>
      </Grid>

      <Grid position='absolute' top='-58px' left='0' right='0'>
        <Text align='center' weight='800' margin='0' size='18px'>
          튜토리얼 이수 현황
        </Text>
      </Grid>

      {/* 필수지식 */}
      <Grid
        _onClick={() => {
          history.push('/essentialknowledge');
          window.sessionStorage.clear();
        }}
        position='relative'
        display='flex'
        justifyContent='center'
        alignItems='center'
        width='128px'
        height='128px'
        margin='119px auto 0'
        bg='#FFFFFF'
        borderRadius='64px'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'
        cusor='pointer'>
        {userInfo.eduList && userInfo.eduList[0].필수지식 === true ? (
          <Grid
            position='absolute'
            top='-8px'
            left='-7px'
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='37px'
            height='37px'
            bg='#FFBE5B'
            borderRadius='18px'>
            <Text margin='0' color='white' size='12px'>
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

      <Text align='center' width='auto' size='18px' weight='800'>
        필수지식
      </Text>

      {/* 심화지식 */}
      <Grid
        _onClick={() => {
          history.push('/advancedknowledge1');
          window.sessionStorage.clear();
        }}
        position='relative'
        display='flex'
        justifyContent='center'
        alignItems='center'
        width='128px'
        height='128px'
        margin='24px auto 0'
        bg='#FFFFFF'
        borderRadius='64px'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'
        cusor='pointer'>
        {userInfo.eduList && userInfo.eduList[0].심화지식 === true ? (
          <Grid
            position='absolute'
            top='-8px'
            left='-7px'
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='37px'
            height='37px'
            bg='#FFBE5B'
            borderRadius='18px'>
            <Text margin='0' color='white' size='12px'>
              완료
            </Text>
          </Grid>
        ) : (
          ''
        )}
        <img
          width='101px'
          height='89px'
          src={process.env.PUBLIC_URL + '/img/GUIicon/badge_2_icon.svg'}></img>
      </Grid>

      <Text align='center' width='auto' size='18px' weight='800'>
        심화지식 1
      </Text>

      {/* 심화지식2 */}
      <Grid
        _onClick={() => {
          history.push('/advancedknowledge2');
          window.sessionStorage.clear();
        }}
        position='relative'
        display='flex'
        justifyContent='center'
        alignItems='center'
        width='128px'
        height='128px'
        margin='24px auto 0'
        borderRadius='64px'
        bg='#FFFFFF'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'
        cusor='pointer'>
        {userInfo.eduList && userInfo.eduList[0].심화지식2 === true ? (
          <Grid
            position='absolute'
            top='-8px'
            left='-7px'
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='37px'
            height='37px'
            bg='#FFBE5B'
            borderRadius='18px'>
            <Text color='white' margin='0' size='12px'>
              완료
            </Text>
          </Grid>
        ) : (
          ''
        )}
        <img
          width='101px'
          height='89px'
          src={process.env.PUBLIC_URL + '/img/GUIicon/badge_3_icon.svg'}></img>
      </Grid>

      <Text align='center' width='auto' size='18px' weight='800'>
        심화지식 2
      </Text>
    </Grid>
  );
};

export default FosterKnowledge;
