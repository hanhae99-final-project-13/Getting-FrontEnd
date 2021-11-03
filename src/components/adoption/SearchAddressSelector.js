import React from 'react';
import styled from 'styled-components';

import { Grid } from '../../elements';
import AddressData from '../AddressData';

const SearchAddressSelector = () => {
  const makeDropBox = () => {
    const selectBox = document.querySelector('#selectBox');
    const locations = Object.keys(AddressData);
  };

  console.log(Object.keys(AddressData));

  return (
    <SelectBoxGroup>
      <select>
        <option selected>지역선택</option>
        <option>강원도</option>
        <option>경기도</option>
        <option>경상남도</option>
        <option>경상북도</option>
        <option>광주광역시</option>
        <option>대구광역시</option>
        <option>대전광역시</option>
        <option>부산광역시</option>
        <option>강원도</option>
        <option>강원도</option>
        <option>강원도</option>
      </select>
      <select>
        <option selected>세부지역 선택</option>
      </select>
    </SelectBoxGroup>
  );
};

const SelectBoxGroup = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: auto;

  select {
    margin: 0;
    padding: 5px 10px;
    background-color: #ebebeb;
    font-size: 10px;
    -webkit-transform: scale(0.7);
    border: none;
    border-radius: 10px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }

  select option {
    margin: 0;
    font-size: 10px;
    text-align: left;
    -webkit-transform: scale(0.1);
  }
`;

export default SearchAddressSelector;
