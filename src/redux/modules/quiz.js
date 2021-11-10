import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';

const ADD_QUIZANSWER = 'ADD_QUIZANSWER';
const GET_QUIZANSWER = 'GET_QUIZANSWER';

const addQuizAnswer = createAction(ADD_QUIZANSWER, (answer) => ({ answer }));
const getQuizAnswer = createAction(GET_QUIZANSWER, (answer) => ({ answer }));

const initialState = {
  totalAnswer: {
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
  },
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
};

export { quizActions };
