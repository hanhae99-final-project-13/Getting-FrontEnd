import React from 'react';
import { Grid } from '../../elements/index';

const Weight = ({ weight, setWeight }) => {
  return (
    <Grid display='flex' justifyContent='space-between'>
      <input
        type='number'
        placeholder='체중'
        value={weight}
        onChange={(e) => {
          if (e.keyCode < 48 || e.keyCode > 57) {
            return false;
          }
          setWeight(e.target.value);
        }}
        style={{ width: '60%', border: 'none' }}
      />
      <strong style={{ paddingRight: '10px' }}>kg</strong>
    </Grid>
  );
};

export default Weight;
