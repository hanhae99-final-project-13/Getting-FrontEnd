import React from 'react';
import { Grid } from '../../elements/index';

const LostLocation = ({ lostLocation, setLostLocation }) => {
  return (
    <Grid padding='15px 0' borderTop='1px solid rgba(225, 225, 225, 0.5)'>
      <input
        placeholder='발견장소를 입력해주세요'
        value={lostLocation}
        onChange={(e) => {
          setLostLocation(e.target.value);
        }}
        style={{ border: 'none' }}
      />
    </Grid>
  );
};

export default LostLocation;
