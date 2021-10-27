import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { Grid } from '../elements';
import {
  MainHello,
  MainIfYouFirstAdoption,
  MainAdoptionCardList,
  MainAdopted,
} from '../components/main';
import { postActions } from '../redux/modules/post';

const Main = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postActions.getPostMW());
  }, []);
  return (
    <Grid width='auto' padding='20px' overflow='auto'>
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
