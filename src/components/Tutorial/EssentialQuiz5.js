import React, { useState, useEffect } from 'react';
import { SuccessAlert, WarningAlert } from '../../shared/Alerts';
import { Grid, Text } from '../../elements';

import { useDispatch, useSelector } from 'react-redux';
import { quizActions as userAction } from '../../redux/modules/quiz';
import { actionCreators as eduAction } from '../../redux/modules/user';
import QuizProgressBar from './QuizProgressBar';

const EssentialQuiz5 = (props) => {
  const classNumber = '1';
  const answerSheet = ['false', 'true', 'false', 'false', 'true'];
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
    <Grid maxWidth='414px' width='auto' margin='0 auto'>
      <Grid
        cusor='pointer'
        zIndex='9999'
        _onClick={() => {
          history.goBack();
        }}
        position='sticky'
        width='20px' //width, height를 안주면 sticky left가 안먹음..
        height='20px'
        top='65px'
        left='36px'>
        <Grid width='12px' height='7px'>
          <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
        </Grid>
      </Grid>

      <Grid position='fixed' top='67px' left='0' right='0'>
        <Text size='12px' margin='0' weight='700' align='center'>
          마지막 문제에요
        </Text>
      </Grid>

      {/* 프로그래스바 */}
      <Grid margin='88px auto 0 '>
        <QuizProgressBar></QuizProgressBar>
      </Grid>

      {/* 문제 */}
      <Text margin='36px 0 0 0' weight='700' size='18px' padding='0 35px'>
        Q5.
      </Text>
      <Text
        margin='20px 0 0 0'
        padding='0 35px'
        size='16px'
        line_height='24px'
        weight='700'>
        반려견을 키울때에는
        <br /> 장기적인 계획이 필요로한다.
      </Text>

      <form>
        <Grid
          position='relative'
          width='300px'
          margin='78px 0 0 0'
          padding='0 35px'
          display='flex'
          alignItems='center'>
          <input
            type='radio'
            id='5true'
            name='answer5'
            value='true'
            onClick={handleClickRadioButton}></input>
          <label
            style={{ margin: '0 0 0 10px', weight: '700' }}
            htmlFor='5true'>
            {/* 빨간색 체크 */}
            <Grid
              position='absolute'
              left='38px'
              width='18px'
              height='18px'
              borderRadius='15px'
              bg='#FFFFFF'
              boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1);'>
              <Grid
                position='absolute'
                top='4px'
                left='4px'
                bg={answer.answer5 === 'true' ? '#FE7968' : ''}
                width='10px'
                height='10px'
                borderRadius='10px'></Grid>
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
            <Grid
              position='absolute'
              left='38px'
              width='18px'
              height='18px'
              borderRadius='15px'
              bg='#FFFFFF'
              boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1);'>
              <Grid
                position='absolute'
                top='4px'
                left='4px'
                bg={answer.answer5 === 'false' ? '#FE7968' : ''}
                width='10px'
                height='10px'
                borderRadius='10px'></Grid>
            </Grid>
            아닙니다
          </label>
        </Grid>
      </form>

      <Grid
        cusor='pointer'
        position='fixed'
        top='580px'
        left='0px'
        right='0px'
        margin='0 auto'
        _onClick={() => {
          if (answer.answer5 === '') {
            WarningAlert('정답을 선택해주세요!');
            return;
          } else {
            dispatch(userAction.addQuizAnswer(answer));
            getSessiondata();
            console.log(totalAnswer, '유저의답');
            console.log(answerSheet, '퀴즈 정답');
            if (JSON.stringify(totalAnswer) === JSON.stringify(answerSheet)) {
              dispatch(eduAction.addEduSuccessDB(classNumber));

              SuccessAlert('축하합니다! 필수지식을 완료하셨습니다.');
              window.sessionStorage.clear();
              history.push('/main');
            } else {
              WarningAlert(
                '안타깝게도 틀린부분이 있네요!',
                '필수지식을 다시 진행해 주세요!',
              );
              window.sessionStorage.clear();
              history.push('/essentialknowledge');
            }
          }
        }}
        bg='#FE7968'
        width='109px'
        height='52px'
        borderRadius='26px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.15)'>
        <Text color='#FFFFFF' margin='0' weight='800' size='16px'>
          채점하기
        </Text>
      </Grid>
    </Grid>
  );
};

export default EssentialQuiz5;
