import React from 'react';

import { Grid } from '../../elements';

const DockingCheck = (props) => {
  return (
    <Grid display={props.display}>
      <Grid>도킹체크</Grid>
    </Grid>
  );
};

export default DockingCheck;
