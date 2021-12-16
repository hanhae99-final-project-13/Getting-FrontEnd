import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';

import { Grid, Text } from '../../elements';
import { actionCreators as userAction } from '../../redux/modules/user';
import ReCheckModal from '../adoptionApplycation/ReCheckModal';

const MypageFooter = withRouter((props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userInfo = useSelector((state) => state.user.user.userInfo);
  const token = localStorage.getItem('USER_TOKEN');
  const isLogin = useSelector((state) => state.user.user.isLogin);

  const [openLogOutAlert, setOpenLogOutAlert] = useState(false);

  const closeLogOutAlert = () => {
    setOpenLogOutAlert(!openLogOutAlert);
  };

  const logOut = () => {
    dispatch(userAction.LogOutDB());
  };

  if (token && !isLogin) {
    return <div></div>;
  }

  return (
    <React.Fragment>
      <Grid
        position='fixed'
        left='0'
        right='0'
        bottom='0'
        display='flex'
        justifyContent='space-evenly'
        height='84px'
        maxWidth='414px'
        margin='0 auto'
        boxShadow='0px -8px 50px 5px rgba(47, 47, 47, 0.06)'
        bg='white'
        borderRadius='11px 11px 0px 0px;'>
        {/* 데이터 안불러져왓을 때 null */}
        {userInfo.eduList === null ? (
          <Grid
            _onClick={() => {
              history.push('/tutorial');
              window.sessionStorage.clear();
            }}
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            width='auto'
            cusor='pointer'>
            <img
              width='30px'
              height='24px'
              src={process.env.PUBLIC_URL + '/img/icon/graduation_icon1.svg'}
            />

            <Text margin='8px 0 0 0' color='#6B6462' weight='800' size='12px'>
              입양지식
            </Text>
          </Grid>
        ) : userInfo.eduList[0] && userInfo.eduList[0].필수지식 === true ? (
          <Grid
            _onClick={() => {
              history.push('/fosterknowledge');
              window.sessionStorage.clear();
            }}
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            width='auto'
            cusor='pointer'>
            <img
              width='30px'
              height='24px'
              src={process.env.PUBLIC_URL + '/img/icon/graduation_icon1.svg'}
            />

            <Text margin='8px 0 0 0' color='#6B6462' weight='800' size='12px'>
              입양지식
            </Text>
          </Grid>
        ) : (
          <Grid
            _onClick={() => {
              history.push('/tutorial');
              window.sessionStorage.clear();
            }}
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            width='auto'
            cusor='pointer'>
            <img
              width='30px'
              height='24px'
              src={process.env.PUBLIC_URL + '/img/icon/graduation_icon1.svg'}
            />

            <Text margin='8px 0 0 0' color='#6B6462' weight='800' size='12px'>
              입양지식
            </Text>
          </Grid>
        )}

        <Grid
          _onClick={() => {
            history.push('/adoption');
          }}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          width='auto'
          cusor='pointer'>
          <img
            width='27.5px'
            height='24px'
            src={process.env.PUBLIC_URL + '/img/icon/dog_adoption_icon1.svg'}
          />

          <Text margin='8px 0 0 0' color='#6B6462' weight='800' size='12px'>
            입양하기
          </Text>
        </Grid>

        <Grid
          _onClick={() => {
            history.push('/main');
          }}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          width='auto'
          cusor='pointer'>
          <img src={process.env.PUBLIC_URL + '/img/icon/home_icon1.svg'} />

          <Text margin='8px 0 0 0' color='#6B6462' weight='800' size='12px'>
            홈
          </Text>
        </Grid>

        <Grid
          _onClick={() => {
            history.push('/mypage');
          }}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          width='auto'
          cusor='pointer'>
          <img
            src={process.env.PUBLIC_URL + '/img/icon/mypage_icon_orange.svg'}
          />

          <Text margin='8px 0 0 0' color='#FE7968' weight='800' size='12px'>
            마이페이지
          </Text>
        </Grid>

        {token ? (
          <Grid
            _onClick={() => {
              setOpenLogOutAlert(!openLogOutAlert);
            }}
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            width='auto'
            cusor='pointer'>
            <img
              width='24.86px'
              height='24px'
              src={process.env.PUBLIC_URL + '/img/icon/logout_icon1.svg'}
            />

            <Text margin='8px 0 0 0' color='#6B6462' weight='800' size='12px'>
              로그아웃
            </Text>
          </Grid>
        ) : (
          <Grid
            _onClick={() => {
              history.push('/login');
            }}
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            width='auto'
            cusor='pointer'>
            <img
              width='24.86px'
              height='24px'
              src={process.env.PUBLIC_URL + '/img/icon/logout_icon1.svg'}
            />

            <Text margin='8px 0 0 0' color='#6B6462' weight='800' size='12px'>
              로그인
            </Text>
          </Grid>
        )}
      </Grid>

      {openLogOutAlert ? (
        <ReCheckModal
          text='로그아웃 하시겠습니까?'
          image='/img/GUIicon/logout.svg'
          buttonTrueText='로그아웃 할게요'
          buttonFalseText='좀 더 둘러볼게요'
          closeModal={closeLogOutAlert}
          clickTrue={logOut}
        />
      ) : (
        ''
      )}
    </React.Fragment>
  );
});

export default MypageFooter;
