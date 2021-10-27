import React, { useState } from 'react';
import styled from 'styled-components';

const Slider = (props) => {
  const p = props;
  console.log(p);
  const switchClick = () => {
    if (p.sexCheck) {
      p.sexCheck(!p.sexToggle);
    } else if (p.ownerTypeCheck) {
      p.ownerTypeCheck(!p.ownerTypeToggle);
    } else if (p.conditionCheck) {
      p.conditionCheck(!p.conditionToggle);
    } else if (p.tagCheck) {
      p.tagCheck(!p.tagToggle);
    }
  };

  return (
    <React.Fragment>
      <SwitchBox>
        <CheckBox type='checkbox' onClick={switchClick} />

        <Switch />
      </SwitchBox>
    </React.Fragment>
  );
};

const SwitchBox = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;
const Switch = styled.span`
  position: absolute;
  cursor: pointer;
  border-radius: 17px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #3ef;

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    margin: 3px;
    background-color: white;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  width: 0;
  height: 0;
  &:checked + ${Switch} {
    background-color: #3ef;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 26px;
      height: 26px;
      margin-left: 30px;
      transition: 0.2s;
    }
  }
`;

export default Slider;
