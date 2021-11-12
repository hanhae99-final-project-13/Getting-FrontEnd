import React from 'react';
import { useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';

import { Grid } from '../elements';
import {
  MainHello,
  MainIfYouFirstAdoption,
  MainAdoptionCardList,
} from '../components/main';
import { BackButton, Logo } from '../components';
import { postActions } from '../redux/modules/post';

const Main = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postActions.getMainPostMW());
  }, []);

  return (
    <Grid width='375px' margin='0 auto 50px auto'>
      <Grid position='relative' height='100px'>
        <BackButton position='absolute' top='63px' left='36px' right='0' />
        <Logo
          position='absolute'
          top='59px'
          left='0'
          right='0'
          margin='0 auto'
        />
      </Grid>
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
