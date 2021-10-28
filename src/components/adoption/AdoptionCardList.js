import React from 'react';
import styled from 'styled-components';

import { Grid } from '../../elements';
import { AdoptionCard } from '.';

const AdoptionCardList = () => {
  return (
    <Grid display='flex' justifyContent='space-around' flexWrap='wrap' margin='20px 0 0 0'>
      <AdoptionCard margin='0 0 20px 0'/>
      <AdoptionCard margin='0 0 20px 0'/>
      <AdoptionCard margin='0 0 20px 0'/>
      <AdoptionCard margin='0 0 20px 0'/>
    </Grid>
  );
};

export default AdoptionCardList;
