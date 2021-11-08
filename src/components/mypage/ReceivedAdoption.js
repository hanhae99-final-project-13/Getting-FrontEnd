import React from 'react';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';
import Card from '../Card';
const ReceivedAdoption = (props) => {
  return (
    <Grid display={props.display}>
      <Card width='auto' imageHeight='150px' margin='0 0 30px 0' />
    </Grid>
  );
};

export default ReceivedAdoption;
