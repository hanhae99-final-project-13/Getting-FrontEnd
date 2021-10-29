import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '../elements';
import {
  MypageUserInfo,
  MypageWishedList,
  MypageAdoptionCheck,
} from '../components/mypage';

const Mypage = () => {
  const dispatch = useDispatch();
  const useInfo = useSelector((state) => state.user);
  return (
    <Grid padding='36px' width='auto'>
      <MypageUserInfo />
      <MypageWishedList />
      <MypageAdoptionCheck />
    </Grid>
  );
};

export default Mypage;
