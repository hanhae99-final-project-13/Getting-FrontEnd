import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid } from '../elements';

const Adoption = () => {
  const dispatch = useDispatch();
  const wishedPostList = useSelector((state) => state.post.wishedpostList);
  return (
    <Grid>
      <Grid></Grid>
    </Grid>
  );
};

export default Adoption;
