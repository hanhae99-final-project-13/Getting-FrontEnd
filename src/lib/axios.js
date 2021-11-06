import axios from 'axios';
import { history } from '../redux/configureStore';

const instance = axios.create({
  baseURL: 'http://3.36.92.203', // 선강님
  // baseURL: 'http://3.38.107.59', // 지은님
  headers: {
    'Content-Type': 'application/json; charset=UTF-8', // 데이터보낼때 인코딩하고 서버쪽에서 받을때 디코딩 할때 글자타입이 필요하다.
    accept: 'application/json',
    Authorization: `Bearer ${localStorage.getItem('USER_TOKEN')}`,
  },
  withCredentials: true, // CORS를 위해 설정, 기존은 SOP
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log(err);
  },
);

// instance.interceptors.response.use(
//   (success) => {
//     return success;
//   },
//   (error) => {},
// );

export const apis = {
  //회원가입 및 로그인 관련 api
  login: (loginInfo) => instance.post('/user/login', loginInfo),
  loginCheck: () => instance.get('/user/check'),
  kakaoLogin: (code) => instance.get(`/oauth/callback/kakao?code=${code}`),
  signup: (registerInfo) => instance.post('/signup', registerInfo),
  checkId: (username) => instance.get(`/signup/checkid?username=${username}`),
  checknickName: (nickname) =>
    instance.get(`/signup/checknickname?nickname=${nickname}`),

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
  addPost: (postInfo) => instance.post(`/posts`, postInfo),
  updatePost: (postId, postInfo) => instance.post(`/pets/${postId}`, postInfo),
  deletePost: (postId) => instance.delete(`/post/${postId}`),
  clickWish: (postId) => instance.post(`/wishes/${postId}`),
  addComment: (comment) => instance.post(`/comments/`, comment),
  deleteComment: (commentId) => instance.delete(`/comments/${commentId}`),
  editComment: (commentId, comment) =>
    instance.patch(`/comments/${commentId}`, comment),
  deleteDetail: (postId) => instance.delete(`/posts/${postId}`),

  //알람 api
  getAlarmList: () => instance.get('/alarms'),
  getAlarm: (alarmId) => instance.get(`/alarms/${alarmId}`),
  deleteAlarmList: () => instance.delete('/alarms'),
  //입양신청 등록 관련api
  applyFoster: (postId, data) => instance.post(`/${postId}/adoptions`, data),
};
