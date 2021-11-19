import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import jwt_Decode from 'jwt-decode';
import { apis } from '../../lib/axios';
import {
  SuccessAlert,
  WarningAlert,
  ErrorAlert,
  imageSuccessAlert,
} from '../../shared/Alerts';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { SignalCellularConnectedNoInternet1Bar } from '@material-ui/icons';

//유저정보 액션
const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';
const UPDATE_USERINFO = 'UPDATE_USERINFO';
const ADD_EDUSUCCESS = 'ADD_EDUSUCCESS';

//에러 Alert 액션
const CHECK_ERROR = 'CHECK_ERROR';

//알림 액션
const LOAD_ALARMLIST = 'LOAD_ALARMLIST';
const LOAD_ALARM = 'LOAD_ALARM';
const DELETE_ALARMLIST = 'DELETE_ALARMLIST';
const UPDATE_ALARMCOUNT = 'UPDATE_ALARMCOUNT';
//유저 액션 생성함수
const SetUser = createAction(SET_USER, (user) => ({ user }));
const LogOut = createAction(LOG_OUT, () => {});
const updateUserInfo = createAction(UPDATE_USERINFO, (userInfo) => ({
  userInfo,
}));
const addEduSuccess = createAction(ADD_EDUSUCCESS, (data) => ({ data }));

//에러 액션 생성함수
const checkError = createAction(CHECK_ERROR, (data) => ({ data }));

//알림 액션생성함수
const loadAlarmList = createAction(LOAD_ALARMLIST, (alarm) => ({
  alarm,
}));
const loadAlarm = createAction(LOAD_ALARM, (alarm) => ({
  alarm,
}));
const deleteAlarm = createAction(DELETE_ALARMLIST, (alarm) => ({
  alarm,
}));
const updateAlarm = createAction(UPDATE_ALARMCOUNT, (alarmCount) => ({
  alarmCount,
}));
//초기값
const initialState = {
  user: {
    userInfo: {
      nickname: null,
      email: null,
      userImgUrl:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E',
      phone: null,
      eduList: [],
      alarmCount: null,
      alarmContent: [],
      userId: null,
    },
    isLogin: false,
  },
  error: {
    errorAlert: false,
  },
};

// 미들웨어
// 로그인
const GetUserDB = (user) => {
  return (dispatch, getState, { history }) => {
    apis
      .login(user)
      .then((res) => {
<<<<<<< HEAD
        console.log(res.data);
        const USER_TOKEN = res.data.data.token.accessToken;
        const REFRESH_TOKEN = res.data.data.token.refreshToken;
=======
        console.log('서버에서 받은 로그인 정보', res.data.data);
        console.log('서버 로그인 status정보', res.data.status);
        const USER_TOKEN = res.data.data.token.accessToken;

>>>>>>> 1718ba5 ((김기철) [style] footer 수정)
        window.localStorage.setItem('USER_TOKEN', USER_TOKEN);
        window.localStorage.setItem('REFRESH_TOKEN', REFRESH_TOKEN);
        // setTimeout(() => {
        //   const accessToken = localStorage.getItem('USER_TOKEN');
        //   const refreshToken = localStorage.getItem('REFRESH_TOKEN');
        //   apis
        //     .refresh({
        //       accessToken,
        //       refreshToken,
        //     })
        //     .then((res) => {
        //       console.log(res.data);
        //       localStorage.setItem('USER_TOKEN', res.data.accessToken);
        //       localStorage.setItem('REFRESH_TOKEN', res.data.refreshToken);
        //     })
        //     .catch((err) => {
        //       console.log(err);
        //     });
        // }, 10000);
        const user = {
          userInfo: {
            userId: res.data.data.userId,
            email: res.data.data.email,
            nickname: res.data.data.nickname,
            userImgUrl: res.data.data.userImgUrl,
            eduList: res.data.data.eduList,
            phone: res.data.data.phone,
            alarmCount: res.data.data.alarmCount,
          },
          isLogin: true,
        };

        dispatch(SetUser(user));
        // window.location.href = '/main';
        history.replace('/main');
        // window.location.reload();
      })
      .catch((error) => {
        const data = { errorAlert: true };
        dispatch(checkError(data));
        window.scrollTo(0, 1000);
        // ErrorAlert('아이디 또는 패스워드가 맞지않아요!', 'bottom');
      });
  };
};

// 로그아웃
const LogOutDB = () => {
  return function (dispatch, getState, { history }) {
    localStorage.clear();
    dispatch(LogOut());
    imageSuccessAlert('로그아웃 되셨습니다');
    history.push('/main');
  };
};

// 회원가입
const SignupDB = (form) => {
  console.log(form);
  return (dispatch, getState, { history }) => {
    apis
      .signup(form)
      .then((res) => {
        console.log('회원가입정보', res.data.data);
        console.log('회원가입정보', res.data.status);
        imageSuccessAlert('회원 가입을 축하드립니다');
        history.push('/login');
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        // ErrorAlert(error.response.data.errorMessage);
      });
  };
};

