import React from 'react';
import { Grid, Text } from '../../elements/index';
import Slider from '../Slider';
const Tag = ({ tag, tagCheck, tagToggle }) => {
  return (
    <Grid
      display='flex'
      padding='10px 0'
      borderTop='1px solid rgba(225, 225, 225, 0.5)'
    >
      <input
        placeholder='정보출처'
        value={'출처를 선택해주세요'}
        style={{
          width: '60%',
          color: 'black',
          border: 'none',
        }}
      />
      <Grid
        display='flex'
        justifyContent='flex-end'
        alignItems='center'
        fontSize='14px'
      >
        <Text color={tag === '직접등록' ? 'black' : '#E7E5E5'}>직접등록</Text>
        <Slider handleToggle={tagCheck} valueCheck={tagToggle} />
        <Text color={tag === '가져온 정보' ? 'black' : '#E7E5E5'}>
          가져온 정보
        </Text>
      </Grid>
    </Grid>
  );
};
export default Tag;
