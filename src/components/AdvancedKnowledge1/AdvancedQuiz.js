import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';
import {
  WarningAlert,
  SuccessAlert,
  WarningAlert2,
  SuccessAlert2,
} from '../../shared/Alerts';
import QuizProgressBar from '../Tutorial/QuizProgressBar';
import AdvancedQuizData from '../Data/AdvancedQuizData';
import { actionCreators as eduAction } from '../../redux/modules/user';

const AdvancedQuiz = (props) => {
  const dispatch = useDispatch();
  const { history } = props;

  const QuizText = useRef(null);

  const QuizTotalAnswer = AdvancedQuizData.map((quiz) => quiz.answer);
  const QuizId = useParams().id;

  const CurrentQuizData = AdvancedQuizData.filter(
    (quiz) => parseInt(QuizId) === quiz.id,
  );

  const { id, QuizContent, classNumber, select1, select2, select3, select4 } =
    CurrentQuizData[0];

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
        }점으로 <br/>심화지식1을 완료하셨습니다.`,
      );
      window.sessionStorage.clear();
      history.push('/main');
    } else {
      WarningAlert2(
        `안타깝게도 ${point.length * 20}점이네요😓<br/>
        80점(4문제)이상 맞추면 수료하실 수 <br/> 있습니다!`,
        '심화1 지식을 다시 확인해주세요!',
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
    <Grid
      position='relative'
      maxWidth='414px'
      width='auto'
      margin='0 auto 200px'>
      <Grid
        _onClick={() => {
          window.sessionStorage.removeItem(`answer${id}`);
          history.goBack();
        }}
        position='absolute'
        top='-45px'
        left='36px'
        zIndex='9999'
        width='20px'
        height='20px'
        cusor='pointer'>
        <Grid width='12px' height='7px'>
          <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
        </Grid>
      </Grid>

      <Grid position='absolute' top='-45px' left='0' right='0'>
        <Text size='12px' margin='0' weight='700' align='center'>
          {AdvancedQuizData.length !== id
            ? `심화 지식1 ${AdvancedQuizData.length - id}문제 남았어요`
            : '심화 지식 마지막 문제예요'}
        </Text>
      </Grid>

      {/* 프로그래스바 */}
      <Grid margin='104px auto 0 '>
        <QuizProgressBar
          totalQuizLength={AdvancedQuizData.length}></QuizProgressBar>
      </Grid>

      {/* 문제 */}
      <Text margin='36px 0 0 0' padding='0 35px' weight='700' size='18px'>
        Q{id}.
      </Text>
      <QuizBox ref={QuizText}></QuizBox>

      <form>
        <input
          type='radio'
          onClick={handleClickRadioButton}
          name={`answer${id}`}
          value={select1}
          style={{ display: 'none' }}
          id={`${id}:1번보기`}></input>
        <label onClick={numberOneClick} htmlFor={`${id}:1번보기`}>
          <Grid
            position='relative'
            display='flex'
            alignItems='center'
            width='300px'
            height='60px'
            margin='25px 35px 0'
            padding='0 21px 0 20px'
            border={selectAnswer === select1 ? 'none' : '1px solid #FE7968'}
            borderRadius='8px'
            boxSizing='border-box'
            bg={selectAnswer === select1 ? '#FE7968' : '#FFFFFF'}>
            <Text
              margin='0'
              size='14px'
              weight='700'
              line_height='21px'
              color={selectAnswer === select1 ? '#FFFFFF' : '#1A0300'}>
              {select1}
            </Text>
          </Grid>
        </label>

        <input
          type='radio'
          onClick={handleClickRadioButton}
          name={`answer${id}`}
          value={select2}
          style={{ display: 'none' }}
          id={`${id}:2번보기`}></input>
        <label onClick={numberTwoClick} htmlFor={`${id}:2번보기`}>
          <Grid
            position='relative'
            display='flex'
            alignItems='center'
            width='300px'
            height='60px'
            margin='10px 35px 0'
            padding='0 21px 0 20px'
            border={selectAnswer === select2 ? 'none' : '1px solid #FE7968'}
            borderRadius='8px'
            boxSizing='border-box'
            bg={selectAnswer === select2 ? '#FE7968' : '#FFFFFF'}>
            <Text
              margin='0'
              size='14px'
              weight='700'
              line_height='21px'
              color={selectAnswer === select2 ? '#FFFFFF' : '#1A0300'}>
              {select2}
            </Text>
          </Grid>
        </label>

        <input
          type='radio'
          name={`answer${id}`}
          value={select3}
          onClick={handleClickRadioButton}
          style={{ display: 'none' }}
          id={`${id}:3번보기`}></input>
        <label onClick={numberThreeClick} htmlFor={`${id}:3번보기`}>
          <Grid
            position='relative'
            display='flex'
            alignItems='center'
            width='300px'
            height='60px'
            margin='10px 35px 0'
            padding='0 21px 0 20px'
            border={selectAnswer === select3 ? 'none' : '1px solid #FE7968'}
            borderRadius='8px'
            boxSizing='border-box'
            bg={selectAnswer === select3 ? '#FE7968' : '#FFFFFF'}>
            <Text
              margin='0'
              size='14px'
              weight='700'
              line_height='21px'
              color={selectAnswer === select3 ? '#FFFFFF' : '#1A0300'}>
              {select3}
            </Text>
          </Grid>
        </label>

        <input
          onClick={handleClickRadioButton}
          name={`answer${id}`}
          value={select4}
          style={{ display: 'none' }}
          type='radio'
          id={`${id}:4번보기`}></input>
        <label onClick={numberFourClick} htmlFor={`${id}:4번보기`}>
          <Grid
            position='relative'
            display='flex'
            alignItems='center'
            width='300px'
            height='60px'
            margin='10px 35px 0'
            padding='0 21px 0 20px'
            bg={selectAnswer === select4 ? '#FE7968' : '#FFFFFF'}
            border={selectAnswer === select4 ? 'none' : '1px solid #FE7968'}
            borderRadius='8px'
            boxSizing='border-box'>
            <Text
              margin='0'
              size='14px'
              weight='700'
              line_height='21px'
              color={selectAnswer === select4 ? '#FFFFFF' : '#1A0300'}>
              {select4}
            </Text>
          </Grid>
        </label>
      </form>

      <Grid
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
        position='fixed'
        bottom='110px'
        left='0px'
        right='0px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        margin='0 auto'
        bg={AdvancedQuizData.length !== id ? '#FFBE5B' : '#FE7968'}
        width='109px'
        height='52px'
        borderRadius='26px'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.15)'
        cusor='pointer'>
        <Text margin='0' color='#FFFFFF' weight='800' size='16px'>
          {AdvancedQuizData.length !== id ? '다음퀴즈' : '채점하기'}
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

export default AdvancedQuiz;
