import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';

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

const postCreators = {
  addPostToAxios,
};

export { postCreators };
