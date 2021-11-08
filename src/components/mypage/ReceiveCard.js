import React from 'react';
import styled from 'styled-components';

import { Grid, Text, Image } from '../../elements';

const ReceiveCard = (props) => {
  return (
    <React.Fragment>
      <Grid
        display='flex'
        justifyContent='space-evenly'
        width='auto'
        height='auto'
        margin='13px'
      >
        <Text margin='0' bold>
          김항해
        </Text>
        <Text margin='0'>(여, 23)</Text>
        <Text margin='0'>01012345678</Text>
        <Image margin='0' size='21' />
      </Grid>
    </React.Fragment>
  );
};

export default ReceiveCard;
