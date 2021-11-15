import React, { useEffect } from 'react';
import { useDispatch, useSelector, dispatch } from 'react-redux';
import { useHistory, useParams, withRouter } from 'react-router-dom';
import { actionCreators as userAction } from '../redux/modules/user';
import { ErrorAlert } from '../shared/Alerts';
import styled from 'styled-components';
import { Grid } from '../elements';
import { sample } from 'lodash';

const Footer = withRouter((props) => {
  const dispatch = useDispatch();
  const a = props;
  console.log(a.history.location.pathname);

  const history = useHistory();
  const userInfo = useSelector((state) => state.user.user.userInfo);
  const token = localStorage.getItem('USER_TOKEN');
  const isLogin = useSelector((state) => state.user.user.isLogin);

  if (token && !isLogin) {
    return <div>로딩중~</div>;
  }

  if (a.history.location.pathname === '/') return null;
  if (a.history.location.pathname === '/login') return null;
  if (a.history.location.pathname === '/signup') return null;
  if (a.history.location.pathname === '/tutorial') return null;
  if (a.history.location.pathname.includes('/apply')) return null;

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
        {userInfo.eduList === null ? (
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
        ) : userInfo.eduList[0] && userInfo.eduList[0].필수지식 === true ? (
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
            <Grid width='36px' height='28px'>
              <img
                src={process.env.PUBLIC_URL + '/img/icon/graduation_icon.svg'}
              />
            </Grid>
            <TEXT color='#6B6462' size='14px' bold margin='7px 0 0 0'>
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
            <Grid width='36px' height='28px'>
              <img
                src={process.env.PUBLIC_URL + '/img/icon/graduation_icon.svg'}
              />
            </Grid>
            <TEXT color='#6B6462' size='14px' bold margin='7px 0 0 0'>
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

        {token ? (
          <Grid
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            _onClick={() => {
              dispatch(userAction.LogOutDB());
            }}
          >
            <Grid width='29px' height='28px'>
              <img src={process.env.PUBLIC_URL + '/img/icon/logout_icon.svg'} />
            </Grid>
            <TEXT color='#6B6462' size='14px' bold margin='7px 0 0 0'>
              로그아웃
            </TEXT>
          </Grid>
        ) : (
          <Grid
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            _onClick={() => {
              history.push('/login');
            }}
          >
            <Grid width='29px' height='28px'>
              <img src={process.env.PUBLIC_URL + '/img/icon/logout_icon.svg'} />
            </Grid>
            <TEXT color='#6B6462' size='14px' bold margin='7px 0 0 0'>
              로그인
            </TEXT>
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
});
const TEXT = styled.p`
  text-align: center;
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  width: 100%;
  font-weight: ${(props) => (props.bold ? `600` : `400`)};
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.size ? `font-size: ${props.size};` : '')}
`;
export default Footer;
