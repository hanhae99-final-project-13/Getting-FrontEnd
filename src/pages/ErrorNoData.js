import React from 'react';

import { Grid } from '../elements';

const ErrorNoData = () => {
  return (
    <React.Fragment>
      <Grid display='flex' justifyContent='center' alignItems='center'>
        <img
          with='200'
          src={process.env.PUBLIC_URL + '/img/GUIicon/warning_icon.svg'}
        />
      </Grid>
    </React.Fragment>
  );
};

export default ErrorNoData;
