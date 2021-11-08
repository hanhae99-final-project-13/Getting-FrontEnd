import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';
import {
  SuccessAlert,
  WarningAlert,
  ErrorAlert,
  imageSuccessAlert,
} from '../../shared/Alerts';

const GET_POST = 'GET_POST';
const GET_MOREPOST = 'GET_MOREPOST';
const GET_MAINPOST = 'GET_MAINPOST';
const GET_DETAILPOST = 'GET_DETAILPOST';
const GET_WISHPOST = 'GET_WISHPOST';
const CHANGE_DOCKINGDELETEMODE = 'CHANGE_DOCKINGDELETEMODE';
const CHANGE_ADOPTIONDELETEMODE = 'CHANGE_ADOPTIONDELETEMODE';
const CHANGE_CARDCOVER = 'CHANGE_CARDCOVER';
const UPDATE_DETAIL = 'UPDATE_DETAIL';

//댓글
const ADD_COMMENT = 'ADD_COMMENT';
const UPDATE_COMMENT = 'UPDATE_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
//관심등록
const WISH_POST = 'WISH_POST';
const LOADING = 'LOADING';
const SET_TOTALPAGE = 'SET_TOTALPAGE';

const getPost = createAction(GET_POST, (postList) => ({ postList }));
const getMorePost = createAction(GET_MOREPOST, (postList) => ({ postList }));
const getMainPost = createAction(GET_MAINPOST, (postList) => ({ postList }));
const getDetailPost = createAction(GET_DETAILPOST, (post) => ({ post }));
const getWishPost = createAction(GET_WISHPOST, (postList) => ({ postList }));
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
const updateComment = createAction(UPDATE_COMMENT, (updateComment) => ({
  updateComment,
}));
const deleteComment = createAction(DELETE_COMMENT, (commentInfo) => ({
  commentInfo,
}));
const wishPost = createAction(WISH_POST, (heart) => ({ heart }));
const updateDetail = createAction(UPDATE_DETAIL, (post) => ({ post }));
const setLoading = createAction(LOADING, (crrLoading) => ({ crrLoading }));
const setTotalPage = createAction(SET_TOTALPAGE, (totalPage) => ({
  totalPage,
}));

const initialState = {
  postList: [],
  mainPostList: [],
  detailPost: [],
  wishPostList: [],
  isDockingDeleteMode: false,
  isAdoptionDeleteMode: false,
  isAdoptionWait: false,
  isLoading: false,
  totalPage: null,
};

const getPostMW = (searchData) => {
  console.log(searchData);
  return function (dispatch) {
    dispatch(setLoading(true));
    apis
      .getPots(searchData)
      .then((res) => {
        console.log(res.data);
        if (res.data.data.postList.length === 0) {
          ErrorAlert('해당 조건 맞는 친구들이 없습니다!');
          dispatch(setLoading(false));
          return;
        }
        dispatch(getPost(res.data.data.postList));
        dispatch(setTotalPage(res.data.data.totalPages));
        dispatch(setLoading(false));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getMorePostMW = (searchData) => {
  console.log(searchData);
  return (dispatch) => {
    dispatch(setLoading(true));
    apis
      .getPots(searchData)
      .then((res) => {
        console.log(res.data);
        dispatch(getMorePost(res.data.data.postList));
        dispatch(setTotalPage(res.data.data.totalPages));
        dispatch(setLoading(false));
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

const getWishPostMW = (userId) => {
  return (dispatch) => {
    apis
      .getWishPost(userId)
      .then((res) => {
        console.log(res.data);
        dispatch(getWishPost(res.data.postList));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addPostToAxios = (postInfo) => {
  console.log('값확인', postInfo);
  return (dispatch, getState, { history }) => {
    apis
      .addPost(postInfo)
      .then((res) => {
        console.log('분양글등록리스폰스', res.data);
        history.push('/main');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const deleteDetailToAxios = (postId) => {
  return (dispatch, getState, { history }) => {
    apis
      .deleteDetail(postId)
      .then((res) => {
        alert('삭제 완료');
        history.push('/main');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const updateDetailToAxios = (postId, postInfo) => {
  return (dispatch, getState, { history }) => {
    console.log('디테일 수정', postId);
    console.log('디테일 수정정보', postInfo);
    apis
      .updatePost(postId, postInfo)
      .then((res) => {
        console.log('디테일수정 리스폰스', res.data);
        dispatch(updateDetail(res.data));
        history.push('/main');
      })
      .catch((err) => {
        console.log('디테일수정 에러', err);
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
        // console.log('댓글등록리스폰스', res.data.data.newComment);
        dispatch(addComment(res.data.data.newComment));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const updateCommentToAxios = (commentId, comment) => {
  console.log('댓글수정액시오스', commentId, comment);
  return (dispatch) => {
    apis
      .editComment(commentId, comment)
      .then((res) => {
        console.log('댓글수정리스폰스', res.data.data.updatedComment);
        dispatch(updateComment(res.data.data.updatedComment));
      })
      .catch((err) => {
        console.log(err);
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
      .catch((err) => {
        console.log(err);
      });
  };
};

const heartToAxios = (postId) => {
  console.log(postId);
  return (dispatch) => {
    apis
      .addWish(postId)
      .then((res) => {
        if (res.data.data.msg === '관심목록에서 삭제되었습니다.') {
          dispatch(wishPost(false));
        } else if (res.data.data.msg === '관심목록에 추가되었습니다.') {
          dispatch(wishPost(true));
        }
      })
      .catch((err) => {
        console.log(err);
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
    [GET_WISHPOST]: (state, action) =>
      produce(state, (draft) => {
        draft.wishPostList = action.payload.postList;
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
        console.log(action.payload.updateComment);
        const idx = state.detailPost.commentList.findIndex(
          (a) => a.commentId === action.payload.updateComment.commentId,
        );
        console.log(idx);
        draft.detailPost.commentList[idx] = action.payload.updateComment;
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        const newComment = draft.detailPost.commentList.filter(
          (c) => c.commentId !== action.payload.commentInfo,
        );
        draft.detailPost.commentList = newComment;
      }),
    [WISH_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.detailPost.post.heart = action.payload.heart;
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.isLoading = action.payload.crrLoading;
      }),
    [SET_TOTALPAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.totalPage = action.payload.totalPage;
      }),
  },
  initialState,
);

const postActions = {
  getPostMW,
  getMorePostMW,
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
  heartToAxios,
  updateDetailToAxios,
  getWishPostMW,
};

export { postActions };
