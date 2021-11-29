import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { history } from '../redux/configureStore';
import { Grid } from '../elements';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { actionCreators } from '../redux/modules/user';

const Header = (props) => {
  const dispatch = useDispatch();
  const histroy = useHistory();

  const isLogin = useSelector((state) => state.user.user.isLogin);
  const token = localStorage.getItem('USER_TOKEN');
  // 헤더 알람 조회
  const isRead = useSelector((state) => state.user.user.userInfo.isRead);
  const alarmCount = useSelector(
    (state) => state.user.user.userInfo?.alarmCount,
  );
  // React.useEffect(() => {
  //   if (!token) {
  //     return null;
  //   }
  //   wsConnectSubscribe();
  //   return null;
  // }, []);
  return (
    <React.Fragment>
      <Grid
        bg='white'
        boxSizing='border-box'
        position='fixed'
        top='0px'
        borderRadius='0 0 15px 15px '
        display='flex'
        justifyContent='space-between'
        maxWidth='414px'
        height='60px'
        padding='0 12px'
        margin='0 auto'
        zIndex='3'
        left='0'
        right='0'
      >
        <Grid display='flex' alignItems='center'>
          <Grid
            width='45px'
            height='45px'
            bg='white'
            display='flex'
            alignItems='center'
            justifyContent='center'
            _onClick={() => {
              histroy.goBack();
            }}
          >
            <img
              style={{ width: '10px' }}
              src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'}
            />
          </Grid>
        </Grid>

        <Grid
          display='flex'
          alignItems='center'
          justifyContent='center'
          margin='0 auto'
          _onClick={() => {
            histroy.push('/main');
            // dispatch(actionCreators.updateAlarm(0));
          }}
        >
          <img
            width='50'
            src={process.env.PUBLIC_URL + '/img/getting_typo_4.svg'}
          />
        </Grid>
        {token ? (
          <Grid
            display='flex'
            alignItems='center'
            justifyContent='flex-end'
            width='375px'
          >
            <Grid
              borderRadius='3px'
              width='45px'
              height='45px'
              bg='white'
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              <FontAwesomeIcon
                onClick={() => {
                  // WarningAlert('서비스 준비중입니다');
                  dispatch(actionCreators.readAlarm(true));
                  history.push('/alarm');
                }}
                icon={faBell}
                color='black'
                fontSize='1x'
              />
              {isRead === false ? (
                <Grid
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  width='12px'
                  height='12px'
                  borderRadius='20px'
                  position='relative '
                  right='15%'
                  top='-10%'
                  color='white'
                  bg='red'
                  fontSize='10px'
                >
                  {/* {alarmCount} */}
                </Grid>
              ) : null}
            </Grid>
          </Grid>
        ) : (
          <Grid display='flex' alignItems='center' justifyContent='flex-end'>
            <Grid
              _onClick={() => {
                histroy.push('/login');
              }}
              borderRadius='3px'
              width='45px'
              height='45px'
              bg='white'
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              <FontAwesomeIcon icon={faSignInAlt} color='black' fontSize='1x' />
            </Grid>
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
};

const TEXT = styled.p`
  text-align: center;
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  width: 100%;
  font-weight: ${(props) => (props.bold ? `600` : `400`)};
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.size ? `font-size: ${props.size};` : '')}
`;

export default Header;
