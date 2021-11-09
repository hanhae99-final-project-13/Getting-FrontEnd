import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Footer from '../components/Footer';

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
    dispatch(postActions.getMainPostMW());
  }, []);
  return (
    <Grid width='375px' margin='0 auto'>
      <Grid width='auto' padding='38px' overflow='auto' margin='80px 0 0 0'>
        <Grid margin='0 0 40px 0'>
          <MainHello />
        </Grid>
        <Grid margin='0 0 40px 0'>
          <MainIfYouFirstAdoption />
        </Grid>
        <Grid>
          <MainAdoptionCardList />
        </Grid>
      </Grid>
      <Footer></Footer>
    </Grid>
  );
};

export default Main;
