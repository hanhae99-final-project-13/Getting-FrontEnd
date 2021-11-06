import React from 'react';
import { Grid } from '../../elements';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
const ProgressBar = () => {
  const data = useSelector((state) => state.quiz.totalAnswer);
  const length = Object.values(data);
  console.log(length);
  let count = 1;

  length.map((i) => {
    if (i !== '') {
      count++;
    }
  });

  return (
    <Grid
      width='300px'
      height='5px'
      bg='#EEEEEE'
      margin='10px auto 0'
      borderRadius='3px'>
      <Bar width={(count / length.length) * 100 + '%'}></Bar>
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

export default ProgressBar;
