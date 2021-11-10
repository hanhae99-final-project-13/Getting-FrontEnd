import React from 'react';
import styled from 'styled-components';
import { history } from '../../redux/configureStore';
import { Grid, Image, Text } from '../../elements';
import { useSelector } from 'react-redux';

const MainIfYouFirstAdoption = (props) => {
  const userInfo = useSelector((state) => state.user?.user.userInfo);
  const token = localStorage.getItem('USER_TOKEN');
  const isLogin = useSelector((state) => state.user?.user.isLogin);

  // console.log(isLogin);
  if (token && !isLogin) {
    return <div>로딩중~</div>;
  }

  return (
    <Grid
      display='flex'
      flexDirection='column'
      justifyContent='space-evenly'
      width='auto'
      padding='1em'
      borderRadius='10px'
      boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
      height='125px'>
      <Grid
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        height='auto'>
        <Image />
        <Text margin='0' size='18px'>
          입양이
          <ElSpan margin='0' size='18px' weight='800'>
            처음
          </ElSpan>
          이라면?
        </Text>
      </Grid>
      {userInfo.eduList && userInfo.eduList[0].필수지식 === true ? (
        <Grid display='flex' justifyContent='flex-end' height='auto'>
          <BePerfect
            onClick={() => {
              history.push('/fosterknowledge');
              window.sessionStorage.clear();
            }}>
            <Text margin='0' color='white' size='14px' weight='700'>
              완벽한 견주되기
            </Text>
          </BePerfect>
        </Grid>
      ) : (
        <Grid display='flex' justifyContent='flex-end' height='auto'>
          <BePerfect
            onClick={() => {
              history.push('/tutorial');
              window.sessionStorage.clear();
            }}>
            <Text margin='0' color='white' size='14px' weight='700'>
              완벽한 견주되기
            </Text>
          </BePerfect>
        </Grid>
      )}
    </Grid>
  );
};

const ElSpan = styled.span`
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

  div:nth-child(1) {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    background-color: white;
  }
`;

export default MainIfYouFirstAdoption;
