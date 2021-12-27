import React from 'react';
import { Grid } from '../../elements/index';
const WeightAndAge = ({ post }) => {
  return (
    <Grid
      display='flex'
      margin='20px 0 0 0'
      padding='0 0 15px 0'
      borderBottom='1px solid rgba(225, 225, 225, 0.8)'
    >
      <Grid width='50%'>
        <span
          style={{
            color: '#6B6462',
            fontSize: '14px',
            fontWeight: '800',
          }}
        >
          체중
        </span>
        <span style={{ margin: '0 5px 0 10px' }}>{post.post.weight} kg</span>
      </Grid>

      <Grid width='50%'>
        <span
          style={{
            color: '#6B6462',
            fontSize: '14px',
            fontWeight: '800',
          }}
        >
          나이
        </span>
        <span style={{ margin: '0 5px 0 10px' }}>{post.post.age} 살</span>
      </Grid>
    </Grid>
  );
};

export default WeightAndAge;
