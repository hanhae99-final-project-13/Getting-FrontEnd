import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';

const ADD_COMMENT = 'ADD_COMMENT';
const LOAD_COMMENT = 'LOAD_COMMENT';
const UPDATE_COMMENT = 'UPDATE_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

const initialState = {
  commentList: [],
};

const addComment = createAction(ADD_COMMENT, (commentInfo) => ({
  commentInfo,
}));

const addCommentToAxios = (postId, comment) => {
  console.log('댓글등록액시오스', postId, comment);
  return (dispatch) => {
    apis
      .addComment(postId, comment)
      .then((res) => {
        console.log('댓글등록리스폰스', res);
        dispatch(addComment(res));
      })
      .catch((res) => {
        console.log(res);
      });
  };
};

const updateComment = createAction(UPDATE_COMMENT, (comment) => ({
  comment,
}));

const updateCommentToAxios = (commentId, comment) => {
  console.log('댓글삭제액시오스', commentId, comment);
  return (dispatch) => {
    apis
      .editComment(commentId, comment)
      .then((res) => {
        console.log('댓글삭제리스폰스', res);
        dispatch(updateComment(res));
      })
      .catch((res) => {
        console.log(res);
      });
  };
};

const deleteComment = createAction(DELETE_COMMENT, (commentInfo) => ({
  commentInfo,
}));

const deleteCommentToAxios = (commentId) => {
  console.log('댓글삭제액시오스', commentId);
  return (dispatch) => {
    apis
      .deleteComment(commentId)
      .then((res) => {
        console.log('댓글삭제리스폰스', res);
        dispatch(deleteComment(res));
      })
      .catch((res) => {
        console.log(res);
      });
  };
};

export default handleActions(
  {
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.commentList.unshift(action.payload.commentInfo);
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
        const newComment = draft.commentList.filter(
          (c) => c.commentId !== action.payload.commentInfo,
        );
        return { commentList: newComment };
      }),
  },
  initialState,
);

const commentCreators = {
  addComment,
  deleteComment,
  updateComment,
  addCommentToAxios,
  updateCommentToAxios,
  deleteCommentToAxios,
};

export { commentCreators };
