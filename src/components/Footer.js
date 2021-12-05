import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { actionCreators as userAction } from '../redux/modules/user';
import styled from 'styled-components';
import { Grid, Text } from '../elements';

const Footer = withRouter((props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userInfo = useSelector((state) => state.user.user.userInfo);
  const token = localStorage.getItem('USER_TOKEN');
  const isLogin = useSelector((state) => state.user.user.isLogin);

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
        maxWidth='414px'
        height='119px'
        margin='0 auto'
        boxShadow='0px -10px 50px 5px rgba(47, 47, 47, 0.06)'
        bg='white'
        borderRadius='30px 30px 0px 0px'>
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

            <Text margin='10px 0 0 0' color='#6B6462' weight='800' size='12px'>
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

            <Text margin='10px 0 0 0' color='#6B6462' weight='800' size='12px'>
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

            <Text margin='10px 0 0 0' color='#6B6462' weight='800' size='12px'>
              입양지식
            </Text>
          </Grid>
        )}

        <Grid
          _onClick={() => {
            history.push('/adoption');
          }}
          width='auto'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          cusor='pointer'>
          <img
            width='27.5px'
            height='24px'
            src={process.env.PUBLIC_URL + '/img/icon/dog_adoption_icon1.svg'}
          />

          <Text margin='10px 0 0 0' color='#6B6462' weight='800' size='12px'>
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

          <Text margin='10px 0 0 0' color='#6B6462' weight='800' size='12px'>
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
          <img src={process.env.PUBLIC_URL + '/img/icon/mypage_icon1.svg'} />

          <Text margin='10px 0 0 0' color='#6B6462' weight='800' size='12px'>
            마이페이지
          </Text>
        </Grid>

        {token ? (
          <Grid
            _onClick={() => {
              dispatch(userAction.LogOutDB());
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

            <Text margin='10px 0 0 0' color='#6B6462' weight='800' size='12px'>
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

            <Text margin='10px 0 0 0' color='#6B6462' weight='800' size='12px'>
              로그인
            </Text>
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
});

export default Footer;
