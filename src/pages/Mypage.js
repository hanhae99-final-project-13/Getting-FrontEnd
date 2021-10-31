import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '../elements';
import {
  MypageUserInfo,
  MypageWishedList,
  MypageAdoptionCheck,
  MypageCategory,
  MypageDockingCheck,
} from '../components/mypage';
import { postActions } from '../redux/modules/post';

import Footer from '../components/Footer';

const Mypage = () => {
  const dispatch = useDispatch();
  const useInfo = useSelector((state) => state.user.user.userInfo);
  const [wishedListDisplay, setWishedListDisplay] = React.useState();
  const [adoptionCheckDisplay, setAdoptionCheckDisplay] =
    React.useState('none');
  const [dockingCheck, setDockingCheck] = React.useState('none');
  const showWishedList = (a) => {
    setAdoptionCheckDisplay('none');
    setDockingCheck('none');
    setWishedListDisplay('block');
    a();
    dispatch(postActions.changeDeleteMode(false));
    dispatch(postActions.changeCardCover(false));
  };
  const showadoptionCheck = (a) => {
    setWishedListDisplay('none');
    setDockingCheck('none');
    setAdoptionCheckDisplay('black');
    a();
    dispatch(postActions.changeDeleteMode(false));
    dispatch(postActions.changeCardCover(true));
  };
  const showaDockingCheck = (a) => {
    setWishedListDisplay('none');
    setAdoptionCheckDisplay('none');
    setDockingCheck('block');
    a();
    dispatch(postActions.changeDeleteMode(false));
    dispatch(postActions.changeCardCover(false));
  };
  return (
    <Grid>
      <Grid padding='36px' width='auto'>
        <MypageUserInfo />
        <MypageCategory
          showWishedList={showWishedList}
          showadoptionCheck={showadoptionCheck}
          showaDockingCheck={showaDockingCheck}
        />
        <MypageWishedList display={wishedListDisplay} />
        <MypageAdoptionCheck display={adoptionCheckDisplay} />
        <MypageDockingCheck display={dockingCheck} />
      </Grid>
      <Grid>
        <Footer></Footer>
      </Grid>
    </Grid>
  );
};

export default Mypage;
