import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { actionCreators as eduAction } from '../../redux/modules/user';

import styled from 'styled-components';
import { Grid, Text } from '../../elements';
import {
  WarningAlert,
  SuccessAlert,
  WarningAlert2,
  SuccessAlert2,
} from '../../shared/Alerts';
import QuizProgressBar from '../Tutorial/QuizProgressBar';
import Advanced2QuizData from '../Data/Advanced2QuizData';

const Advanced2Quiz = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const QuizText = useRef(null);

  const QuizTotalAnswer = Advanced2QuizData.map((quiz) => quiz.answer);
  const QuizId = useParams().id;

  const CurrentQuizData = Advanced2QuizData.filter(
    (quiz) => parseInt(QuizId) === quiz.id,
  );

  const { id, QuizContent, classNumber, select1, select2, select3, select4 } =
    CurrentQuizData[0];
  console.log(id, QuizContent, classNumber);
  window.sessionStorage.setItem(`answer${id}`, '');

  const [selectAnswer, setSelectAnswer] = useState('');

  const numberOneClick = () => {
    setSelectAnswer(select1);
  };
  const numberTwoClick = () => {
    setSelectAnswer(select2);
  };
  const numberThreeClick = () => {
    setSelectAnswer(select3);
  };
  const numberFourClick = () => {
    setSelectAnswer(select4);
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
    const point = userTotalAnswer.filter((i) => {
      return QuizTotalAnswer.includes(i);
    });
    if (point.length >= 4) {
      dispatch(eduAction.addEduSuccessDB(classNumber));
      SuccessAlert2(
        `축하합니다! ${
          point.length * 20
        }점으로 <br/>심화지식2를 완료하셨습니다.`,
      );
      window.sessionStorage.clear();
      history.push('/main');
    } else {
      WarningAlert2(
        `안타깝게도 ${point.length * 20}점이네요😓<br/>
      80점(4문제)이상 맞추면 수료하실 수 <br/> 있습니다!`,
        '심화2 지식을 다시 확인해주세요!',
      );
      window.sessionStorage.clear();
      history.push('/advancedknowledge2');
    }
  };

  const makeQuiz = () => {
    QuizText.current.innerHTML = QuizContent;
  };
  useEffect(() => {
    makeQuiz();
  }, [QuizContent]);

  return (
    <Grid
      maxWidth='414px'
      width='auto'
      margin='0 auto 200px'
      position='relative'>
      <Grid
        cusor='pointer'
        zIndex='9999'
        _onClick={() => {
          window.sessionStorage.removeItem(`answer${id}`);
          history.goBack();
        }}
        position='absolute'
        width='20px'
        height='20px'
        top='-45px'
        left='36px'>
        <Grid width='12px' height='7px'>
          <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
        </Grid>
      </Grid>

      <Grid position='absolute' top='-45px' left='0' right='0'>
        <Text size='12px' margin='0' weight='700' align='center'>
          {Advanced2QuizData.length !== id
            ? `심화 지식2 ${Advanced2QuizData.length - id}문제 남았어요`
            : '심화 지식2 마지막 문제예요'}
          .
        </Text>
      </Grid>

      {/* 프로그래스바 */}
      <Grid margin='104px auto 0 '>
        <QuizProgressBar
          totalQuizLength={Advanced2QuizData.length}></QuizProgressBar>
      </Grid>

      {/* 문제 */}
      <Text margin='36px 0 0 0' weight='700' size='18px' padding='0 35px'>
        Q{id}.
      </Text>
      <QuizBox ref={QuizText}></QuizBox>

      <form>
        <input
          style={{ display: 'none' }}
          type='radio'
          id={`${id}:1번보기`}
          name={`answer${id}`}
          value={select1}
          onClick={handleClickRadioButton}></input>
        <label onClick={numberOneClick} htmlFor={`${id}:1번보기`}>
          <Grid
            display='flex'
            alignItems='center'
            border={selectAnswer === select1 ? 'none' : '1px solid #FE7968'}
            borderRadius='8px'
            boxSizing='border-box'
            position='relative'
            width='300px'
            height='60px'
            margin='25px 35px 0'
            padding='0 21px 0 20px'
            bg={selectAnswer === select1 ? '#FE7968' : '#FFFFFF'}>
            <Text
              size='14px'
              weight='700'
              margin='0'
              line_height='21px'
              color={selectAnswer === select1 ? '#FFFFFF' : '#1A0300'}>
              {select1}
            </Text>
          </Grid>
        </label>

        <input
          style={{ display: 'none' }}
          type='radio'
          id={`${id}:2번보기`}
          name={`answer${id}`}
          value={select2}
          onClick={handleClickRadioButton}></input>
        <label onClick={numberTwoClick} htmlFor={`${id}:2번보기`}>
          <Grid
            display='flex'
            alignItems='center'
            border={selectAnswer === select2 ? 'none' : '1px solid #FE7968'}
            borderRadius='8px'
            boxSizing='border-box'
            position='relative'
            width='300px'
            height='60px'
            margin='10px 35px 0'
            padding='0 21px 0 20px'
            bg={selectAnswer === select2 ? '#FE7968' : '#FFFFFF'}>
            <Text
              size='14px'
              weight='700'
              line_height='21px'
              margin='0'
              color={selectAnswer === select2 ? '#FFFFFF' : '#1A0300'}>
              {select2}
            </Text>
          </Grid>
        </label>

        <input
          style={{ display: 'none' }}
          type='radio'
          id={`${id}:3번보기`}
          name={`answer${id}`}
          value={select3}
          onClick={handleClickRadioButton}></input>
        <label onClick={numberThreeClick} htmlFor={`${id}:3번보기`}>
          <Grid
            display='flex'
            alignItems='center'
            border={selectAnswer === select3 ? 'none' : '1px solid #FE7968'}
            borderRadius='8px'
            boxSizing='border-box'
            position='relative'
            width='300px'
            height='60px'
            margin='10px 35px 0'
            padding='0 21px 0 20px'
            bg={selectAnswer === select3 ? '#FE7968' : '#FFFFFF'}>
            <Text
              size='14px'
              weight='700'
              margin='0'
              line_height='21px'
              color={selectAnswer === select3 ? '#FFFFFF' : '#1A0300'}>
              {select3}
            </Text>
          </Grid>
        </label>

        <input
          style={{ display: 'none' }}
          type='radio'
          id={`${id}:4번보기`}
          name={`answer${id}`}
          value={select4}
          onClick={handleClickRadioButton}></input>
        <label onClick={numberFourClick} htmlFor={`${id}:4번보기`}>
          <Grid
            display='flex'
            alignItems='center'
            border={selectAnswer === select4 ? 'none' : '1px solid #FE7968'}
            borderRadius='8px'
            boxSizing='border-box'
            position='relative'
            width='300px'
            height='60px'
            margin='10px 35px 0'
            padding='0 21px 0 20px'
            bg={selectAnswer === select4 ? '#FE7968' : '#FFFFFF'}>
            <Text
              size='14px'
              weight='700'
              margin='0'
              line_height='21px'
              color={selectAnswer === select4 ? '#FFFFFF' : '#1A0300'}>
              {select4}
            </Text>
          </Grid>
        </label>
      </form>

      <Grid
        cusor='pointer'
        position='fixed'
        bottom='110px'
        left='0px'
        right='0px'
        margin='0 auto'
        _onClick={() => {
          if (selectAnswer === '') {
            WarningAlert('정답을 선택해주세요!');
            return;
          } else if (Advanced2QuizData.length !== id) {
            history.push(`/advanced2quiz/${id + 1}`);
            setSelectAnswer('');
          } else {
            checkAnswer();
          }
        }}
        bg={Advanced2QuizData.length !== id ? '#FFBE5B' : '#FE7968'}
        width='109px'
        height='52px'
        borderRadius='26px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.15)'>
        <Text color='#FFFFFF' margin='0' weight='800' size='16px'>
          {Advanced2QuizData.length !== id ? '다음퀴즈' : '채점하기'}
        </Text>
      </Grid>
    </Grid>
  );
};

const QuizBox = styled.p`
  margin: 20px 0 0 0;
  padding: 0 35px;
  size: 16px;
  line-height: 24px;
  font-weight: 700;
  span {
    color: #fe7968;
  }
`;

export default Advanced2Quiz;
