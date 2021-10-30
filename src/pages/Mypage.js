import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '../elements';
import {
  MypageUserInfo,
  MypageWishedList,
  MypageAdoptionCheck,
  MypageCategory,
  DockingCheck,
} from '../components/mypage';

const Mypage = () => {
  const dispatch = useDispatch();
  const useInfo = useSelector((state) => state.user.user.userInfo);
  const [wishedListDisplay, setWishedListDisplay] = React.useState();
  const [adoptionCheckDisplay, setAdoptionCheckDisplay] =
    React.useState('none');
  const [dockingCheck, setDockingCheck] = React.useState('none');
  const showWishedList = () => {
    setAdoptionCheckDisplay('none');
    setDockingCheck('none');
    setWishedListDisplay('block');
  };
  const showadoptionCheck = () => {
    setWishedListDisplay('none');
    setDockingCheck('none');
    setAdoptionCheckDisplay('black');
  };
  const showaDockingCheck = () => {
    setWishedListDisplay('none');
    setAdoptionCheckDisplay('none');
    setDockingCheck('block');
  };
  return (
    <Grid padding='36px' width='auto'>
      <MypageUserInfo />
      <MypageCategory
        showWishedList={showWishedList}
        showadoptionCheck={showadoptionCheck}
        showaDockingCheck={showaDockingCheck}
      />
      <MypageWishedList display={wishedListDisplay} />
      <MypageAdoptionCheck display={adoptionCheckDisplay} />
      <DockingCheck display={dockingCheck} />
    </Grid>
  );
};

export default Mypage;
