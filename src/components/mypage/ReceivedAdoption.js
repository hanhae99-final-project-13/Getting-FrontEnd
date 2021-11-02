import React from 'react';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';
import Card from '../Card';
const ReceivedAdoption = (props) => {
  return (
    <Grid display={props.display}>
      <Card width='auto' imageHeight='150px' />
      느ㅔ가 봗은 입앵 싄췅
    </Grid>
  );
};

export default ReceivedAdoption;
