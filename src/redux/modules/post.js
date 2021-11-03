import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';

const GET_POST = 'GET_POST';
const GET_MAINPOST = 'GET_MAINPOST';
const GET_DETAILPOST = 'GET_DETAILPOST';
const GET_WISHED = 'GET_WISED';
const CHANGE_DOCKINGDELETEMODE = 'CHANGE_DOCKINGDELETEMODE';
const CHANGE_ADOPTIONDELETEMODE = 'CHANGE_ADOPTIONDELETEMODE';
const CHANGE_CARDCOVER = 'CHANGE_CARDCOVER';

const getPost = createAction(GET_POST, (postList) => ({ postList }));
const getMainPost = createAction(GET_MAINPOST, (postList) => ({ postList }));
const getDetailPost = createAction(GET_DETAILPOST, (post) => ({ post }));
const getWished = createAction(GET_WISHED, (postList) => ({ postList }));
const changeDockingDeleteMode = createAction(
  CHANGE_DOCKINGDELETEMODE,
  (value) => ({
    value,
  }),
);
const changeAdoptionDeleteMode = createAction(
  CHANGE_ADOPTIONDELETEMODE,
  (value) => ({
    value,
  }),
);
const changeCardCover = createAction(CHANGE_CARDCOVER, (value) => ({ value }));

const initialState = {
  postList: [],
  mainPostList: [],
  detailPost: [],
  wishedPostList: [],
  isDockingDeleteMode: false,
  isAdoptionDeleteMode: false,
  isAdoptionWait: false,
};

const getPostMW = () => {
  return function (dispatch) {
    apis
      .getPots()
      .then((res) => {
        dispatch(getPost(res.data.data.postList));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getMainPostMW = () => {
  return (dispatch) => {
    apis
      .getMainPots()
      .then((res) => {
        dispatch(getMainPost(res.data.data.postList));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getDetailPostMW = (postId) => {
  return (dispatch, getState, { history }) => {
    apis
      .getDetailPost(postId)
      .then((res) => {
        console.log(res.data);
        dispatch(getDetailPost(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addPostToAxios = (postInfo) => {
  console.log('값확인', postInfo);
  return (dispatch) => {
    apis
      .addPost(postInfo)
      .then((res) => {
        console.log('분양글등록리스폰스', res);
      })
      .catch((res) => {
        console.log(res);
      });
  };
};

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (darft) => {
        darft.postList = action.payload.postList;
      }),
    [GET_MAINPOST]: (state, action) =>
      produce(state, (darft) => {
        darft.mainPostList = action.payload.postList;
      }),
    [GET_DETAILPOST]: (state, action) =>
      produce(state, (darft) => {
        darft.detailPost = action.payload.post;
      }),
    [CHANGE_DOCKINGDELETEMODE]: (state, action) =>
      produce(state, (darft) => {
        darft.isDockingDeleteMode = action.payload.value;
      }),
    [CHANGE_ADOPTIONDELETEMODE]: (state, action) =>
      produce(state, (darft) => {
        darft.isAdoptionDeleteMode = action.payload.value;
      }),
    [CHANGE_CARDCOVER]: (state, action) =>
      produce(state, (darft) => {
        darft.isAdoptionWait = action.payload.value;
      }),
  },
  initialState,
);

const postActions = {
  getPostMW,
  getMainPostMW,
  addPostToAxios,
  changeCardCover,
  changeDockingDeleteMode,
  changeAdoptionDeleteMode,
  getDetailPostMW,
};

export { postActions };
