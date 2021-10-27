import React from 'react';
import styled from 'styled-components';

import { Grid, Image, Text } from '../elements';

const AdoptedCard = () => {
  return (
    <Grid
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      width='180px'
      height='auto'
    >
      <Image
        size='100'
        src='https://i2.wp.com/topic.blog/wp-content/uploads/2019/11/31911111657732462.jpeg?w=740&ssl=1'
      />
      <Text margin='0' bold>
        순이 (4살)
      </Text>
      <Text margin='0'>1차 예방접종 완료</Text>
    </Grid>
  );
};

export default AdoptedCard;
