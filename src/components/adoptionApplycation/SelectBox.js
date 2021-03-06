import React from 'react';
import { Grid } from '../../elements';

const SelectBox = (props) => {
  const { options, _onChange, defaultValue } = props;
  // console.log(defaultValue);

  const style = {
    width: '60px',
    height: '36px',
    padding: '0 0 0 8px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#ECECEC',
    outline: '0',
    fontWeight: '700',
    color: '#B6B1B0',

    // background: url('arrow.jpg'),
    // // webkitAppearance: 'none',
    // mozAppearance: 'none',
    // appearance: 'none',
    // msExpand: 'none',
  };

  return (
    <Grid width='auto'>
      {/* select 태그에 써있는 value는 selected역할을 해서 렌더링시 처음 선택값을 나타냅니다. */}
      <select style={style} onChange={_onChange} value={defaultValue}>
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
