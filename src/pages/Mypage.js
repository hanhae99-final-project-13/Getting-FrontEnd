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
import { history } from '../redux/configureStore';

const Mypage = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.user.userInfo);
  const [wishedListDisplay, setWishedListDisplay] = React.useState();
  const [adoptionCheckDisplay, setAdoptionCheckDisplay] =
    React.useState('none');
  const [dockingCheck, setDockingCheck] = React.useState('none');
  const showWishedList = (a) => {
    setAdoptionCheckDisplay('none');
    setDockingCheck('none');
    setWishedListDisplay('block');
    a();
    dispatch(postActions.changeCardCover(false));
    dispatch(postActions.changeDockingDeleteMode(false));
    dispatch(postActions.changeAdoptionDeleteMode(false));
  };
  const showaDockingCheck = (a) => {
    if (dockingCheck === 'block') {
      return;
    }
    setWishedListDisplay('none');
    setAdoptionCheckDisplay('none');
    setDockingCheck('block');
    a();
    dispatch(postActions.changeAdoptionDeleteMode(false));
    dispatch(postActions.changeCardCover(true));
  };
  const showadoptionCheck = (a) => {
    setWishedListDisplay('none');
    setDockingCheck('none');
    setAdoptionCheckDisplay('black');
    a();
    dispatch(postActions.changeCardCover(false));
    dispatch(postActions.changeDockingDeleteMode(false));
  };
  
  React.useEffect(() => {
    dispatch(postActions.getWishPostMW(userInfo.email))
  }, [])

  return (
    <Grid>
      <Grid margin='40px 0 0 0' padding='36px' width='auto'>
        <MypageUserInfo />
        <MypageCategory
          showWishedList={showWishedList}
          showaDockingCheck={showaDockingCheck}
          showadoptionCheck={showadoptionCheck}
        />
        <MypageWishedList display={wishedListDisplay} />
        <MypageDockingCheck display={dockingCheck} />
        <MypageAdoptionCheck display={adoptionCheckDisplay} />
      </Grid>
      <Grid>
        <Footer></Footer>
      </Grid>
    </Grid>
  );
};

export default Mypage;
