import React from 'react';
import { Grid } from '../../elements';
import styled from 'styled-components';
const ApplyProgressBar2 = () => {
  return (
    <Grid
      width='100%'
      height='5px'
      bg='#EEEEEE'
      margin='10px auto 0'
      borderRadius='3px'>
      <Bar width={(2 / 2) * 100 + '%'}></Bar>
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

export default ApplyProgressBar2;
