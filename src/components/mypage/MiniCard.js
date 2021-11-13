import React from 'react';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';

const MiniCard = () => {
  return (
    <React.Fragment>
      <Grid display='flex' padding='10px' height='81px'>
        <Grid width='40%' bg='steelblue' borderRadius='10px'></Grid>
        <Grid
          display='flex'
          flexDirection='column'
          justifyContent='space-around'
          width='60%'
        >
          <Grid display='flex' justifyContent='space-between'>
            <Text></Text>
            <img width='7' src={process.env.PUBLIC_URL + '/public/img/icon/'} />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MiniCard;
