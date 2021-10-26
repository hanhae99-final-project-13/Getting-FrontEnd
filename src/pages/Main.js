import React from 'react';
import styled from 'styled-components';

import { Grid, Grid2 } from '../elements';
import {
  MainHello,
  MainIfYouFirstAdoption,
  MainAdoptionCardList,
  MainAdopted,
} from '../components';

const Main = () => {
  return (
    <Grid width='auto' padding='20px'>
      <Grid margin='0 0 40px 0'>
        <MainHello />
      </Grid>
      <Grid margin='0 0 40px 0'>
        <MainIfYouFirstAdoption />
      </Grid>
      <Grid>
        <MainAdoptionCardList />
      </Grid>
      <Grid>
        <MainAdopted />
      </Grid>
    </Grid>
  );
};

export default Main;
