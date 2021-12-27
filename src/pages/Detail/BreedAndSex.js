import React from 'react';
import { Grid } from '../../elements/index';

const BreedAndSex = ({ post }) => {
  return (
    <Grid
      display='flex'
      margin='10px 0'
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
          견종
        </span>
        <span style={{ margin: '0 5px 0 10px' }}>
          {post.post.breed.split('[개]').reverse()[0]}
        </span>
      </Grid>

      <Grid width='50%'>
        <span
          style={{
            color: '#6B6462',
            fontSize: '14px',
            fontWeight: '800',
          }}
        >
          성별
        </span>
        <span style={{ margin: '0 5px 0 10px' }}>{post.post.sex}</span>
      </Grid>
    </Grid>
  );
};

export default BreedAndSex;
