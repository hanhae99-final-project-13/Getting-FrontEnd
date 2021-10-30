import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '../elements';
import {
  MypageUserInfo,
  MypageWishedList,
  MypageAdoptionCheck,
  MypageCategory,
} from '../components/mypage';

import Footer from '../components/Footer';

const Mypage = () => {
  const dispatch = useDispatch();
  const useInfo = useSelector((state) => state.user.user.userInfo);
  const [wishedListDisplay, setWishedListDisplay] = React.useState();
  const [adoptionCheckDisplay, setAdoptionCheckDisplay] = React.useState();
  const showWishedList = () => {
    setAdoptionCheckDisplay('none');
    setWishedListDisplay('block');
  };
  const showadoptionCheck = () => {
    setWishedListDisplay('none');
    setAdoptionCheckDisplay('black');
  };
  return (
    <Grid>
      <Grid padding='36px' width='auto'>
        <MypageUserInfo />
        <MypageCategory
          showWishedList={showWishedList}
          showadoptionCheck={showadoptionCheck}
        />
        <MypageWishedList display={wishedListDisplay} />
        <MypageAdoptionCheck display={adoptionCheckDisplay} />
      </Grid>
      <Grid>
        <Footer></Footer>
      </Grid>
    </Grid>
  );
};

export default Mypage;
