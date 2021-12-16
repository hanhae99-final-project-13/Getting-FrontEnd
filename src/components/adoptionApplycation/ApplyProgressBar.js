import React from 'react';
import styled from 'styled-components';
import { Grid } from '../../elements';

const ApplyProgressBar = () => {
  return (
    <Grid
      margin='10px auto 0'
      width='100%'
      height='5px'
      bg='#EEEEEE'
      borderRadius='3px'>
      <Bar width={(1 / 2) * 100 + '%'}></Bar>
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

export default ApplyProgressBar;
