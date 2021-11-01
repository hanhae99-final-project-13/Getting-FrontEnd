import React from 'react';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';
import Card from '../Card';

const AdoptionOk = (props) => {
  return (
    <Grid display={props.display}>
      <Card width='auto' imageHeight='150px' />
      입양 승낙됨
    </Grid>
  );
};

export default AdoptionOk;
