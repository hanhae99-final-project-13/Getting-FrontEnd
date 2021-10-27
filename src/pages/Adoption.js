import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid } from '../elements';
import {
  AdoptionCardList,
  AdoptionSearchInput,
  AdoptionWishedCardList,
} from '../components/adoption';

const Adoption = () => {
  const dispatch = useDispatch();
  const wishedPostList = useSelector((state) => state.post.wishedpostList);
  return (
    <Grid width='auto' padding='20px' overflow='auto'>
      <Grid>
        <AdoptionWishedCardList />
      </Grid>
      <Grid>
        <AdoptionSearchInput />
      </Grid>
      <Grid>
        <AdoptionCardList />
      </Grid>
    </Grid>
  );
};

export default Adoption;
