import React from 'react';
import { Grid, Text } from '../../elements/index';
import Slider from '../Slider';
const OwnerType = ({ ownerType, ownerTypeCheck, ownerTypeToggle }) => {
  return (
    <Grid
      display='flex'
      padding='10px 0'
      borderTop='1px solid rgba(225, 225, 225, 0.5)'
    >
      <input
        value={'보호장소를 선택해주세요'}
        placeholder='보호장소'
        style={{ width: '100%', color: 'black', border: 'none' }}
      />
      <Grid display='flex' alignItems='center'>
        <Text color={ownerType === '개인' ? 'black' : '#E7E5E5'}>개인</Text>
        <Slider handleToggle={ownerTypeCheck} valueCheck={ownerTypeToggle} />
        <Text color={ownerType === '보호소' ? 'black' : '#E7E5E5'}>보호소</Text>
      </Grid>
    </Grid>
  );
};
export default OwnerType;
