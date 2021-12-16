import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { Grid, Text } from '../../elements';
import {
  WarningAlert,
  WarningAlert2,
  SuccessAlert2,
} from '../../shared/Alerts';
import QuizProgressBar from '../Tutorial/QuizProgressBar';
import EssentialQuizData from '../Data/EssentialQuizData';
import { actionCreators as eduAction } from '../../redux/modules/user';

const EssentialQuiz = (props) => {
  const dispatch = useDispatch();
  const { history } = props;

  const QuizText = useRef('');

  const QuizTotalAnswer = EssentialQuizData.map((quiz) => quiz.answer);
  const QuizId = useParams().id;

  const CurrentQuizData = EssentialQuizData.filter(
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
  const getSessionData = () => {
    const answer1 = window.sessionStorage.getItem('answer1');
    const answer2 = window.sessionStorage.getItem('answer2');
    const answer3 = window.sessionStorage.getItem('answer3');
    const answer4 = window.sessionStorage.getItem('answer4');
    const answer5 = window.sessionStorage.getItem('answer5');
    userTotalAnswer = [answer1, answer2, answer3, answer4, answer5];
  };

  const checkAnswer = () => {
    getSessionData();
    const point = userTotalAnswer.filter((i) => {
      return QuizTotalAnswer.includes(i);
    });

    if (point.length === 5) {
      dispatch(eduAction.addEduSuccessDB(classNumber));
      SuccessAlert2(
        `축하합니다! ${
          point.length * 20
        }점으로 <br/>필수지식을 완료하셨습니다.`,
      );
      window.sessionStorage.clear();
      history.push('/main');
    } else {
      WarningAlert2(
        `안타깝게도 ${point.length * 20}점이네요 😓<br/>
        모든 문제를 맞춰야 수료할 수 있습니다`,
        '필수지식을 다시 확인해주세요!',
      );
      window.sessionStorage.clear();
      history.push('/essentialknowledge');
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
        <Text align='center' margin='0' weight='700' size='12px'>
          {EssentialQuizData.length !== id
            ? `필수지식 ${EssentialQuizData.length - id}문제 남았어요`
            : '필수 지식 마지막 문제예요'}
        </Text>
      </Grid>

      {/* 프로그래스바 */}
      <Grid margin='104px auto 0 '>
        <QuizProgressBar
          totalQuizLength={EssentialQuizData.length}></QuizProgressBar>
      </Grid>

      {/* 문제 */}
      <Text margin='36px 0 0 0' weight='700' size='18px' padding='0 35px'>
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
            display='flex'
            alignItems='center'
            position='relative'
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
          onClick={handleClickRadioButton}
          name={`answer${id}`}
          value={select3}
          style={{ display: 'none' }}
          id={`${id}:3번보기`}></input>
        <label onClick={numberThreeClick} htmlFor={`${id}:3번보기`}>
          <Grid
            display='flex'
            alignItems='center'
            position='relative'
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
          type='radio'
          onClick={handleClickRadioButton}
          name={`answer${id}`}
          value={select4}
          style={{ display: 'none' }}
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
            border={selectAnswer === select4 ? 'none' : '1px solid #FE7968'}
            borderRadius='8px'
            boxSizing='border-box'
            bg={selectAnswer === select4 ? '#FE7968' : '#FFFFFF'}>
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
          } else if (EssentialQuizData.length !== id) {
            history.push(`/essentialquiz/${id + 1}`);
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
        width='109px'
        height='52px'
        margin='0 auto'
        bg={EssentialQuizData.length !== id ? '#FFBE5B' : '#FE7968'}
        borderRadius='26px'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.15)'
        cusor='pointer'>
        <Text margin='0' color='#FFFFFF' weight='800' size='16px'>
          {EssentialQuizData.length !== id ? '다음퀴즈' : '채점하기'}
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

export default EssentialQuiz;
