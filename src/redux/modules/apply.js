import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';

//액션
const ADD_APPLY = 'ADD_APPLY';
const GET_APPLY = 'GET_APPLY';
const GET_MYAPPLY = 'GET_MYAPPLY';

//액션 생성함수
const addApply = createAction(ADD_APPLY, (data) => ({ data }));
const getApply = createAction(GET_APPLY, (fosterForm) => ({ fosterForm }));
const getMyApply = createAction(GET_MYAPPLY, (applyList) => ({ applyList }));

//초기값
const initialState = {
  apply: {
    name: '',
    job: '',
    fosterAge: '',
    gender: '',
    fosterAddress: '',
    family: '',
    currentPet: '',
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
  myApplyList: [],
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

const getApplyMW = (fosterFormId) => {
  console.log(fosterFormId);
  return (dispatch) => {
    apis
      .getDetailfosterForm(fosterFormId)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getMyApplyMW = () => {
  return (dispatch) => {
    apis
      .getMyApplyList()
      .then((res) => {
        console.log(res.data);
        dispatch(getMyApply(res.data.data.fosterFormPreviewList));
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
    [GET_MYAPPLY]: (state, action) =>
      produce(state, (draft) => {
        draft.myApplyList = action.payload.applyList;
      }),
  },
  initialState,
);

const applyActions = {
  addApply,
  getApply,
  getMyApplyMW,
  addApplyDB,
};

export { applyActions };
