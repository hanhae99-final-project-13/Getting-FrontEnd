import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '../elements';
import {
  MypageUserInfo,
  MypageWishedList,
  MypageAdoptionCheck,
  MypageCategory,
} from '../components/mypage';

const Mypage = () => {
  const dispatch = useDispatch();
  const useInfo = useSelector((state) => state.user.user.userInfo);
  return (
    <Grid padding='36px' width='auto'>
      <MypageUserInfo />
      <MypageCategory />
      <MypageWishedList />
      <MypageAdoptionCheck />
    </Grid>
  );
};

export default Mypage;
