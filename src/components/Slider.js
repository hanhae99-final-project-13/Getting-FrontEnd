import React from 'react';
import styled from 'styled-components';

const Slider = (props) => {
  const { valueCheck, handleToggle, data } = props;
  React.useEffect(() => {
    if (data === '가져온 정보') {
      handleToggle(valueCheck);
    } else if (data === 'F') {
      handleToggle(valueCheck);
    } else if (data === '보호소') {
      handleToggle(valueCheck);
    } else if (data === '없음') {
      handleToggle();
    } else if (data === '증상없음') {
      handleToggle();
    }
  }, []);
  return (
    <React.Fragment>
      <SwitchBox>
        <CheckBox
          type='checkbox'
          // checked가 true여야 오른쪽으로 이동함
          checked={valueCheck}
          onChange={() => {
            handleToggle();
          }}
        />
        <Switch />
      </SwitchBox>
    </React.Fragment>
  );
};

const SwitchBox = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 32px;
  margin: 0 2px;
  cursor: pointer;
`;
const Switch = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-color: #fe7968;
  border-radius: 17px;
  &::after {
    display: block;
    width: 26px;
    height: 26px;
    margin: 3px;
    background-color: white;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    content: '';
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  z-index: 1;
  width: 0;
  height: 0;
  opacity: 0;

  &:checked + ${Switch} {
    background-color: #fe7968;
    &::after {
      display: block;
      width: 26px;
      height: 26px;
      margin-left: 31px;
      border-radius: 50%;
      content: '';
      transition: 0.2s;
    }
  }
`;

export default Slider;
