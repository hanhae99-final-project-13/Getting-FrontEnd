import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid, Text } from '../elements';
import {
  MypageUserInfo,
  MypageWishedList,
  MypageAdoptionCheck,
  MypageCategory,
  MypageDockingCheck,
} from '../components/mypage';
import { BackButton, Header, Logo } from '../components';
import { history } from '../redux/configureStore';
import { postActions } from '../redux/modules/post';
import { applyActions } from '../redux/modules/apply';
import { ErrorAlert, WarningAlert } from '../shared/Alerts';
import WebSocket from './WebSocket';
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
    dispatch(postActions.getWishPostMW());
    dispatch(applyActions.getMyApplyMW());
    dispatch(postActions.getMyPostsMW());

    return () => dispatch(postActions.changeCardCover(false));
  }, []);

  if (!isToken) {
    ErrorAlert('로그인이 필요한 페이지입니다!');
    history.goBack();
  }

  const editButton = () => {
    WarningAlert('서비스 준비중입니다');
  };

  return (
    <Grid
      position='relative'
      maxWidth='414px'
      margin='0 auto'
      padding='63px 0 0 0'
    >
      <BackButton position='absolute' left='36px' top='21px' />
      <Text
        position='absolute'
        right='36px'
        top='21px'
        margin='0'
        size='12px'
        weight='800'
        _onClick={editButton}
      >
        수정하기
      </Text>
      <WebSocket />
      <Grid margin='107px 0 0 0' width='auto'>
        <MypageUserInfo />
      </Grid>
      <Grid height='9px' bg='#F6F6F6' />
      <Grid
        padding='30px 36px'
        width='auto'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'
      >
        <MypageCategory
          showWishedList={showWishedList}
          showaDockingCheck={showaDockingCheck}
          showadoptionCheck={showadoptionCheck}
        />
        <MypageWishedList display={wishedListDisplay} />
        <MypageDockingCheck display={dockingCheck} />
        <MypageAdoptionCheck display={adoptionCheckDisplay} />
      </Grid>
    </Grid>
  );
};

export default Mypage;
