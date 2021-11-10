import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { history } from '../redux/configureStore';
import { Grid } from '../elements';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { postActions } from '../redux/modules/post';

const Header = (props) => {
  const dispatch = useDispatch();
  const histroy = useHistory();
  const path = useParams();
  // console.log(path, '경로');
  const isLogin = useSelector((state) => state.user.user.isLogin);
  const alarmCount = useSelector(
    (state) => state.user.user.userInfo.alarmCount,
  );

  if (window.location.pathname === '/') return null;
  return (
    <React.Fragment>
      <Grid
        bg='white'
        boxSizing='border-box'
        // padding='0 20px'
        position='fixed'
        top='0px'
        borderRadius='0 0 15px 15px '
        display='flex'
        justifyContent='space-between'
        width='100%'
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
          _onClick={() => {
            histroy.push('/main');
            dispatch(postActions.changeCardCover(false));
          }}
        >
          <TEXT size='20px' bold margin='0'>
            도킹
          </TEXT>
        </Grid>

        {isLogin ? (
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
                {alarmCount}
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
