import React from 'react';
import { Grid } from '../../elements';
import styled from 'styled-components';
const QuizProgressBar = (props) => {
  const { totalQuizLength } = props;

  const progressLength = window.sessionStorage.length;

  return (
    <Grid
      maxWidth='330px'
      width='auto'
      height='5px'
      margin='0 35px'
      bg='#EEEEEE'
      borderRadius='3px'>
      <Bar width={(progressLength / totalQuizLength) * 100 + '%'}></Bar>
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
