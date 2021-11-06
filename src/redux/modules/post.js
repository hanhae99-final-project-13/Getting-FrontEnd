import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';

const GET_POST = 'GET_POST';
const GET_MOREPOST = 'GET_MOREPOST';
const GET_MAINPOST = 'GET_MAINPOST';
const GET_DETAILPOST = 'GET_DETAILPOST';
const GET_WISHED = 'GET_WISED';
const CHANGE_DOCKINGDELETEMODE = 'CHANGE_DOCKINGDELETEMODE';
const CHANGE_ADOPTIONDELETEMODE = 'CHANGE_ADOPTIONDELETEMODE';
const CHANGE_CARDCOVER = 'CHANGE_CARDCOVER';
//댓글
const ADD_COMMENT = 'ADD_COMMENT';
const UPDATE_COMMENT = 'UPDATE_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

const getPost = createAction(GET_POST, (postList) => ({ postList }));
const getMorePost = createAction(GET_MOREPOST, (postList) => ({ postList }));
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
//댓글
const addComment = createAction(ADD_COMMENT, (commentInfo) => ({
  commentInfo,
}));
const updateComment = createAction(UPDATE_COMMENT, (comment) => ({
  comment,
}));
const deleteComment = createAction(DELETE_COMMENT, (commentInfo) => ({
  commentInfo,
}));

const initialState = {
  postList: [],
  mainPostList: [],
  detailPost: [],
  wishedPostList: [],
  isDockingDeleteMode: false,
  isAdoptionDeleteMode: false,
  isAdoptionWait: false,
  isLoading: false,
};

const getPostMW = (searchData) => {
  console.log(searchData);
  return function (dispatch) {
    apis
      .getPots(searchData)
      .then((res) => {
        console.log(res.data);
        dispatch(getPost(res.data.data.postList));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getMorePostMW = (searchData) => {
  console.log(searchData);
  return (dispatch) => {
    apis
      .getPots(searchData)
      .then((res) => {
        console.log(res.data);
        dispatch(getMorePost(res.data.data.postList));
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
        console.log('분양글등록리스폰스', res.data);
      })
      .catch((res) => {
        console.log(res);
      });
  };
};

//댓글

const addCommentToAxios = (comment) => {
  console.log('댓글등록액시오스', comment);
  return (dispatch) => {
    apis
      .addComment(comment)
      .then((res) => {
        console.log('댓글등록리스폰스', res.data);
        dispatch(addComment(comment));
      })
      .catch((res) => {
        console.log(res);
      });
  };
};

const updateCommentToAxios = (commentId, comment) => {
  console.log('댓글수정액시오스', commentId, comment);
  return (dispatch) => {
    apis
      .editComment(commentId, comment)
      .then((res) => {
        console.log('댓글수정리스폰스', res);
        dispatch(updateComment(commentId, comment));
      })
      .catch((res) => {
        console.log(res);
      });
  };
};

const deleteCommentToAxios = (commentId) => {
  console.log('댓글삭제액시오스', commentId);
  return (dispatch) => {
    apis
      .deleteComment(commentId)
      .then((res) => {
        console.log('댓글삭제리스폰스', res.data);
        dispatch(deleteComment(commentId));
      })
      .catch((res) => {
        console.log(res);
      });
  };
};

const deleteDetailToAxios = (postId) => {
  return (dispatch) => {
    apis
      .deleteDetail(postId)
      .then((res) => {
        alert('삭제 완료');
      })
      .catch((res) => {
        console.log(res);
      });
  };
};

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.postList = action.payload.postList;
      }),
    [GET_MOREPOST]: (state, action) =>
      produce(state, (draft) => {
        draft.postList = [...draft.postList, ...action.payload.postList];
      }),
    [GET_MAINPOST]: (state, action) =>
      produce(state, (draft) => {
        draft.mainPostList = action.payload.postList;
      }),
    [GET_DETAILPOST]: (state, action) =>
      produce(state, (draft) => {
        draft.detailPost = action.payload.post;
      }),
    [CHANGE_DOCKINGDELETEMODE]: (state, action) =>
      produce(state, (draft) => {
        draft.isDockingDeleteMode = action.payload.value;
      }),
    [CHANGE_ADOPTIONDELETEMODE]: (state, action) =>
      produce(state, (draft) => {
        draft.isAdoptionDeleteMode = action.payload.value;
      }),
    [CHANGE_CARDCOVER]: (state, action) =>
      produce(state, (draft) => {
        draft.isAdoptionWait = action.payload.value;
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        draft.detailPost.commentList.unshift(action.payload.commentInfo);
      }),
    [UPDATE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const idx = state.commentList.findIndex(
          (a) => a.commentId === action.payload.comment.commentId,
        );
        draft.commentList[idx] = action.payload.comment;
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        const newComment = draft.detailPost.commentList.filter(
          (c) => c.commentId !== action.payload.commentInfo,
        );
        draft.detailPost.commentList = newComment;
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
  addCommentToAxios,
  updateCommentToAxios,
  deleteCommentToAxios,
  deleteDetailToAxios,
};

export { postActions };
