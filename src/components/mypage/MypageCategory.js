import React from 'react';
import styled from 'styled-components';

import { Grid, Image, Text } from '../../elements';

const MypageCategory = (props) => {
  const { showWishedList, showadoptionCheck } = props;
  return (
    <Grid
      display='flex'
      justifyContent='space-evenly'
      width='auto'
      height='auto'
    >
      <Grid
        display='flex'
        flexDirection='column'
        alignItems='center'
        width='80px'
        height='60px'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'
        borderRadius='14px'
        _onClick={showWishedList}
      >
        <Image size='28' />
        <Text margin='0' size='14px'>
          관심친구
        </Text>
      </Grid>
      <Grid
        display='flex'
        flexDirection='column'
        alignItems='center'
        width='80px'
        height='60px'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'
        borderRadius='14px'
        _onClick={showadoptionCheck}
      >
        <Image size='28' />
        <Text margin='0' size='14px'>
          입양관리
        </Text>
      </Grid>
      <Grid
        display='flex'
        flexDirection='column'
        alignItems='center'
        width='80px'
        height='60px'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'
        borderRadius='14px'
      >
        <Image size='28' />
        <Text margin='0' size='14px'>
          정신집중
        </Text>
      </Grid>
    </Grid>
  );
};

export default MypageCategory;
