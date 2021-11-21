import React from 'react';
import styled from 'styled-components';
import { history } from '../../redux/configureStore';
import { Grid, Image, Text } from '../../elements';
import { useSelector } from 'react-redux';
import { transform } from 'lodash';

const MainIfYouFirstAdoption = (props) => {
  const userInfo = useSelector((state) => state.user?.user.userInfo);
  const token = localStorage.getItem('USER_TOKEN');
  const isLogin = useSelector((state) => state.user?.user.isLogin);

  // if (token && !isLogin) {
  //   return <div>로딩중~</div>;
  // }

  return (
    <Grid
      position='relative'
      display='flex'
      justifyContent='space-between'
      width='auto'
      height='138px'
      bg='white'
      border='0.5px solid #E7E5E5'
      borderRadius='10px'
      boxShadow='5px 5px 12px rgba(227, 177, 171, 0.3)'
      boxSizing='border-box'
    >
      <img
        width='164'
        height='164'
        style={{
          position: 'relative',
          left: '0px',
          bottom: '23px',
        }}
        src={process.env.PUBLIC_URL + '/img/illust/mainillust.svg'}
      />
      <Grid
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        padding='0 6px 0 0 '
        width='auto'
      >
        <Text margin='0 0 12px 0' size='18px'>
          입양이
          <ElSpan>
            처음
            <img
              style={{ position: 'absolute', top: '-5px', right: '25px' }}
              src={process.env.PUBLIC_URL + '/img/icon/dot_pink.svg'}
            />
            <img
              style={{ position: 'absolute', top: '-5px', right: '7px' }}
              src={process.env.PUBLIC_URL + '/img/icon/dot_pink.svg'}
            />
          </ElSpan>
          이라면?
        </Text>

        {userInfo.eduList === null ? (
          <BePerfect
            onClick={() => {
              history.push('/tutorial');
              window.sessionStorage.clear();
            }}
          >
            <Text margin='0' color='white' size='14px' weight='700'>
              완벽한 견주되기
            </Text>
            <img
              style={{ position: 'absolute', top: '7px', left: '18px' }}
              src={process.env.PUBLIC_URL + '/img/icon/dot_white.svg'}
            />
            <img
              style={{ position: 'absolute', top: '7px', left: '31px' }}
              src={process.env.PUBLIC_URL + '/img/icon/dot_white.svg'}
            />
            <img
              style={{ position: 'absolute', top: '7px', left: '42px' }}
              src={process.env.PUBLIC_URL + '/img/icon/dot_white.svg'}
            />
          </BePerfect>
        ) : userInfo.eduList[0] && userInfo.eduList[0].필수지식 === true ? (
          <BePerfect
            onClick={() => {
              history.push('/fosterknowledge');
              window.sessionStorage.clear();
            }}
          >
            <Text margin='0' color='white' size='14px' weight='700'>
              완벽한 견주되기
            </Text>
            <img
              style={{ position: 'absolute', top: '7px', left: '18px' }}
              src={process.env.PUBLIC_URL + '/img/icon/dot_white.svg'}
            />
            <img
              style={{ position: 'absolute', top: '7px', left: '31px' }}
              src={process.env.PUBLIC_URL + '/img/icon/dot_white.svg'}
            />
            <img
              style={{ position: 'absolute', top: '7px', left: '42px' }}
              src={process.env.PUBLIC_URL + '/img/icon/dot_white.svg'}
            />
          </BePerfect>
        ) : (
          <BePerfect
            onClick={() => {
              history.push('/tutorial');
              window.sessionStorage.clear();
            }}
          >
            <Text margin='0' color='white' size='14px' weight='700'>
              완벽한 견주되기
            </Text>
            <img
              style={{ position: 'absolute', top: '7px', left: '18px' }}
              src={process.env.PUBLIC_URL + '/img/icon/dot_white.svg'}
            />
            <img
              style={{ position: 'absolute', top: '7px', left: '31px' }}
              src={process.env.PUBLIC_URL + '/img/icon/dot_white.svg'}
            />
            <img
              style={{ position: 'absolute', top: '7px', left: '42px' }}
              src={process.env.PUBLIC_URL + '/img/icon/dot_white.svg'}
            />
          </BePerfect>
        )}
      </Grid>
    </Grid>
  );
};

const ElSpan = styled.span`
  position: relative;
  font-size: 18px;
  font-weight: 800;
`;

const BePerfect = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: #fe7968;
`;

export default MainIfYouFirstAdoption;
