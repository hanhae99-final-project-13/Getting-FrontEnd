import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { history } from '../redux/configureStore';
import { Grid } from '../elements';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// import { faBell } from '@fortawesome/free-solid-svg-icons';
// import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { postActions } from '../redux/modules/post';

const Header = (props) => {
  const dispatch = useDispatch();
  const histroy = useHistory();
  const path = useParams();
  // console.log(path, '경로');
  const isLogin = useSelector((state) => state.user.user.isLogin);
  const isToken = localStorage.getItem('USER_TOKEN');
  // const alarmCount = useSelector(
  //   (state) => state.user.user.userInfo?.alarmCount,
  // );

  if (window.location.pathname === '/') return null;
  if (window.location.pathname === '/login') return null;
  if (window.location.pathname === '/signup') return null;
  if (window.location.pathname === '/tutorial') return null;
  if (window.location.pathname === '/tutorial2') return null;
  if (window.location.pathname === '/essentialknowledge') return null;
  if (window.location.pathname === '/fosterknowledge') return null;
  if (window.location.pathname === '/essentialquiz') return null;
  if (window.location.pathname === '/essentialquiz2') return null;
  if (window.location.pathname === '/essentialquiz3') return null;
  if (window.location.pathname === '/essentialquiz4') return null;
  if (window.location.pathname === '/essentialquiz5') return null;
  if (window.location.pathname.includes('/apply')) return null;

  return (
    <React.Fragment>
      <Grid
        bg='white'
        boxSizing='border-box'
        // padding='0 20px'
        position='sticky'
        top='0px'
        borderRadius='0 0 15px 15px '
        display='flex'
        justifyContent='space-between'
        width='375px'
        height='60px'
        margin='0 auto'
        zIndex='1'
      >
        <Grid display='flex' alignItems='center'>
          <Grid
            borderRadius='3px'
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
            <FontAwesomeIcon icon={faChevronLeft} color='black' fontSize='1x' />
          </Grid>
        </Grid>

        <Grid
          display='flex'
          alignItems='center'
          justifyContent='center'
          _onClick={() => {
            histroy.push('/main');
          }}
        >
          <img
            width='50'
            src={process.env.PUBLIC_URL + '/img/getting_typo_4.svg'}
          />
        </Grid>
        <Grid
          display='flex'
          alignItems='center'
          justifyContent='flex-end'
          width='375px'
        ></Grid>
        {/* {isLogin ? (
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
                  history.push('/alarm');
                }}
                icon={faBell}
                color='black'
                fontSize='1x'
              />
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
                {alarmCount ? alarmCount : ''}
              </Grid>
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
        )} */}
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
