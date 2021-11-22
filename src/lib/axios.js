import axios from 'axios';
import { ErrorAlert } from '../shared/Alerts';

const instance = axios.create({
  baseURL: 'http://52.78.159.191', // 선강 님
  // baseURL: 'http://3.38.107.59', // 지은님
  // baseURL: 'http://3.36.139.165',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8', // 데이터보낼때 인코딩하고 서버쪽에서 받을때 디코딩 할때 글자타입이 필요하다.
    accept: 'application/json',
  },
  withCredentials: true, // CORS를 위해 설정, 기존은 SOP
});

instance.interceptors.request.use(
  (config) => {
    console.log(config);
    const aToken = localStorage.getItem('USER_TOKEN');
    if (!aToken) {
      return config;
    }

    config.headers = {
      'Content-Type': 'application/json; charset=UTF-8', // 데이터보낼때 인코딩하고 서버쪽에서 받을때 디코딩 할때 글자타입이 필요하다.
      accept: 'application/json',
      Authorization: `Bearer ${aToken}`,
    };
    return config;
  },
  (err) => {
    console.log(err);
  },
);

// let isTokenRefreshing = false;
// let refreshSubscribers = [];

// const onTokenRefreshed = (accessToken) => {
//   refreshSubscribers.map((callback, idx) => {
//     return callback(accessToken);
//   });
// };

// const addRefreshSubscriber = (callback) => {
//   refreshSubscribers.push(callback);
// };

instance.interceptors.response.use(
  (success) => {
    return success;
  },
  (err) => {
    console.log(err);
    console.log(err.response);
    console.log(err.config);
    const originalReq = err.config;
    if (
      err.response.status === 400 &&
      err.response.data.errorMessage !== '해당 입양신청서를 찾을 수 없습니다.'
    ) {
      ErrorAlert(err.response.data.errorMessage);
    }
    // if (err.response.status === 401) {
    //   if (!isTokenRefreshing) {
    //     isTokenRefreshing = true;
    //     // const accessToken = localStorage.getItem('USER_TOKEN');
    //     const refreshToken = localStorage.getItem('REFRESH_TOKEN');
    //     const userId = localStorage.getItem('USER_ID');

    //     apis
    //       .refresh({ refreshToken: encodeURI(refreshToken), userId })
    //       .then((res) => {
    //         console.log(res);
    //         console.log(res.data);
    // localStorage.setItem('NEW_TOKEN', res.data.accessToken);
    // localStorage.setItem('REFRESH_TOKEN', res.data.refreshToken);
    // });
    // isTokenRefreshing = false;
    // axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
    //   'USER_TOKEN',
    // )}`;
    // originalReq.headers.Authorization = `Bearer ${localStorage.getItem(
    //   'USER_TOKEN',
    // )}`;
    // return axios(originalReq);
    //   }
    // }
    // return err;
  },
);

export const apis = {
  //회원가입 및 로그인 관련 api
  login: (loginInfo) => instance.post('/user/login', loginInfo),
  loginCheck: () => instance.get('/user/check'),
  refresh: (tokens) => instance.post(`/reissue`, tokens),
  kakaoLogin: (code) => instance.get(`/oauth/callback/kakao?code=${code}`),
  signup: (registerInfo) => instance.post('/signup', registerInfo),
  checkId: (username) => instance.get(`/signup/checkid?username=${username}`),
  checknickName: (nickname) =>
    instance.get(`/signup/checknickname?nickname=${nickname}`),
  sendPhoneNumber: (phoneNumber) => instance.post('/sendNumber', phoneNumber),
  sendPhoneAuthCode: (authCode) => instance.post('/phoneConfirm', authCode),

  // 유저 관련 api
  getUserInfo: () => instance.get('/userInfo'),
  updateUserInfo: (userInfo) => instance.patch('/user', userInfo),

  //포스트 관련 api
  getMainPots: () => instance.get('/posts'),
  getPots: (defaultSearch) =>
    instance.get(
      `/posts/search/${defaultSearch.page}?
      ${defaultSearch.startDt ? `&startDt=${defaultSearch.startDt}` : ``}
      ${defaultSearch.endDt ? `&endDt=${defaultSearch.endDt}` : ``}
      ${defaultSearch.ownerType ? `&ownerType=${defaultSearch.ownerType}` : ``}
      ${defaultSearch.city ? `&city=${defaultSearch.city}` : ``}
      ${defaultSearch.district ? `&district=${defaultSearch.district}` : ``}
      &sort=${defaultSearch.sort}`,
    ),
  getDetailPost: (postId) => instance.get(`/posts/${postId}`),
  getWishPost: () => instance.get(`/user/wishes`),
  getMyPosts: () => instance.get(`/user/posts`),
  addPost: (postInfo) => instance.post(`/posts`, postInfo),
  updatePost: (postId, postInfo) =>
    instance.patch(`/posts/${postId}`, postInfo),
  deletePost: (postId) => instance.delete(`/post/${postId}`),
  clickWish: (postId) => instance.post(`/wishes/${postId}`),
  addComment: (comment) => instance.post(`/comments`, comment),
  deleteComment: (commentId) => instance.delete(`/comments/${commentId}`),
  editComment: (commentId, comment) =>
    instance.patch(`/comments/${commentId}`, comment),
  deleteDetail: (postId) => instance.delete(`/posts/${postId}`),

  //알람 api
  getAlarmList: () => instance.get('/alarms'),
  getAlarm: (alarmId) => instance.get(`/alarms/${alarmId}`),
  deleteAlarmList: () => instance.delete('/alarms'),
  //입양신청 관련api
  applyFoster: (postId, data) =>
    instance.post(`posts/${postId}/adoptions`, data),
  getMyApplyList: () => instance.get(`/user/requests`),
  getDetailfosterForm: (fosterFormId) =>
    instance.get(`/foster_forms/${fosterFormId}`),
  applyDecision: (fosterFormId, data) =>
    instance.patch(`/foster_forms/${fosterFormId}/acceptance`, data),
  //관심친구 등록
  addWish: (postId) => instance.post('/wishes/', postId),
  //교육자료 api
  education: (classNumber) => instance.get(`/quiz?edu=${classNumber}`),
};
