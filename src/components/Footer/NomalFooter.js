import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { actionCreators as userAction } from '../../redux/modules/user';
import { Grid, Text } from '../../elements';

const NomalFooter = withRouter((props) => {
  const dispatch = useDispatch();
  const a = props;
  console.log(a.history.location.pathname);

  const history = useHistory();
  const userInfo = useSelector((state) => state.user.user.userInfo);
  const token = document.cookie.includes('USER_TOKEN');
  const isLogin = useSelector((state) => state.user.user.isLogin);

  // const data = {
  //   adoptionknowledge: false,
  //   adoption: false,
  //   home: false,
  //   mypage: false,
  // };
  // const [onClick, setOnClick] = useState(data);
  // console.log(onClick);

  // const clickAdoptionKnowledge = () => {
  //   const newData = {
  //     ...onClick,
  //     adoptionknowledge: true,
  //     adoption: false,
  //     home: false,
  //     mypage: false,
  //   };
  //   setOnClick(newData);
  // };

  // const { adoptionknowledge, adoption, home, mypage } = onClick;

  if (token && !isLogin) {
    return <div></div>;
  }

  if (a.history.location.pathname === '/') return null;
  if (a.history.location.pathname === '/login') return null;
  if (a.history.location.pathname === '/signup') return null;
  if (a.history.location.pathname === '/tutorial') return null;
  if (a.history.location.pathname.includes('/apply')) return null;

  return (
    <React.Fragment>
      <Grid
        boxShadow='0px -8px 50px 5px rgba(47, 47, 47, 0.06)'
        maxWidth='414px'
        margin='0 auto'
        left='0'
        right='0'
        bg='white'
        position='fixed'
        bottom='0'
        borderRadius='11px 11px 0px 0px;'
        display='flex'
        justifyContent='space-evenly'
        height='84px'
      >
        {/* 데이터 안불러져왓을 때 null */}
        {userInfo.eduList === null ? (
          <Grid
            width='auto'
            cusor='pointer'
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            _onClick={() => {
              history.push('/tutorial');
              window.sessionStorage.clear();
            }}
          >
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
            width='auto'
            cusor='pointer'
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            _onClick={() => {
              history.push('/fosterknowledge');
              window.sessionStorage.clear();
            }}
          >
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
            width='auto'
            cusor='pointer'
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            _onClick={() => {
              history.push('/tutorial');
              window.sessionStorage.clear();
            }}
          >
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
          width='auto'
          cusor='pointer'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          _onClick={() => {
            history.push('/adoption');
          }}
        >
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
          width='auto'
          cusor='pointer'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          _onClick={() => {
            history.push('/main');
          }}
        >
          <img src={process.env.PUBLIC_URL + '/img/icon/home_icon1.svg'} />

          <Text margin='8px 0 0 0' color='#6B6462' weight='800' size='12px'>
            홈
          </Text>
        </Grid>

        <Grid
          width='auto'
          cusor='pointer'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          _onClick={() => {
            history.push('/mypage');
          }}
        >
          <img src={process.env.PUBLIC_URL + '/img/icon/mypage_icon1.svg'} />

          <Text margin='8px 0 0 0' color='#6B6462' weight='800' size='12px'>
            마이페이지
          </Text>
        </Grid>

        {token ? (
          <Grid
            width='auto'
            cusor='pointer'
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            _onClick={() => {
              dispatch(userAction.LogOutDB());
            }}
          >
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
            width='auto'
            cusor='pointer'
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            _onClick={() => {
              history.push('/login');
            }}
          >
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
    </React.Fragment>
  );
});

export default NomalFooter;
