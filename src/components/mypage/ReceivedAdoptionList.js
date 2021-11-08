import React from 'react';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';
import ReceiveCard from './ReceiveCard';

const ReceivedAdoptionList = (props) => {
  return (
    <React.Fragment>
      <Grid
        padding='16px 0'
        height='auto'
        bg='#fff'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1);'
        borderRadius='20px'
      >
        <ReceiveCard />
        <ReceiveCard />
        <ReceiveCard />
      </Grid>
    </React.Fragment>
  );
};

export default ReceivedAdoptionList;
