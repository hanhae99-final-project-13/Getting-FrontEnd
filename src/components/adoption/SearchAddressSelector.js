import React from 'react';
import styled from 'styled-components';

import { Grid } from '../../elements';
import AddressData from '../AddressData';

const SearchAddressSelector = (props) => {
  const { setCity, setDistrict, locationCheck } = props;
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
    <Grid display='flex' justifyContent='center' width='auto' height='auto'>
      <SelectBoxGroup margin='0 0 24px 0'>
        {locationCheck ? null : <Cover />}
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
      </SelectBoxGroup>
      <SelectBoxGroup>
        {locationCheck ? null : <Cover />}
        <select
          id='districtSelectBox'
          onChange={() => {
            setDistrict(document.querySelector('#districtSelectBox').value);
          }}
        >
          <option selected>세부지역 선택</option>
        </select>
      </SelectBoxGroup>
    </Grid>
  );
};

const SelectBoxGroup = styled.div`
  position: relative;
  margin: 0 12px;
  padding: 0;
  width: 93px;
  height: 30px;

  select {
    position: relative;
    padding: 0px 7px;
    width: 93px;
    height: 30px;
    background-color: #ebebeb;
    font-size: 12px;
    font-weight: 700px;
    border: none;
    border-radius: 6px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.06);
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }

  select option {
    margin: 0;
    font-size: 10px;
    text-align: left;
  }
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 93px;
  height: 30px;
  background-color: white;
  opacity: 0.9;
  border-radius: 6px;
  z-index: 1;
`;

export default SearchAddressSelector;
