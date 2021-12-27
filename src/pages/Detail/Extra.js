import React from 'react';
import { Grid } from '../../elements/index';
const Extra = ({ post }) => {
  return (
    <Grid display='flex' margin='5px 0 0 0'>
      <Grid>
        <p
          style={{
            color: '#6B6462',
            fontSize: '14px',
            fontWeight: '800',
          }}
        >
          특이사항
        </p>
        <span style={{ whiteSpace: 'pre-line' }}>{post.post.extra}</span>
      </Grid>
    </Grid>
  );
};

export default Extra;
