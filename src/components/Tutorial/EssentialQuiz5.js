import React, { useState, useEffect } from 'react';
import { SuccessAlert, WarningAlert } from '../../shared/Alerts';
import { Grid, Text } from '../../elements';

import { useDispatch, useSelector } from 'react-redux';
import { quizActions as userAction } from '../../redux/modules/quiz';
import ProgressBar from './ProgressBar';

const EssentialQuiz5 = (props) => {
  const answerSheet = ['true', 'true', 'true', 'true', 'true'];
  const dispatch = useDispatch();
  const { history } = props;

  const beforeQuizAnswerData = useSelector((state) => state.quiz.totalAnswer);
  console.log(beforeQuizAnswerData, '리덕스에서 불러온 앤서');

  const [answer, setAnswer] = useState(beforeQuizAnswerData);

  const handleClickRadioButton = (e) => {
    const newAnswer = { ...answer, [e.target.name]: e.target.value };

    setAnswer(newAnswer);
  };
  console.log(answer);
  window.sessionStorage.setItem('answer5', answer.answer5);

  let totalAnswer = [];
  const getSessiondata = () => {
    const answer1 = window.sessionStorage.getItem('answer1');
    const answer2 = window.sessionStorage.getItem('answer2');
    const answer3 = window.sessionStorage.getItem('answer3');
    const answer4 = window.sessionStorage.getItem('answer4');
    const answer5 = window.sessionStorage.getItem('answer5');

    totalAnswer = [answer1, answer2, answer3, answer4, answer5];
  };

  return (
    <Grid width='375px' margin='0 auto'>
      <ProgressBar></ProgressBar>
      <Text
        width='300px'
        margin='37px 0 0 0'
        weight='700'
        padding='0 35px'
        size='18px'>
        Q5.
      </Text>
      <Text width='300px' margin='12px 0 0 0' padding='0 35px' size='18px'>
        입양이 확정되면 아이의
        <span style={{ weight: '800', fontSize: '18px' }}>
          내장칩 삽입
        </span>은 <br />
        필수이며,{' '}
        <span style={{ weight: '800', fontSize: '18px' }}>
          내장칩 보호자 등록변경
        </span>
        은
        <br />
        <span style={{ weight: '800', fontSize: '18px' }}>
          입양일 기준 6개월 이후에 변경
        </span>
        해드립
        <br />
        니다.
      </Text>
      <form>
        <Grid
          width='300px'
          margin='42px 0 0 0'
          padding='0 35px'
          display='flex'
          alignItems='center'>
          <input
            type='radio'
            id='5true'
            name='answer5'
            value='true'
            onClick={handleClickRadioButton}
            // checked={answer.answer1 === 'true'}
          ></input>
          <label
            style={{ margin: '0 0 0 10px', weight: '700' }}
            htmlFor='5true'>
            맞습니다
          </label>
        </Grid>
        <Grid
          width='300px'
          margin='42px 0 0 0'
          padding='0 35px'
          display='flex'
          alignItems='center'>
          <input
            type='radio'
            id='5false'
            name='answer5'
            value='false'
            onClick={handleClickRadioButton}
            // checked={answer.answer1 === 'false'}
          ></input>
          <label
            style={{ margin: '0 0 0 10px', weight: '700' }}
            htmlFor='5false'>
            아닙니다
          </label>
        </Grid>
      </form>

      <Grid width='300px' margin='281px 0 0 0' padding='0 35px'>
        <Grid
          _onClick={() => {
            if (answer.answer5 === '') {
              WarningAlert('정답을 선택해주세요!');
              return;
            } else {
              dispatch(userAction.addQuizAnswer(answer));
              getSessiondata();
              console.log(totalAnswer);
              console.log(answerSheet);
              if (JSON.stringify(totalAnswer) === JSON.stringify(answerSheet)) {
                SuccessAlert('축하합니다! 필수지식을 완료하셨습니다.');
                window.sessionStorage.clear();
                history.push('/main');
              } else {
                WarningAlert(
                  '안타깝게도 틀린부분이 있네요!',
                  '필수지식을 다시 진행해 주세요!',
                );
                window.sessionStorage.clear();
                history.push('/fosterknowledge');
              }
            }
          }}
          margin=' 0 auto'
          bg='#FF6666'
          width='109px'
          height='52px'
          borderRadius='26px'
          display='flex'
          justifyContent='center'
          alignItems='center'
          boxShadow='1px 1px 5px rgba(0, 0, 0, 0.5)'>
          <Text color='white' margin='0'>
            채점하기
          </Text>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EssentialQuiz5;
