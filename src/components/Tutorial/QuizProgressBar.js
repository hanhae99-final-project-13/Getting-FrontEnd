import React from 'react';
import { Grid } from '../../elements';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
const QuizProgressBar = () => {
  const data = useSelector((state) => state.quiz.totalAnswer);
  const totalQuizLength = Object.values(data);
  // // console.log(length);
  // let count = 1;
  const progressLength = window.sessionStorage.length;
  // console.log(progressLength);

  // length.map((i) => {
  //   if (i !== '') {
  //     count++;
  //   }
  // });

  return (
    <Grid
      maxWidth='330px'
      width='auto'
      margin='0 35px'
      height='5px'
      bg='#EEEEEE'
      borderRadius='3px'>
      <Bar width={(progressLength / totalQuizLength.length) * 100 + '%'}></Bar>
    </Grid>
  );
};

const Bar = styled.div`
  background-color: #ff8a8a;
  height: 5px;
  width: ${(props) => props.width};
  transition: width 1s;
  border-radius: 3px;
`;

export default QuizProgressBar;
