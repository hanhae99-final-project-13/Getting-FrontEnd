import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
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

  if (window.location.pathname === '/') return null;
  if (token && !isLogin) {
    return <div>로딩중~</div>;
  }
  return (
    <React.Fragment>
      <Grid
        maxWidth='375px'
        margin='0 auto'
        left='0'
        right='0'
        bg='white'
        position='fixed'
        bottom='0px'
        borderRadius='15px 15px 0 0'
        display='flex'
        justifyContent='space-around'
        height='80px'
        boxShadow='0px -10px 50px 5px rgba(47, 47, 47, 0.06)'
      >
        {userInfo.eduList && userInfo.eduList[0].필수지식 === true ? (
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
        ) : (
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
            <FontAwesomeIcon icon={faList} color='black' fontSize='1x' />
            <TEXT size='14px' bold margin='7px 0 0 0'>
              입양지식
            </TEXT>
          </Grid>
        )}
        <Grid
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          _onClick={() => {
            history.push('/adoption');
          }}
        >
          <FontAwesomeIcon icon={faPen} color='black' fontSize='1x' />
          <TEXT size='14px' bold margin='7px 0 0 0'>
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
          <FontAwesomeIcon icon={faHouseUser} color='black' fontSize='1x' />
          <TEXT size='14px' bold margin='7px 0 0 0'>
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
          <FontAwesomeIcon icon={faUser} color='black' fontSize='1x' />
          <TEXT size='14px' bold margin='7px 0 0 0'>
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
          <FontAwesomeIcon icon={faHammer} color='black' fontSize='1x' />
          <TEXT size='14px' bold margin='7px 0 0 0'>
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
