import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';

const GET_POST = 'GET_POST';
const GET_WISHED = 'GET_WISED';

const getPost = createAction(GET_POST, (postList) => ({ postList }));
const getWished = createAction(GET_WISHED, (postList) => ({ postList }));

const initialState = {
  postList: [],
  wishedPostList: [],
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

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (darft) => {
        darft.postList = action.payload.postList;
      }),
  },
  initialState,
);

const postActions = {
  getPostMW,
};

export { postActions };
