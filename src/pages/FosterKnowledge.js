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
    <Grid width='375px' margin='80px auto 0'>
      <Grid width='150px' margin='0 auto'>
        <Text margin='0' weight='800' align='center'>
          튜토리얼 필수 현황
        </Text>

        <Grid
          _onClick={() => {
            history.push('/essentialknowledge');
            // window.location.reload();
          }}
          margin='24px 0 0 0'
          position='relative'
          display='flex'
          flexDirection='column'
          alignItems='center'>
          {userInfo.eduList && userInfo.eduList[0].필수지식 === true ? (
            <Grid
              left='15px'
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

          <Image
            size='128'
            src='https://image.shutterstock.com/image-vector/happy-woman-little-doghand-drawn-600w-1942348717.jpg'
            boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'></Image>
          <Text margin='21px 0 0 0' weight='700'>
            필수지식
          </Text>
        </Grid>

        <Grid
          margin='24px 0 0 0'
          position='relative'
          display='flex'
          flexDirection='column'
          alignItems='center'>
          {userInfo.eduList && userInfo.eduList[0].심화지식 === true ? (
            <Grid
              left='15px'
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

          <Image
            size='128'
            src='https://image.shutterstock.com/image-vector/happy-woman-little-doghand-drawn-600w-1942348717.jpg'
            boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'></Image>
          <Text margin='21px 0 0 0' weight='700'>
            심화지식1
          </Text>
        </Grid>

        <Grid
          margin='24px 0 0 0'
          position='relative'
          display='flex'
          flexDirection='column'
          alignItems='center'>
          {userInfo.eduList && userInfo.eduList[0].심화지식2 === true ? (
            <Grid
              left='15px'
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

          <Image
            size='128'
            src='https://image.shutterstock.com/image-vector/happy-woman-little-doghand-drawn-600w-1942348717.jpg'
            boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'></Image>
          <Text margin='21px 0 0 0' weight='700'>
            심화지식2
          </Text>
        </Grid>
      </Grid>
      <Footer></Footer>
    </Grid>
  );
};

export default FosterKnowledge;
