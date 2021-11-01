import React from 'react';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';
import Card from '../Card';

const MypageWishedList = (props) => {
  return (
    <Grid display={props.display} margin='22px 0 80px 0'>
      <Grid display='flex' margin='0 0 22px 0' width='auto' height='auto'>
        <Text margin='0 10px 0 0' bold size='12px'>
          나의 관심 친구 수
        </Text>
        <Text margin='0' bold size='12px'>
          3
        </Text>
      </Grid>
      <Card width='auto' imageHeight='150px' margin='0 0 20px 0' />
      <Card width='auto' imageHeight='150px' margin='0 0 20px 0' />
      <Card width='auto' imageHeight='150px' margin='0 0 20px 0' />
      <Card width='auto' imageHeight='150px' margin='0 0 20px 0' />
      <Card width='auto' imageHeight='150px' margin='0 0 20px 0' />
      <Card width='auto' imageHeight='150px' margin='0 0 20px 0' />
    </Grid>
  );
};

export default MypageWishedList;
