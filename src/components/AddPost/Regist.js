import React from 'react';
import { Grid } from '../../elements/index';
const Regist = ({ addPostCard }) => {
  return (
    <Grid
      display='flex'
      alignItems='center'
      justifyContent='center'
      width='150px'
      height='50px'
      margin='0 auto 100px'
      bg='#FE7968'
      color='white'
      borderRadius='30px'
      cusor='pointer'
      _onClick={addPostCard}
    >
      등록하기
    </Grid>
  );
};

export default Regist;
