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
import Footer from '../components/Footer';
import { history } from '../redux/configureStore';
import { postActions } from '../redux/modules/post';
import { applyActions } from '../redux/modules/apply';

const Mypage = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.user.userInfo);
  const [wishedListDisplay, setWishedListDisplay] = React.useState();
  const [adoptionCheckDisplay, setAdoptionCheckDisplay] =
    React.useState('none');
  const [dockingCheck, setDockingCheck] = React.useState('none');
  const isToken = localStorage.getItem('USER_TOKEN');
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
    dispatch(postActions.getWishPostMW(userInfo.userId));
    dispatch(applyActions.getMyApplyMW());
    dispatch(postActions.getMyPostsMW(userInfo.userId));

    return () => dispatch(postActions.changeCardCover(false));
  }, []);

  if (!isToken) {
    window.alert('로그인이 필요한 페이지입니다!');
    history.goBack();
  }

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
      <Grid></Grid>
    </Grid>
  );
};

export default Mypage;
