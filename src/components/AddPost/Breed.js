import React from 'react';
import { Grid, Text } from '../../elements/index';
import Slider from '../Slider';
const Breed = ({ breed, setBreed, sex, sexToggle, sexCheck }) => {
  return (
    <Grid
      display='flex'
      padding='10px 0'
      borderTop='1px solid rgba(225, 225, 225, 0.5)'
    >
      <input
        placeholder='견종'
        value={breed}
        onChange={(e) => {
          setBreed(e.target.value);
        }}
        style={{ width: '80%', border: 'none' }}
      />
      <Grid display='flex' alignItems='center'>
        <Text color={sex === 'M' ? 'black' : '#E7E5E5'}>남아</Text>
        <Slider handleToggle={sexCheck} valueCheck={sexToggle} />
        <Text color={sex === 'F' ? 'black' : '#E7E5E5'}>여아</Text>
      </Grid>
    </Grid>
  );
};

export default Breed;
