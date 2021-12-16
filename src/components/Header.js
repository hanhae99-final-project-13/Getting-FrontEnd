import React from 'react';
import { history } from '../redux/configureStore';
import { Grid } from '../elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../redux/modules/user';
import { useHistory, withRouter } from 'react-router-dom';
const Header = withRouter((props) => {
  const dispatch = useDispatch();
  const histroy = useHistory();
  const pathName = props;
  const token = localStorage.getItem('USER_TOKEN');
  // 헤더 알람 조회
  const isRead = useSelector((state) => state.user.user.userInfo.isRead);

  return (
    <React.Fragment>
      <Grid
        position={
          pathName.history.location.pathname.includes('/detail') ||
          pathName.history.location.pathname.includes('/addpost')
            ? 'fixed'
            : null
        }
        top='0px'
        left='0'
        right='0'
        zIndex='3'
        display='flex'
        justifyContent='space-between'
        maxWidth='414px'
        height='60px'
        padding='0 12px'
        margin='0 auto'
        borderRadius='0 0 15px 15px '
        bg='white'
        boxSizing='border-box'
      >
        <Grid display='flex' alignItems='center'>
          <Grid
            _onClick={() => {
              histroy.goBack();
            }}
            display='flex'
            alignItems='center'
            justifyContent='center'
            width='45px'
            height='45px'
            bg='white'
            cusor='pointer'
          >
            <img
              style={{ width: '10px' }}
              src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'}
            />
          </Grid>
        </Grid>
        <Grid
          _onClick={() => {
            histroy.push('/main');
          }}
          display='flex'
          alignItems='center'
          justifyContent='center'
          margin='0 auto'
          cusor='pointer'
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
              display='flex'
              alignItems='center'
              justifyContent='center'
              borderRadius='3px'
              width='45px'
              height='45px'
              bg='white'
              cusor='pointer'
            >
              <FontAwesomeIcon
                onClick={() => {
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
                ></Grid>
              ) : null}
            </Grid>
          </Grid>
        ) : (
          <Grid display='flex' alignItems='center' justifyContent='flex-end'>
            <Grid
              _onClick={() => {
                histroy.push('/login');
              }}
              display='flex'
              alignItems='center'
              justifyContent='center'
              width='45px'
              height='45px'
              bg='white'
              borderRadius='3px'
            >
              <FontAwesomeIcon icon={faSignInAlt} color='black' fontSize='1x' />
            </Grid>
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
});
export default Header;
