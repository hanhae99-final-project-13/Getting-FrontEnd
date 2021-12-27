import React from 'react';
import { Grid } from '../../elements/index';

const Age = ({ age, setAge }) => {
  return (
    <Grid display='flex' justifyContent='space-between'>
      <input
        type='number'
        placeholder='나이'
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
        style={{ width: '60%', border: 'none' }}
      />
      <strong style={{ paddingRight: '10px' }}>살</strong>
    </Grid>
  );
};

export default Age;
