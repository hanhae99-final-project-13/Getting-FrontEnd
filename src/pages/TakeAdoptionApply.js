import React from 'react';
import styled from 'styled-components';
import {
  AdoptionReason,
  AdoptionSurvey,
  DefaultInfomation,
} from '../components/TakeAdoptionApply';

import { Grid, Text } from '../elements';

const TakeAdoptionApply = () => {
  return (
    <Grid
      display='flex'
      flexDirection='column'
      alignItems='center'
      padding='0 35px'
      width='auto'
    >
      <Text margin='0' weight='800' size='20px'>
        입양 신청서
      </Text>
      <DefaultInfomation />
      <AdoptionSurvey />
      <AdoptionReason />
    </Grid>
  );
};

export default TakeAdoptionApply;
