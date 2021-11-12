import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from '../elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHammer } from '@fortawesome/free-solid-svg-icons';
import { postActions } from '../redux/modules/post';
import { sample } from 'lodash';
const Footer = (props) => {
  const history = useHistory();
  const userInfo = useSelector((state) => state.user.user.userInfo);
  const token = localStorage.getItem('USER_TOKEN');
  const isLogin = useSelector((state) => state.user.user.isLogin);
  // if (token && !isLogin) {
  //   return <div>로딩중~</div>;
  // }
  if (window.location.pathname === '/') return null;
  if (window.location.pathname === '/login') return null;
  if (window.location.pathname === '/signup') return null;
  if (window.location.pathname.includes('/apply')) return null;
  // React.useEffect(()=>{

  // }, [window.location.pathname]);
  return (
    <React.Fragment>
      <Grid
        boxShadow='0px -10px 50px 5px rgba(47, 47, 47, 0.06)'
        maxWidth='375px'
        margin='0 auto'
        left='0'
        right='0'
        bg='white'
        position='fixed'
        bottom='0'
        borderRadius='15px 15px 0 0'
        display='flex'
        justifyContent='space-around'
        height='80px'
      >
        {/* {userInfo.eduList && userInfo.eduList[0].필수지식 === true ? (
          <Grid
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            _onClick={() => {
              history.push('/fosterknowledge');
              window.sessionStorage.clear();
            }}
          >
            <FontAwesomeIcon icon={faList} color='black' fontSize='1x' />
            <TEXT size='14px' bold margin='7px 0 0 0'>
              입양지식
            </TEXT>
          </Grid>
        ) : ( */}
        <Grid
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          _onClick={() => {
            history.push('/tutorial');
            window.sessionStorage.clear();
          }}
        >
          <Grid width='36px' height='28px'>
            <img
              src={process.env.PUBLIC_URL + '/img/icon/graduation_icon.svg'}
            />
          </Grid>
          <TEXT color='#6B6462' size='14px' bold margin='7px 0 0 0'>
            입양지식
          </TEXT>
        </Grid>
        {/* )} */}
        <Grid
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          _onClick={() => {
            history.push('/adoption');
          }}
        >
          <Grid width='32px' height='28px'>
            <img
              src={process.env.PUBLIC_URL + '/img/icon/dog_adoption_icon.svg'}
            />
          </Grid>
          <TEXT color='#6B6462' size='14px' bold margin='7px 0 0 0'>
            입양하기
          </TEXT>
        </Grid>
        <Grid
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          _onClick={() => {
            history.push('/main');
          }}
        >
          <Grid width='29px' height='28px'>
            <img src={process.env.PUBLIC_URL + '/img/icon/home_icon.svg'} />
          </Grid>
          <TEXT color='#6B6462' size='14px' bold margin='7px 0 0 0'>
            홈
          </TEXT>
        </Grid>
        <Grid
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          _onClick={() => {
            history.push('/mypage');
          }}
        >
          <Grid width='28px' height='28px'>
            <img src={process.env.PUBLIC_URL + '/img/icon/mypage_icon.svg'} />
          </Grid>
          <TEXT color='#6B6462' size='14px' bold margin='7px 0 0 0'>
            마이페이지
          </TEXT>
        </Grid>
        <Grid
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          _onClick={() => {
            history.push('/setting');
          }}
        >
          <Grid width='29px' height='28px'>
            <img src={process.env.PUBLIC_URL + '/img/icon/logout_icon.svg'} />
          </Grid>
          <TEXT color='#6B6462' size='14px' bold margin='7px 0 0 0'>
            설정하기
          </TEXT>
        </Grid>
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
export default Footer;
