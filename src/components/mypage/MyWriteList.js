import React from 'react';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';
import Card from '../Card';
const MyWriteList = (props) => {
  return (
    <Grid display={props.display}>
      내과 작성환 궝궈
      <Card width='auto' imageHeight='150px' />
    </Grid>
  );
};

export default MyWriteList;
