import React from 'react';
import styled from 'styled-components';

import { Grid } from '../../elements';
import AddressData from '../AddressData';

const SearchAddressSelector = (props) => {
  const { setCity, setDistrict } = props;
  const changeDistrict = () => {
    const currentCity = document.querySelector('#citySelectBox').value;
    const districtSelectBox = document.querySelector('#districtSelectBox');
    const renewal = document.querySelectorAll(
      '#districtSelectBox option.renewal',
    );
    if (renewal.length !== 0) {
      renewal.forEach((val) => {
        val.remove();
      });
    }

    if (currentCity === '지역선택') {
      return;
    }

    AddressData[currentCity].map((val, idx) => {
      let opt = document.createElement('option');
      opt.textContent = val;
      opt.classList.add('renewal');
      districtSelectBox.appendChild(opt);
    });
    setCity(currentCity);
  };

  return (
    <SelectBoxGroup>
      <select id='citySelectBox' onChange={changeDistrict}>
        <option selected value='지역선택'>
          지역선택
        </option>
        <option>강원도</option>
        <option>경기도</option>
        <option>경상남도</option>
        <option>경상북도</option>
        <option>광주광역시</option>
        <option>대구광역시</option>
        <option>대전광역시</option>
        <option>부산광역시</option>
        <option>서울특별시</option>
        <option>세종특별자치시&nbsp;</option>
        <option>울산광역시</option>
        <option>인천광역시</option>
        <option>전라남도</option>
        <option>전라북도</option>
        <option>제주특별자치도</option>
        <option>충청남도</option>
        <option>충청북도</option>
      </select>
      <select
        id='districtSelectBox'
        onChange={() => {
          setDistrict(document.querySelector('#districtSelectBox').value);
        }}
      >
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
