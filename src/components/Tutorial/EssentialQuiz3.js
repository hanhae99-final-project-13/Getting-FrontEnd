import React, { useState } from 'react';
import { Grid, Text } from '../../elements';
import { WarningAlert } from '../../shared/Alerts';
import QuizProgressBar from './QuizProgressBar';

const EssentialQuiz3 = (props) => {
  const { history } = props;
  window.sessionStorage.setItem('answer3', '');

  const [selectAnswer, setSelectAnswer] = useState('');
  const trueClick = () => {
    setSelectAnswer('true');
  };
  const falseClick = () => {
    setSelectAnswer('false');
  };

  const handleClickRadioButton = (e) => {
    window.sessionStorage.setItem('answer3', e.target.value);
  };

  return (
    <Grid maxWidth='414px' width='auto' margin='0 auto'>
      <Grid
        cusor='pointer'
        zIndex='9999'
        _onClick={() => {
          window.sessionStorage.removeItem('answer3');
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
          2문제 남았어요
        </Text>
      </Grid>

      {/* 프로그래스바 */}
      <Grid margin='88px auto 0 '>
        <QuizProgressBar totalQuizLength={5} />
      </Grid>

      {/* 문제 */}
      <Text margin='36px 0 0 0' weight='700' size='18px' padding='0 35px'>
        Q3.
      </Text>
      <Text
        margin='20px 0 0 0'
        padding='0 35px'
        size='16px'
        line_height='24px'
        weight='700'>
        노령견일 경우, <br />
        나이가 들어 다리와 허리가 약해졌기 때문에
        <br /> 산책은 가급적 피하도록한다.
      </Text>
      <form>
        <Grid
          position='relative'
          width='300px'
          margin='54px 0 0 0'
          padding='0 35px'
          display='flex'
          alignItems='center'>
          <input
            type='radio'
            id='3true'
            name='answer3'
            value='true'
            onClick={handleClickRadioButton}></input>
          <label
            onClick={trueClick}
            style={{ margin: '0 0 0 10px', weight: '700' }}
            htmlFor='3true'>
            {/* 빨간색원 div*/}
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
                bg={selectAnswer === 'true' ? '#FE7968' : ''}
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
            id='3false'
            name='answer3'
            value='false'
            onClick={handleClickRadioButton}
            // checked={answer.answer1 === 'false'}
          ></input>
          <label
            onClick={falseClick}
            style={{ margin: '0 0 0 10px', weight: '700' }}
            htmlFor='3false'>
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
                bg={selectAnswer === 'false' ? '#FE7968' : ''}
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
        top='570px'
        left='0px'
        right='0px'
        margin='0 auto'
        _onClick={() => {
          if (selectAnswer === '') {
            WarningAlert('정답을 선택해주세요!');
            return;
          } else {
            history.push('/essentialquiz4');
          }
        }}
        bg='#FFBE5B'
        width='109px'
        height='52px'
        borderRadius='26px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.15)'>
        <Text color='#FFFFFF' margin='0' weight='800' size='16px'>
          다음퀴즈
        </Text>
      </Grid>
    </Grid>
  );
};

export default EssentialQuiz3;
