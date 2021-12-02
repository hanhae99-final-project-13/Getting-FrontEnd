import axios from 'axios';
import { ErrorAlert } from '../shared/Alerts';

const instance = axios.create({
  // baseURL: 'http://52.78.159.191', // 선강 님/
  baseURL: 'https://seonkang.shop', // 선강 님
  // baseURL: 'http://3.38.107.59', // 지은님

  headers: {
    'Content-Type': 'application/json; charset=UTF-8', // 데이터보낼때 인코딩하고 서버쪽에서 받을때 디코딩 할때 글자타입이 필요하다.
    accept: 'application/json',
  },
  withCredentials: true, // CORS를 위해 설정, 기존은 SOP
});

let isRefreshing = false;

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('USER_TOKEN');
    if (!token || isRefreshing) return config;

    config.headers = {
      'Content-Type': 'application/json; charset=UTF-8', // 데이터보낼때 인코딩하고 서버쪽에서 받을때 디코딩 할때 글자타입이 필요하다.
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  (err) => {
    console.log('요청 에러', err);
    return Promise.reject(err);
  },
);

instance.interceptors.response.use(
  (success) => {
    return success;
  },
  (err) => {
    console.log(err);
    console.log(err.response);
    console.log(err.config);

    if (
      err.response.status === 400 &&
      isRefreshing &&
      err.response.data.errorMessage !==
        '해당 입양신청서를 찾을 수 없습니다.' &&
      err.response.data.errorMessage !== '회원 정보를 찾을 수 없습니다.' &&
      err.response.data.errorMessage !== '아이디를 입력해주세요.' &&
      err.response.data.errorMessage !== '비밀번호를 입력해주세요.' &&
      err.response.data.errorMessage !== '중복된 아이디가 존재합니다.' &&
      err.response.data.errorMessage !== '중복된 닉네임이 존재합니다.' &&
      err.response.data.errorMessage !== '아이디를 찾을 수 없습니다.' &&
      err.response.data.errorMessage !== '비밀번호를 다시 입력해주세요' &&
      err.response.data.errorMessage !== '해당 댓글을 찾을 수 없습니다.'
    ) {
      ErrorAlert(err.response.data.errorMessage);
    }
    if (err.response.status === 401) {
      isRefreshing = true;
      const refreshToken = localStorage.getItem('REFRESH_TOKEN');
      const userId = localStorage.getItem('USER_ID');
      return apis
        .refresh({ refreshToken, userId })
        .then((res) => {
          const newAceessToken = res.data.accessToken;
          const newRefreshToken = res.data.refreshToken;
          localStorage.setItem('USER_TOKEN', newAceessToken);
          localStorage.setItem('REFRESH_TOKEN', newRefreshToken);
          err.config.headers.Authorization = `Bearer ${newAceessToken}`;
          isRefreshing = false;
          return instance.request(err.config);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return Promise.reject(err);
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
  isReadAlarm: (alarmId) => instance.get(`/alarms/${alarmId}`),
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
