import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { actionCreators as eduAction } from '../../redux/modules/user';

import { Grid, Text } from '../../elements';
import { WarningAlert, SuccessAlert } from '../../shared/Alerts';
import QuizProgressBar from '../Tutorial/QuizProgressBar';
import AdvancedQuizData from '../Data/AdvancedQuizData';

const AdvancedQuiz = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const QuizText = useRef(null);

  const QuizTotalAnswer = AdvancedQuizData.map((quiz) => quiz.answer);
  const QuizId = useParams().id;

  const CurrentQuizData = AdvancedQuizData.filter(
    (quiz) => parseInt(QuizId) === quiz.id,
  );
  console.log(CurrentQuizData);

  const { id, QuizContent, classNumber } = CurrentQuizData[0];
  console.log(id, QuizContent, classNumber);
  window.sessionStorage.setItem(`answer${id}`, '');

  const [selectAnswer, setSelectAnswer] = useState('');

  const trueClick = () => {
    setSelectAnswer('true');
  };
  const falseClick = () => {
    setSelectAnswer('false');
  };

  const handleClickRadioButton = (e) => {
    window.sessionStorage.setItem(`answer${id}`, e.target.value);
  };

  let userTotalAnswer = [];
  const getSessiondata = () => {
    const answer1 = window.sessionStorage.getItem('answer1');
    const answer2 = window.sessionStorage.getItem('answer2');
    const answer3 = window.sessionStorage.getItem('answer3');
    const answer4 = window.sessionStorage.getItem('answer4');
    const answer5 = window.sessionStorage.getItem('answer5');
    userTotalAnswer = [answer1, answer2, answer3, answer4, answer5];
  };

  const checkAnswer = () => {
    getSessiondata();
    if (JSON.stringify(userTotalAnswer) === JSON.stringify(QuizTotalAnswer)) {
      dispatch(eduAction.addEduSuccessDB(classNumber));
      SuccessAlert('축하합니다! 심화지식1을 완료하셨습니다.');
      window.sessionStorage.clear();
      history.push('/main');
    } else {
      WarningAlert(
        '안타깝게도 틀린부분이 있네요!',
        '심화지식1을 다시 진행해 주세요!',
      );
      window.sessionStorage.clear();
      history.push('/advancedknowledge1');
    }
  };

  const makeQuiz = () => {
    QuizText.current.innerHTML = QuizContent;
  };
  useEffect(() => {
    makeQuiz();
  }, [QuizContent]);

  return (
    <Grid maxWidth='414px' width='auto' margin='0 auto'>
      <Grid
        cusor='pointer'
        zIndex='9999'
        _onClick={() => {
          window.sessionStorage.removeItem(`answer${id}`);
          history.goBack();
        }}
        position='sticky'
        width='20px' //width, height를 안주면 sticky left가 안먹음..
        height='20px'
        top='65px'
        left='36px'
      >
        <Grid width='12px' height='7px'>
          <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
        </Grid>
      </Grid>

      <Grid position='fixed' top='67px' left='0' right='0'>
        <Text size='12px' margin='0' weight='700' align='center'>
          {AdvancedQuizData.length !== id
            ? `${AdvancedQuizData.length - id}문제 남았어요`
            : '마지막 문제에요'}
        </Text>
      </Grid>

      {/* 프로그래스바 */}
      <Grid margin='88px auto 0 '>
        <QuizProgressBar
          totalQuizLength={AdvancedQuizData.length}
        ></QuizProgressBar>
      </Grid>

      {/* 문제 */}
      <Text margin='36px 0 0 0' weight='700' size='18px' padding='0 35px'>
        Q{id}.
      </Text>
      <Text
        _ref={QuizText}
        margin='20px 0 0 0'
        padding='0 35px'
        size='16px'
        line_height='24px'
        weight='700'
      ></Text>
      <form>
        <Grid
          position='relative'
          width='300px'
          margin='54px 0 0 0'
          padding='0 35px'
          display='flex'
          alignItems='center'
        >
          <input
            type='radio'
            id={`${id}true`}
            name={`answer${id}`}
            value='true'
            onClick={handleClickRadioButton}
          ></input>
          <label
            onClick={trueClick}
            style={{ margin: '0 0 0 10px', weight: '700' }}
            htmlFor={`${id}true`}
          >
            {/* 빨간색원 div */}
            <Grid
              position='absolute'
              left='38px'
              width='18px'
              height='18px'
              borderRadius='15px'
              bg='#FFFFFF'
              boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1);'
            >
              <Grid
                position='absolute'
                top='4px'
                left='4px'
                bg={selectAnswer === 'true' ? '#FE7968' : ''}
                width='10px'
                height='10px'
                borderRadius='10px'
              ></Grid>
            </Grid>
            맞습니다
          </label>
        </Grid>
        <Grid
          position='relative'
          width='300px'
          margin='42px 0 0 0'
          padding='0 35px'
          display='flex'
          alignItems='center'
        >
          <input
            type='radio'
            id={`${id}false`}
            name={`answer${id}`}
            value='false'
            onClick={handleClickRadioButton}
          ></input>

          <label
            onClick={falseClick}
            style={{ margin: '0 0 0 10px', weight: '700' }}
            htmlFor={`${id}false`}
          >
            {/* 빨간색원 div */}
            <Grid
              position='absolute'
              left='38px'
              width='18px'
              height='18px'
              borderRadius='15px'
              bg='#FFFFFF'
              boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1);'
            >
              <Grid
                position='absolute'
                top='4px'
                left='4px'
                bg={selectAnswer === 'false' ? '#FE7968' : ''}
                width='10px'
                height='10px'
                borderRadius='10px'
              ></Grid>
            </Grid>
            아닙니다
          </label>
        </Grid>
      </form>

      <Grid
        cusor='pointer'
        position='fixed'
        bottom='130px'
        left='0px'
        right='0px'
        margin='0 auto'
        _onClick={() => {
          if (selectAnswer === '') {
            WarningAlert('정답을 선택해주세요!');
            return;
          } else if (AdvancedQuizData.length !== id) {
            history.push(`/advancedquiz/${id + 1}`);
            setSelectAnswer('');
          } else {
            checkAnswer();
          }
        }}
        bg={AdvancedQuizData.length !== id ? '#FFBE5B' : '#FE7968'}
        width='109px'
        height='52px'
        borderRadius='26px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.15)'
      >
        <Text color='#FFFFFF' margin='0' weight='800' size='16px'>
          {AdvancedQuizData.length !== id ? '다음퀴즈' : '채점하기'}
        </Text>
      </Grid>
    </Grid>
  );
};

export default AdvancedQuiz;
