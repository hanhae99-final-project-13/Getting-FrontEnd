import React from 'react';
import { Grid } from '../../elements/index';
const Phone = ({ phone, setPhone }) => {
  return (
    <Grid padding='15px 0' borderTop='1px solid rgba(225, 225, 225, 0.5)'>
      <input
        placeholder='연락처'
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        style={{ border: 'none', width: '100%', boxSizing: 'border-box' }}
      />
    </Grid>
  );
};
export default Phone;
