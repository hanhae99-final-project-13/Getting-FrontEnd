import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid, Image, Text } from '../../elements';
import { history } from '../../redux/configureStore';

const MainHello = (props) => {
  const userInfo = useSelector((state) => state.user.user.userInfo);
  const isLogin = useSelector((state) => state.user.user.isLogin);

  return (
    <Grid>
      <Image src={isLogin ? userInfo.userImgUrl : null} />
      <Text size='16px' weight='700' margin='0'>
        안녕하세요 {isLogin ? userInfo.nickname + '님!' : '!'}
      </Text>
      <Text size='16px' weight='700' margin='0'>
        귀여운 가족을 찾으러 오셨나요?
      </Text>
      <Grid
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        width='100%'
      >
        <Grid display='flex' width='auto'>
          <Text margin='4px 0 0 0' size='12px' weight='700' color='#5c5c5c'>
            저희가 함께 도와 드릴게요! 😉
          </Text>
          <Image size='16' />
        </Grid>
        <ElA
          onClick={() => {
            history.push('/intro');
          }}
        >
          알아보기
        </ElA>
      </Grid>
    </Grid>
  );
};

const ElA = styled.p`
  margin: 0;
  color: #cecbca;
  font-size: 12px;
  font-weight: 700;
  text-decoration: underline;
`;

export default MainHello;
