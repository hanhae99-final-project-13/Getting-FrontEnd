import React from 'react';
import { Grid } from '../../elements';

const SelectBox = (props) => {
  const { options, _onChange, defaultValue } = props;
  // console.log(defaultValue);

  return (
    <Grid width='auto'>
      {/* select 태그에 써있는 value는 selected역할을 해서 렌더링시 처음 선택값을 나타냅니다. */}
      <select onChange={_onChange} value={defaultValue}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
    </Grid>
  );
};

export default SelectBox;
