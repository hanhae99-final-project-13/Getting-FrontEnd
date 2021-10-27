import axios from 'axios';
import { history } from '../redux/configureStore';

const instance = axios.create({
  baseURL: 'http://13.209.98.45',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    accept: 'application/json',
    'X-AUTH-TOKEN': `${localStorage.getItem('USER_TOKEN')}`,
  },
  withCredentials: true, // CORS를 위해 설정, 기존은 SOP
});

// 참고용
// export const saveToken = (token) => window.localStorage.setItem('jwt', token);
// export const getToken = () => window.localStorage.getItem('jwt');
// export const removeToken = () => window.localStorage.removeItem('jwt');

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log(err);
  },
);

instance.interceptors.response.use(
  (success) => {
    return success;
  },
  (error) => {},
);

export const apis = {
  //회원가입 및 로그인 관련 api
  login: (loginInfo) => instance.post('/login', loginInfo),
  loginCheck: () => instance.get('/login/check'),
  kakaoLogin: (code) => instance.get(`/oauth/callback/kakao?code=${code}`),
  signup: (registerInfo) => instance.post('/signup', registerInfo),

  // 유저 관련 api
  getUserInfo: () => instance.get('/userInfo'),

  //포스트 관련 api
  getPots: () => instance.get('/pets'),
  addPost: (postInfo) => instance.post(`/pets`, postInfo),
  updatePost: (postId, postInfo) => instance.post(`/pets/${postId}`, postInfo),
  deletePost: (postId) => instance.delete(`/post/${postId}`),
  clickWish: (postId) => instance.post(`/wishes/${postId}`),
  addComment: (postId, comment) =>
    instance.post(`/comments/${postId}`, comment),
  deleteComment: (commentId) => instance.delete(`/comments/${commentId}`),
  editComment: (commentId, content) =>
    instance.post(`/comments/${commentId}`, content),
};
