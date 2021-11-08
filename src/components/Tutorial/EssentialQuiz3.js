import React, { useState, useEffect } from 'react';
import { Grid, Text } from '../../elements';
import { WarningAlert } from '../../shared/Alerts';
import { useDispatch, useSelector } from 'react-redux';
import { quizActions as userAction } from '../../redux/modules/quiz';
import ProgressBar from './ProgressBar';

const EssentialQuiz3 = (props) => {
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
  window.sessionStorage.setItem('answer3', answer.answer3);
  return (
    <Grid width='375px' margin='0 auto'>
      <ProgressBar></ProgressBar>
      <Text
        width='300px'
        margin='37px 0 0 0'
        weight='700'
        padding='0 35px'
        size='18px'>
        Q3.
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
            id='3true'
            name='answer3'
            value='true'
            onClick={handleClickRadioButton}
            // checked={answer.answer1 === 'true'}
          ></input>
          <label
            style={{ margin: '0 0 0 10px', weight: '700' }}
            htmlFor='3true'>
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
            id='3false'
            name='answer3'
            value='false'
            onClick={handleClickRadioButton}
            // checked={answer.answer1 === 'false'}
          ></input>
          <label
            style={{ margin: '0 0 0 10px', weight: '700' }}
            htmlFor='3false'>
            아닙니다
          </label>
        </Grid>
      </form>

      <Grid width='300px' margin='281px 0 0 0' padding='0 35px'>
        <Grid
          _onClick={() => {
            if (answer.answer3 === '') {
              WarningAlert('정답을 선택해주세요!');
              return;
            } else {
              dispatch(userAction.addQuizAnswer(answer));
              history.push('/essentialquiz4');
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
            다음퀴즈
          </Text>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EssentialQuiz3;
