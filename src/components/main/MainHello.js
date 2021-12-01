import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid, Image, Text } from '../../elements';
import { history } from '../../redux/configureStore';

const MainHello = (props) => {
  const userInfo = useSelector((state) => state.user.user.userInfo);
  const isLogin = useSelector((state) => state.user.user.isLogin);

  return (
    <Grid position='relative' padding='0 12px'>
      <Image
        src={
          isLogin &&
          userInfo.userImgUrl !==
            'https://gorokke.shop/image/profileDefaultImg.jpg'
            ? userInfo.userImgUrl
            : process.env.PUBLIC_URL + '/img/GUIicon/profile_default_icon.svg'
        }
        size='78'
        backgroundPosition='center'
      />
      <Grid
        position='absolute'
        top='0'
        right='24px'
        display='flex'
        flexDirection='column'
        alignItems='center'
        padding='10px 18px'
        width='auto'
        height='auto'
        borderRadius='50px'
        // bg='rgba(255, 190, 91, 0.6)'
        bg='#9FB0DA'
        boxShadow='10px 10px 20px rgba(0, 0, 0, 0.1)'
        cusor='pointer'
        _onClick={() =>
          (window.location.href =
            'https://docs.google.com/forms/d/11l_JZ-dFgEZL5gwkswhPEh6i5UvoLm0VgShU_6fLLos/edit')
        }
      >
        <img src={process.env.PUBLIC_URL + '/img/icon/dogbal.svg'} />
        <Text margin='5px 0 0 0' weight='700' color='white'>
          꾹꾹이
        </Text>
      </Grid>
      <Grid display='flex' width='auto' margin='18.5px 0 0 0'>
        <Text size='18px' weight='700' margin='0'>
          안녕하세요{isLogin && ','}&nbsp;
          {isLogin && ' '}
        </Text>
        <Text size='18px' weight='800' margin='0'>
          {isLogin && userInfo.nickname}
        </Text>
        <Text size='18px' weight='700' margin='0'>
          {isLogin && '님'}!
        </Text>
      </Grid>
      <Text size='18px' weight='700' margin='0 0 12px 0'>
        귀여운 가족을 찾으러 오셨나요?
      </Text>
      <Grid
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        width='calc(100% - 24px)'
      >
        <Grid display='flex' alignItems='center' width='auto'>
          <Text margin='0 3px 0 0' size='12px' weight='700' color='#5C5C5C'>
            저희가 함께 도와 드릴게요!
          </Text>
          <img src={process.env.PUBLIC_URL + '/img/icon/wink.svg'} />
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

const Bold = styled.span`
  font-weight: 800;
  font-size: 18px;
`;

const ElA = styled.p`
  margin: 0;
  color: #cecbca;
  font-size: 12px;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
`;

export default MainHello;
