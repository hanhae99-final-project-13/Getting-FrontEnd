import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid, Image, Text, Input } from '../../elements';
import { MypageImageUpload } from '.';
import { actionCreators as userActions } from '../../redux/modules/user';

const MypageUserInfo = (props) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.user.userInfo);
  const [editMode, setEditMode] = React.useState(false);
  const [editNickname, setEditNickname] = React.useState('');

  const updateNickname = () => {
    dispatch(
      userActions.updateUserInfoMW({
        nickname: editNickname,
        userImgUrl: userInfo.userImgUrl,
      }),
    );
  };

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
        {editMode ? (
          <Input
            padding='4px 10px'
            border_radius='10px'
            value={editNickname}
            _onChange={(e) => {
              setEditNickname(e.target.value);
            }}
          />
        ) : (
          <Text margin='0' bold size='20'>
            {userInfo.nickname}
          </Text>
        )}
        {editMode ? (
          <Image
            size='20'
            src='https://static.thenounproject.com/png/1727505-200.png'
            _onClick={() => {
              setEditMode(!editMode);
              updateNickname();
            }}
          />
        ) : (
          <Image
            size='20'
            src='https://cdn.iconscout.com/icon/free/png-256/edit-2653317-2202989.png'
            _onClick={() => {
              setEditMode(!editMode);
            }}
          />
        )}
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
