import React from 'react';
import styled from 'styled-components';

import { Grid, Image } from '../elements';

const MainIfYouFirstAdoption = (props) => {
  return (
    <Grid
      display='flex'
      flexDirection='column'
      justifyContent='space-evenly'
      width='auto'
      padding='1em'
      borderRadius='10px'
      boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
      height='125px'
    >
      <Grid
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        height='auto'
      >
        <Image />
        <ElP>
          입양이<ElSpan>처음</ElSpan>이라면?
        </ElP>
      </Grid>
      <Grid display='flex' justifyContent='flex-end' height='auto'>
        <ElButton>완벽한 견주되기</ElButton>
      </Grid>
    </Grid>
  );
};

const ElP = styled.p`
  width: auto;
  margin: 0;
  font-size: 1.2rem;
`;

const ElSpan = styled.span`
  font-weight: bold;
`;

const ElButton = styled.button`
  height: auto;
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: #333;
  color: white;
`;

export default MainIfYouFirstAdoption;
