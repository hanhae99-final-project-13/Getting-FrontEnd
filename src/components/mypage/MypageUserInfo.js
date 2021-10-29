import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid, Image, Text } from '../../elements';
import { MypageImageUpload } from '.';

const MypageUserInfo = (props) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.user.userInfo);
  const [preview, setPreview] = React.useState();
  return (
    <Container>
      <Grid display='flex' width='auto' height='auto'>
        <Image
          margin='0'
          size='119'
          src={userInfo.userImgUrl}
          boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'
        />
        <MypageImageUpload />
      </Grid>
      <Grid display='flex' alignItems='center' width='auto' height='auto'>
        <Text margin='0' bold size='20'>
          닉네임을 설정해주세요!
        </Text>
        <Image size='20' />
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 0 18px -36px;
  width: calc(100% + 72px);
  height: 202px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
`;

export default MypageUserInfo;
