import axios from 'axios';
import { history } from '../redux/configureStore';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'content-type': 'application/json; charset=UTF-8',
    accept: 'application/json',
    authorization: `Bearer ${localStorage.getItem('MY_TOKEN')}`,
  },
  withCredentials: true,
});

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
  kakaoLogin: () => instance.post('/login/kakao'),
  signup: (registerInfo) => instance.post('/signup', registerInfo),

  // 유저 관련 api
  getUserInfo: () => instance.get('/userInfo'),

  //포스트 관련 api
  getPots: () => instance.get('/pets'),
  addPost: (postInfo) => instance.post(`/pest`, postInfo),
  updatePost: (postId, postInfo) => instance.post(`/pets/${postId}`, postInfo),
  deletePost: (postId) => instance.delete(`/post/${postId}`),
  clickWish: (postId) => instance.post(`/wishes/${postId}`),
  addComment: (postId, comment) =>
    instance.post(`/comments/${postId}`, comment),
  deleteComment: (commentId) => instance.delete(`/comments/${commentId}`),
  editComment: (commentId, content) =>
    instance.post(`/comments/${commentId}`, content),
};
