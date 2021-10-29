import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';
import {
  SuccessAlert,
  WarningAlert,
  ErrorAlert,
  imageSuccessAlert,
} from '../../shared/Alerts';

//액션타입
const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';
const UPDATE_USERINFO = 'UPDATE_USERINFO';

//액션 생성함수
const SetUser = createAction(SET_USER, (user) => ({ user }));
const LogOut = createAction(LOG_OUT, () => {});
const updateUserInfo = createAction(UPDATE_USERINFO, (userInfo) => ({
  userInfo,
}));

//초기값
const initialState = {
  user: {
    userInfo: {
      nickname: null,
      email: null,
      userImgUrl:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E',
      classCount: null,
      alarmCount: null,
    },
    isLogin: false,
  },
};

// 미들웨어

// 로그인
const GetUserDB = (user) => {
  console.log(user);
  return (dispatch, getState, { history }) => {
    apis
      .login(user)
      .then((res) => {
        console.log('로그인 정보', res.data.data);
        console.log('로그인 정보', res.data.status);
        const USER_TOKEN = res.data.data.token;
        window.localStorage.setItem('USER_TOKEN', USER_TOKEN);
        const user = {
          userInfo: {
            email: res.data.data.email,
            nickname: res.data.data.nickname,
            userImgUrl: res.data.data.userImgUrl,
            classCount: res.data.data.classCount,
            alarmCount: res.data.data.alarmCount,
            applyList: res.data.data.applyList,
          },
          isLogin: true,
        };
        dispatch(SetUser(user));
        history.push('/');
      })
      .catch((error) => {
        console.log(error, '등록되지않은 회원입니다.');
        ErrorAlert('아이디 또는 패스워드가 맞지않아요!', 'bottom');
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
  // console.log(form);
  return (dispatch, getState, { history }) => {
    apis
      .signup(form)
      .then((res) => {
        console.log('회원가입정보', res.data.data);
        console.log('회원가입정보', res.data.status);
        // imageSuccessAlert('회원 가입 성공!');
        // history.push('/login');
      })
      .catch((error) => {
        // error.response.data.data.message
        window.alert('회원가입 실패', error);
      });
  };
};

//로그인체크
const LoginCheck = () => {
  // console.log();
  return (dispatch, getState, { history }) => {
    apis
      .loginCheck()
      .then((res) => {
        console.log('로그인체크 정보', res.data.data);
        const user = {
          userInfo: {
            email: res.data.data.email,
            nickname: res.data.data.nickname,
            userImgUrl: res.data.data.userImgUrl,
            classCount: res.data.data.classCount,
            alarmCount: res.data.data.alarmCount,
            applyList: res.data.data.applyList,
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

//카카오 로그인
const KakaoLogin = (code) => {
  // console.log();
  return (dispatch, getState, { history }) => {
    apis
      .kakaoLogin(code)
      .then((res) => {
        console.log('카카오 로그인정보', res.data.data);
        const USER_TOKEN = res.data.data.token;
        window.localStorage.setItem('USER_TOKEN', USER_TOKEN);
        const user = {
          userInfo: {
            email: res.data.data.email,
            nickname: res.data.data.nickname,
            userImgUrl: res.data.data.userImgUrl,
            classCount: res.data.data.classCount,
            alarmCount: res.data.data.alarmCount,
            applyList: res.data.data.applyList,
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

// const CheckId = (username) => {
//   console.log(username);
//   // console.log();
//   return (dispatch, getState, { history }) => {
//     apis
//       .checkId(username)
//       .then((res) => {
//         console.log(res.data.data, '아이디체크');
//         // console.log(res.data.status, '아이디체크');
//       })
//       .catch((error) => {
//         // error.response.data.data.message
//         console.log(error, '아이디체크 실패');
//       });
//   };
// };

// const Checknickname = (nickname) => {
//   // console.log();
//   return (dispatch, getState, { history }) => {
//     apis
//       .checknickName(nickname)
//       .then((res) => {
//         console.log(res.data.data, '닉네임체크');
//         // console.log(res.data.status, '닉네임체크');
//       })
//       .catch((error) => {
//         // error.response.data.data.message
//         console.log(error, '닉네임체크 실패');
//       });
//   };
// };

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
    [UPDATE_USERINFO]: (state, action) =>
      produce(state, (draft) => {
        draft.user.userInfo = action.payload.userInfo;
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
  // CheckId,
  // Checknickname,
};

export { actionCreators };
