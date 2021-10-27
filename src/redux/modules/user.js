import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';

//액션타입
const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';

//액션 생성함수
const SetUser = createAction(SET_USER, (user) => ({ user }));
const LogOut = createAction(LOG_OUT, () => {});

//초기값
const initialState = {
  user: {
    userInfo: {
      nickname: null,
      email: null,
      classCount: null,
      alarmCount: null,
    },
    isLogin: false,
  },
};

// 미들웨어

// 로그인
const GetUserDB = (user) => {
  // console.log(user);
  return (dispatch, getState, { history }) => {
    apis
      .login(user)
      .then((res) => {
        console.log('로그인 정보', res.data.data);
        const USER_TOKEN = res.data.data.token;
        window.localStorage.setItem('USER_TOKEN', USER_TOKEN);
        const user = {
          userInfo: {
            email: res.data.data.email,
            nickname: res.data.data.nickname,
            classCount: res.data.data.classCount,
            alarmCount: res.data.data.alarmCount,
          },
          isLogin: true,
        };
        dispatch(SetUser(user));
        window.alert('성공적으로 로그인이 되었습니다!!');
        history.push('/');
      })
      .catch((error) => {
        console.log(error, '등록되지않은 회원입니다.');
      });
  };
};

// 로그아웃
const LogOutDB = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem('USER_TOKEN');
    dispatch(LogOut());
    window.alert('로그아웃 되었습니다!');
    history.push('/');
  };
};

// 회원가입
const SignupDB = (form) => {
  console.log(form);
  return (dispatch, getState, { history }) => {
    apis
      .signup(form)
      .then((res) => {
        console.log(res.data.data.msg);
        window.alert('회원가입에 성공하셨습니다.');
        history.push('/login');
      })
      .catch((error) => {
        // error.response.data.data.message
        window.alert('회원가입 실패', error);
      });
  };
};

const LoginCheck = () => {
  // console.log();
  return (dispatch, getState, { history }) => {
    apis
      .loginCheck()
      .then((res) => {
        // console.log(res, '로그인체크');
        const user = {
          userInfo: {
            email: res.data.data.email,
            nickname: res.data.data.nickname,
            classCount: res.data.data.classCount,
            alarmCount: res.data.data.alarmCount,
          },
          isLogin: true,
        };
        dispatch(SetUser(user));
      })
      .catch((error) => {
        // error.response.data.data.message
        console.log(error, '로그인체크 실패');
      });
  };
};

const KakaoLogin = (code) => {
  // console.log();
  return (dispatch, getState, { history }) => {
    apis
      .kakaoLogin(code)
      .then((res) => {
        const USER_TOKEN = res.data.data.token;
        window.localStorage.setItem('USER_TOKEN', USER_TOKEN);
        const user = {
          userInfo: {
            email: res.data.data.email,
            nickname: res.data.data.nickname,
            classCount: res.data.data.classCount,
            alarmCount: res.data.data.alarmCount,
          },
          isLogin: true,
        };
        dispatch(SetUser(user));
        window.alert('성공적으로 로그인이 되었습니다!!');
        history.push('/');
      })
      .catch((error) => {
        // error.response.data.data.message
        console.log(error, '로그인 실패');
      });
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user.userInfo = action.payload.user.userInfo;
        draft.user.isLogin = action.payload.user.isLogin;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user.userInfo = null;
        draft.user.isLogin = null;
      }),
  },
  initialState,
);

const actionCreators = {
  GetUserDB,
  SignupDB,
  LogOutDB,
  LoginCheck,
  KakaoLogin,
};

export { actionCreators };
