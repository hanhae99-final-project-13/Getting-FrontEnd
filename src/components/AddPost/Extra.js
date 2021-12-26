import React from 'react';
import { Grid } from '../../elements/index';
const Extra = ({ extra, setExtra }) => {
  return (
    <Grid padding='15px 0' borderTop='1px solid rgba(225, 225, 225, 0.5)'>
      <textarea
        placeholder='특이사항을 입력해주세요!
예비 견주님께 참고가 될만한 어떤 것이라도 좋습니다'
        value={extra}
        onChange={(e) => {
          setExtra(e.target.value);
        }}
        style={{
          width: '100%',
          height: '200px',
          marginBottom: '20px',
          border: 'none',
          resize: 'none',
          boxSizing: 'border-box',
        }}
      />
    </Grid>
  );
};
export default Extra;
