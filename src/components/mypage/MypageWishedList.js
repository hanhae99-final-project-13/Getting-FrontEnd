import React from 'react';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';

const MypageWishedList = (props) => {
  return (
    <Grid margin='20px 0 0 0'>
      <Grid display='flex' width='auto' height='auto'>
        <Text margin='0 10px 0 0' bold size='12px'>
          나의 관심 친구 수
        </Text>
        <Text margin='0' bold size='12px'>
          3
        </Text>
      </Grid>
      <Grid></Grid>
    </Grid>
  );
};

export default MypageWishedList;
