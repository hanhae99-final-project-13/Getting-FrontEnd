import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';

//액션
const ADD_APPLY = 'ADD_APPLY';
const GET_APPLY = 'GET_APPLY';
const GET_MYAPPLY = 'GET_MYAPPLY';
const GET_DETAILFOSTERFORM = 'GET_DETAILFOSTERFORM';

//액션 생성함수
const addApply = createAction(ADD_APPLY, (data) => ({ data }));
const getApply = createAction(GET_APPLY, (fosterForm) => ({ fosterForm }));
const getMyApply = createAction(GET_MYAPPLY, (applyList) => ({ applyList }));
const getDetailFosterForm = createAction(
  GET_DETAILFOSTERFORM,
  (fosterForm) => ({
    fosterForm,
  }),
);

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
  detailFosterForm: null,
};

//미들웨어

const addApplyDB = (postId, data) => {
  return (dispatch, getState, { history }) => {
    apis
      .applyFoster(postId, data)
      .then((res) => {
        //  dispatch(addApply(res.data.FosterForm));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getApplyMW = (fosterFormId) => {
  return (dispatch) => {
    apis
      .getDetailfosterForm(fosterFormId)
      .then((res) => {})
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
        dispatch(getMyApply(res.data.data.myRequestList));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getDetailPostForm = (fosterFormId) => {
  return (dispatch) => {
    apis
      .getDetailfosterForm(fosterFormId)
      .then((res) => {
        dispatch(getDetailFosterForm(res.data.data.fosterForm));
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
    [GET_DETAILFOSTERFORM]: (state, action) =>
      produce(state, (draft) => {
        draft.detailFosterForm = action.payload.fosterForm;
      }),
  },
  initialState,
);

const applyActions = {
  addApply,
  getApply,
  getMyApplyMW,
  addApplyDB,
  getDetailPostForm,
};

export { applyActions };
