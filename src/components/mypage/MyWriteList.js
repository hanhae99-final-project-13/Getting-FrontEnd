import React from 'react';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';
import Card from '../Card';
const MyWriteList = (props) => {
  return (
    <Grid display={props.display}>
      <Card width='auto' imageHeight='150px' />
      내과 작성환 궝궈
    </Grid>
  );
};

export default MyWriteList;