//로그인체크
const LoginCheck = () => {
  return (dispatch, getState, { history }) => {
    apis
      .loginCheck()
      .then((res) => {
        console.log('로그인체크 정보', res.data.data);
        const user = {
          userInfo: {
            userId: res.data.data.userId,
            email: res.data.data.email,
            nickname: res.data.data.nickname,
            userImgUrl: res.data.data.userImgUrl,
            phone: res.data.data.phone,
            eduList: res.data.data.eduList,
            alarmCount: res.data.data.alarmCount,
          },
          isLogin: true,
        };
        dispatch(SetUser(user));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//카카오 로그인
const KakaoLogin = (code) => {
  console.log(code, 'db에 넘겨주는코드');
  return (dispatch, getState, { history }) => {
    apis
      .kakaoLogin(code)

      .then((res) => {
        console.log('카카오 로그인정보', res.data.data);
        const USER_TOKEN = res.data.data.token.accessToken;
        const REFRESH_TOKEN = res.data.data.token.refreshToken;
        window.localStorage.setItem('USER_TOKEN', USER_TOKEN);
        window.localStorage.setItem('REFRESH_TOKEN', REFRESH_TOKEN);
        const user = {
          userInfo: {
            email: res.data.data.email,
            userId: res.data.data.userId,
            nickname: res.data.data.nickname,
            userImgUrl: res.data.data.userImgUrl, // 기본값 넣어달라하기
            phone: res.data.data.phone,
            eduList: res.data.data.eduList,
            alarmCount: res.data.data.alarmCount,
          },
          isLogin: true,
        };
        dispatch(SetUser(user));
        // window.alert('성공적으로 로그인이 되었습니다!!');
        history.push('/main');
      })
      .catch((error) => {
        // error.response.data.data.message
        console.log(error, '로그인 실패');
      });
  };
};
// 입양지식완료
const addEduSuccessDB = (classNumber) => {
  console.log(classNumber, '서버에 넘어가는 클래스넘버값');
  return (dispatch, getState, { history }) => {
    apis
      .education(classNumber)
      .then((res) => {
        console.log(res.data.status, '성공');
        console.log(res.data.data.msg, '메세지');
        dispatch(addEduSuccess(res.data.data.eduList));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 유저정보수정
const updateUserInfoMW = (userInfo) => {
  console.log(userInfo);
  return (dispatch) => {
    apis
      .updateUserInfo(userInfo)
      .then((res) => {
        console.log(res.data);
        dispatch(updateUserInfo(userInfo));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
const loadAlarmListToAxios = () => {
  return (dispatch) => {
    apis
      .getAlarmList()
      .then((res) => {
        console.log('알람리스트 ', res);
        dispatch(loadAlarmList(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
const loadAlarmToAxios = () => {
  return (dispatch) => {
    apis
      .getAlarm()
      .then((res) => {
        console.log('알람하나 로드', res);
        dispatch(loadAlarm(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const deleteAlarmToAxios = () => {
  return (dispatch) => {
    apis
      .deleteAlarmList()
      .then((res) => {
        console.log('알람리스트 삭제', res);
        dispatch(deleteAlarm(res.data));
      })
      .catch((err) => {
        console.log('알람리스트 삭제 오류', err);
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
        draft.user.userInfo = {
          nickname: null,
          email: null,
          userImgUrl:
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E',
          phone: null,
          eduList: null,
          alarmCount: null,
          applyList: [],
          alarmContent: [],
          userId: null,
        };
        draft.user.isLogin = false;
      }),
    [UPDATE_USERINFO]: (state, action) =>
      produce(state, (draft) => {
        draft.user.userInfo = {
          ...draft.user.userInfo,
          ...action.payload.userInfo,
        };
      }),
    [ADD_EDUSUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.user.userInfo.eduList = action.payload.data;
      }),
    [CHECK_ERROR]: (state, action) =>
      produce(state, (draft) => {
        draft.error = action.payload.data;
      }),

    [LOAD_ALARMLIST]: (state, action) =>
      produce(state, (draft) => {
        draft.user.userInfo.alarmCount = action.payload.alarm.data.alarmCount;
        draft.user.userInfo.alarmContent = action.payload.alarm.data.data;
        console.log('알림 컨텐츠1', action.payload.alarm.data.data);
        console.log(state.user.userInfo.alarmContent);
      }),
    [LOAD_ALARM]: (state, action) =>
      produce(state, (draft) => {
        console.log('알람 로드', state.alarmList);
        console.log('무슨 값', action.payload.alarm.data);
      }),
    [DELETE_ALARMLIST]: (state, action) =>
      produce(state, (draft) => {
        console.log('알람 삭제');
        draft.user.userInfo.alarmContent = [];
        console.log(draft.user.userInfo.alarmContent);
      }),
    [UPDATE_ALARMCOUNT]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.alarmCount);
        console.log(state.user.userInfo.alarmCount);
        draft.user.userInfo.alarmCount = action.payload.alarmCount;
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
  updateUserInfo,
  updateUserInfoMW,
  loadAlarmListToAxios,
  loadAlarmToAxios,
  deleteAlarmToAxios,
  addEduSuccessDB,
  checkError,
  updateAlarm,
};

export { actionCreators };
