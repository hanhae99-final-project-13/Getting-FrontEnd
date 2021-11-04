import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';

//액션
const ADD_APPLY = 'ADD_APPLY';
const GET_APPLY = 'GET_APPLY';

//액션 생성함수
const addApply = createAction(ADD_APPLY, (data) => ({ data }));
const getApply = createAction(GET_APPLY, (data) => ({ data }));

//초기값
const initialState = {
  apply: {
    name: '',
    job: '',
    age: '',
    gender: '',
    adress: '',
    family: '',
    currnetPet: '',
    reason: '',
    Allergie: '',
    experience: '',
    timeTogether: '',
    anxiety: '',
    bark: '',
    roomUrl: '',
    phone: '',
    code: '',
  },
};

//미들웨어

const addApplyDB = (postId) => {
  return (dispatch, getState, { history }) => {
    apis
      .applyFoster(postId)
      .then((res) => {
        console.log(res.data);
        //  dispatch(addApply(res.data.FosterForm));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [ADD_APPLY]: (state, action) =>
      produce(state, (draft) => {
        draft.apply = action.payload.data;
      }),
    [GET_APPLY]: (state, action) =>
      produce(state, (draft) => {
        draft.apply = action.payload.data;
      }),
  },
  initialState,
);

const applyActions = {
  addApply,
  getApply,

  addApplyDB,
};

export { applyActions };
