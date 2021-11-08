import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';

const ADD_QUIZANSWER = 'ADD_QUIZANSWER';
const GET_QUIZANSWER = 'GET_QUIZANSWER';
const ADD_EDUSUCCESS = 'ADD_EDUSUCCESS';

const addQuizAnswer = createAction(ADD_QUIZANSWER, (answer) => ({ answer }));
const getQuizAnswer = createAction(GET_QUIZANSWER, (answer) => ({ answer }));
const addEduSuccess = createAction(ADD_EDUSUCCESS, (classNumber) => ({
  classNumber,
}));

const initialState = {
  totalAnswer: {
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
  },
};

//미들웨어
const sendEduSuccessDB = (classNumber) => {
  console.log(classNumber, '서버에 넘어가는 클래스넘버값');
  return (dispatch, getState, { history }) => {
    apis
      .education(classNumber)
      .then((res) => {
        // console.log(res.data.status, '성공 or 실패');
        // console.log(res.data.data.msg, '메세지');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [ADD_QUIZANSWER]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload, '액션 데이터');
        draft.totalAnswer = action.payload.answer;
      }),
    [GET_QUIZANSWER]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload, '액션 데이터');
        draft.totalAnswer = action.payload.answer;
      }),
  },
  initialState,
);

const quizActions = {
  addQuizAnswer,
  getQuizAnswer,
  sendEduSuccessDB,
};

export { quizActions };
