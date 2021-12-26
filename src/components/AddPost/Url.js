import React from 'react';
import { Grid } from '../../elements/index';
const Url = ({ tag, url, setUrl }) => {
  return (
    <Grid padding='15px 0' borderTop='1px solid rgba(225, 225, 225, 0.5)'>
      {tag === '직접등록' ? (
        <input
          placeholder='유기견 정보를 참고할 수 있는 링크를 남겨주세요'
          value={url || ''}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          style={{
            width: '100%',
            fontSize: '14px',
            border: 'none',
            boxSizing: 'border-box',
          }}
        />
      ) : (
        <input
          placeholder='유기견 정보를 가져오신 링크를 남겨주세요'
          value={url || ''}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          style={{
            width: '100%',
            fontSize: '14px',
            border: 'none',
            boxSizing: 'border-box',
          }}
        />
      )}
    </Grid>
  );
};
export default Url;
