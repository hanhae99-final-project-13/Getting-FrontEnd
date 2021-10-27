import React from 'react';
import styled from 'styled-components';

import { Grid, Image } from '../../elements';

const MainHello = (props) => {
  return (
    <Grid>
      <Image />
      <ElP>안녕하세요, 항해님!</ElP>
      <ElP>귀여운 가족을 찾으러 오셨나요?</ElP>
      <Grid display='flex' justifyContent='space-between' width='100%'>
        <Grid display='flex' width='auto'>
          <ElSpan>저희가 함께 도와 드릴게요!</ElSpan>
          <Image size='16' />
        </Grid>
        <ElA>알아보기</ElA>
      </Grid>
    </Grid>
  );
};

const ElP = styled.p`
  margin: 0;
`;

const ElSpan = styled.span`
  font-size: 0.85rem;
`;

const ElA = styled.a`
  font-size: 0.85rem;
  font-weight: bold;
  text-decoration: underline;
`;

export default MainHello;
