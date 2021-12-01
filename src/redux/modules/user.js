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
import { setCookie, deleteCookie, deleteAllCookies } from '../../shared/Cookie';
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
const READ_ALARM = 'READ_ALARM';
const ALARM_CHECK = 'ALARM_CHECK';
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
const deleteAlarm = createAction(DELETE_ALARMLIST, () => ({}));
const updateAlarm = createAction(UPDATE_ALARMCOUNT, (alarmData) => ({
  alarmData,
}));
const readAlarm = createAction(READ_ALARM, (isRead) => ({
  isRead,
}));
const alarmCheck = createAction(ALARM_CHECK, (alarmId, checked) => ({
  alarmId,
  checked,
}));
//초기값
const initialState = {
  user: {
    userInfo: {
      requestedPostList: [],
      nickname: null,
      email: null,
      userImgUrl:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E',
      phone: null,
      eduList: [],
      alarmCount: null,
      alarmContent: [],
      isRead: null,
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
        const USER_TOKEN = res.data.data.token.accessToken;
        const REFRESH_TOKEN = res.data.data.token.refreshToken;
        window.localStorage.setItem('USER_TOKEN', USER_TOKEN);
        window.localStorage.setItem('REFRESH_TOKEN', REFRESH_TOKEN);
        window.localStorage.setItem('USER_ID', res.data.data.userId);
        const user = {
          userInfo: {
            userId: res.data.data.userId,
            email: res.data.data.email,
            nickname: res.data.data.nickname,
            userImgUrl: res.data.data.userImgUrl,
            eduList: res.data.data.eduList,
            phone: res.data.data.phone,
            alarmCount: res.data.data.alarmCount,
            alarmContent: res.data.data.alarmContents,
            requestedPostList: res.data.data.requestedPostList,
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
    // deleteCookie('USER_TOKEN');
    // deleteCookie('REFRESH_TOKEN');
    localStorage.clear();
    dispatch(LogOut());
    imageSuccessAlert('로그아웃 되셨습니다');
    history.push('/main');
  };
};

// 회원가입
const SignupDB = (form) => {
  return (dispatch, getState, { history }) => {
    apis
      .signup(form)
      .then((res) => {
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
        const user = {
          userInfo: {
            userId: res.data.data.userId,
            email: res.data.data.email,
            nickname: res.data.data.nickname,
            userImgUrl: res.data.data.userImgUrl,
            phone: res.data.data.phone,
            eduList: res.data.data.eduList,
            alarmCount: res.data.data.alarmCount,
            alarmContent: /* res.data.data.alarmContent */ [],
            requestedPostList: res.data.data.requestedPostList,
            isRead: null,
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
  return (dispatch, getState, { history }) => {
    apis
      .kakaoLogin(code)

      .then((res) => {
        const USER_TOKEN = res.data.data.token.accessToken;
        const REFRESH_TOKEN = res.data.data.token.refreshToken;
        window.localStorage.setItem('USER_TOKEN', USER_TOKEN);
        window.localStorage.setItem('REFRESH_TOKEN', REFRESH_TOKEN);
        window.localStorage.setItem('USER_ID', res.data.data.userId);
        const user = {
          userInfo: {
            email: res.data.data.email,
            userId: res.data.data.userId,
            nickname: res.data.data.nickname,
            userImgUrl: res.data.data.userImgUrl, // 기본값 넣어달라하기
            phone: res.data.data.phone,
            eduList: res.data.data.eduList,
            alarmCount: res.data.data.alarmCount,
            requestedPostList: res.data.data.requestedPostList,
          },
          isLogin: true,
        };
        dispatch(SetUser(user));
        // window.alert('성공적으로 로그인이 되었습니다!!');
        console.log(document.cookie);
        history.replace('/main');
      })
      .catch((error) => {
        // error.response.data.data.message
        console.log(error, '로그인 실패');
      });
  };
};
// 입양지식완료
const addEduSuccessDB = (classNumber) => {
  return (dispatch, getState, { history }) => {
    apis
      .education(classNumber)
      .then((res) => {
        dispatch(addEduSuccess(res.data.data.eduList));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 유저정보수정
const updateUserInfoMW = (userInfo) => {
  return (dispatch) => {
    apis
      .updateUserInfo(userInfo)
      .then((res) => {
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
        dispatch(deleteAlarm());
      })
      .catch((err) => {
        console.log('알람리스트 삭제 오류', err);
      });
  };
};

const isReadAlarmToAxios = (alarmId) => {
  return (dispatch) => {
    apis
      .isReadAlarm(alarmId)
      .then((res) => {
        dispatch(
          alarmCheck(res.data.data.data.alarmId, res.data.data.data.checked),
        );
      })
      .catch((err) => {
        console.log(err);
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
          alarmContent: null,
          userId: null,
          requestedPostList: [],
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
      }),
    [LOAD_ALARM]: (state, action) => produce(state, (draft) => {}),
    [DELETE_ALARMLIST]: (state, action) =>
      produce(state, (draft) => {
        draft.user.userInfo.alarmContent = [];
      }),
    [UPDATE_ALARMCOUNT]: (state, action) =>
      produce(state, (draft) => {
        draft.user.userInfo.alarmCount = action.payload.alarmData.alarmCount;
      }),
    [READ_ALARM]: (state, action) =>
      produce(state, (draft) => {
        draft.user.userInfo.isRead = action.payload.isRead;
      }),
    [ALARM_CHECK]: (state, action) =>
      produce(state, (draft) => {
        const idx = state.user.userInfo.alarmContent.findIndex(
          (alarm) => alarm.alarmId === action.payload.alarmId,
        );
        if (
          draft.user.userInfo.alarmContent.length >= 1 &&
          action.payload.checked !== undefined
        ) {
          draft.user.userInfo.alarmContent[idx].checked =
            action.payload.checked;
        }
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
  readAlarm,
  isReadAlarmToAxios,
};

export { actionCreators };
