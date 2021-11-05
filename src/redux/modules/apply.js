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
    fosterAge: '',
    gender: '',
    fosterAddress: '',
    family: '',
    currnetPet: '',
    reason: '',
    allergy: '',
    experience: '',
    timeTogether: '',
    anxiety: '',
    bark: '',
    roomUrl: '',
    phone: '',
    // code: '',
  },
};

//미들웨어

const addApplyDB = (postId, data) => {
  console.log(postId, '서버에 id넘어가는값');
  console.log(data, '서버에 넘어가는 데이터');
  return (dispatch, getState, { history }) => {
    apis
      .applyFoster(postId, data)
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
