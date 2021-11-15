import React from 'react';
import { useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';

import { Grid } from '../elements';
import {
  MainHello,
  MainIfYouFirstAdoption,
  MainAdoptionCardList,
} from '../components/main';
import { BackButton, Logo, Header } from '../components';
import { postActions } from '../redux/modules/post';

const Main = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postActions.getMainPostMW());
  }, []);

  return (
    <Grid maxWidth='414px' margin='0 auto 50px auto'>
      <Header />
      <Grid width='auto' padding='0 36px' overflow='auto'>
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
    </Grid>
  );
};

export default Main;
