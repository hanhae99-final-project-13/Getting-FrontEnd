import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid, Image, Text } from '../../elements';
import { Calendar } from '.';
import SearchAddressSelector from './SearchAddressSelector';
import { searchActions } from '../../redux/modules/search';
import { postActions } from '../../redux/modules/post';

const AdoptionModal = (props) => {
  const dispatch = useDispatch();
  const searchSetting = useSelector((state) => state.search.searchSetting);
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [city, setCity] = React.useState();
  const [district, setDistrict] = React.useState();
  const [termCheck, setTermCheck] = React.useState(false);
  const [ownerTypeCheck, setOwnerTypeCheck] = React.useState(false);
  const [locationCheck, setLocationCheck] = React.useState(false);
  const changeStartDate = (e) => {
    setStartDate(e);
  };
  const changeEndDate = (e) => {
    setEndDate(e);
  };

  const [ownerType, setOwnerType] = React.useState('개인');
  const toggleOwnerType = () => {
    if (ownerType === '개인') {
      setOwnerType('보호소');
      document.querySelector('#toggleCircle').style.marginLeft = '27px';
    } else {
      setOwnerType('개인');
      document.querySelector('#toggleCircle').style.marginLeft = '0';
    }
  };

  const hideModal = (e) => {
    document.querySelector('#searchModal').style.display = 'none';
  };
  const doSearch = () => {    
    const newSearchSetting = {
      ...searchSetting,
      page: 0,
      startDt: `${startDate.getUTCFullYear()}-${
        startDate.getUTCMonth() + 1
      }-${startDate.getUTCDate()}`,
      endDt: `${endDate.getUTCFullYear()}-${
        endDate.getUTCMonth() + 1
      }-${endDate.getUTCDate()}`,
      ownerType: ownerType,
      city: city,
      district: district,
    };
    if (!termCheck) {
      newSearchSetting.startDt = undefined;
      newSearchSetting.endDt = undefined;
    }
    if (!ownerTypeCheck) {
      newSearchSetting.ownerType = undefined;
    }
    if (!locationCheck) {
      newSearchSetting.city = undefined;
      newSearchSetting.district = undefined;
    }
    console.log(newSearchSetting);
    dispatch(searchActions.setSearch(newSearchSetting));
    dispatch(postActions.getPostMW(newSearchSetting))
    hideModal();
  };

  return (
    <Grid
      position='fixed'
      top='0'
      left='0'
      display='none'
      justifyContent='center'
      alignItems='center'
      id='searchModal'
      overflow='hidden'
      zIndex='100'
    >
      <Grid
        position='absolute'
        top='0'
        left='0'
        width='100%'
        height='100%'
        bg='rgba(0, 0, 0, 0.7)'
        _onClick={hideModal}
      ></Grid>
      <ModalBox>
        <p>검색 조건</p>
        <hr />
        <Grid>
          <Grid display='flex' width='auto' height='auto'>
            {termCheck ? (
              <CheckBoxOn onClick={() => setTermCheck(!termCheck)} />
            ) : (
              <CheckBoxOff onClick={() => setTermCheck(!termCheck)} />
            )}
            <span>기간</span>
          </Grid>
          <Grid
            display='flex'
            justifyContent='space-around'
            alignItems='center'
            height='auto'
          >
            <Calendar changeDate={changeStartDate} termCheck={termCheck} />
            <span className='between'>~</span>
            <Calendar
              changeDate={changeEndDate}
              startDate={startDate}
              termCheck={termCheck}
            />
          </Grid>
          <Grid display='flex' width='auto' height='auto'>
            {ownerTypeCheck ? (
              <CheckBoxOn onClick={() => setOwnerTypeCheck(!ownerTypeCheck)} />
            ) : (
              <CheckBoxOff onClick={() => setOwnerTypeCheck(!ownerTypeCheck)} />
            )}
            <span>장소</span>
          </Grid>
          <Grid
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='auto'
            height='auto'
          >
            <p className='toggleText'>개인</p>
            <Grid
              position='relative'
              display='flex'
              justifyContent='center'
              width='auto'
              height='auto'
            >
              {ownerTypeCheck ? null : <Cover />}
              <ToggleButton onClick={toggleOwnerType}>
                <div id='toggleCircle' />
              </ToggleButton>
            </Grid>
            <p className='toggleText'>보호소</p>
          </Grid>
          <Grid display='flex' width='auto' height='auto'>
            {locationCheck ? (
              <CheckBoxOn onClick={() => setLocationCheck(!locationCheck)} />
            ) : (
              <CheckBoxOff onClick={() => setLocationCheck(!locationCheck)} />
            )}
            <span>지역</span>
          </Grid>
          <Grid width='auto' height='auto'></Grid>
          <SearchAddressSelector
            setCity={setCity}
            setDistrict={setDistrict}
            locationCheck={locationCheck}
          />
        </Grid>
        <button id='submit' onClick={doSearch}>
          찾아보기
        </button>
      </ModalBox>
    </Grid>
  );
};

const ModalBox = styled.div`
  position: relative;
  width: 169px;
  height: 201px;
  padding: 12px;
  border-radius: 20px;
  background-color: white;
  z-index: 100;

  p {
    height: auto;
    margin: 0 0 12px 0;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
  }
  p.toggleText {
    margin: 0;
  }
  hr {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.4);
  }
  span {
    height: auto;
    font-size: 7px;
  }
  span.between {
    color: #a7a7a7;
  }

  button#submit {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 42px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    color: white;
    border: none;
    background-color: #504b4b;
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  margin: 0 10px;
  width: 50px;
  height: 23px;
  background-color: #ececec;
  border-radius: 50px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  div#toggleCircle {
    width: 23px;
    height: 23px;
    background-color: #fff;
    border-radius: 50px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s all ease;
  }
`;

const CheckBoxOn = styled.div`
  margin-right: 4px;
  width: 11px;
  height: 11px;
  background: url(https://toppng.com/uploads/preview/checked-checkbox-icon-checkbox-ico-115632629493xkxpf63d8.png)
    no-repeat;
  background-size: cover;
  background-position: center;
`;

const CheckBoxOff = styled.div`
  margin-right: 4px;
  width: 11px;
  height: 11px;
  background: url(http://download.seaicons.com/icons/icons8/windows-8/512/User-Interface-Unchecked-Checkbox-icon.png)
    no-repeat;
  background-size: cover;
  background-position: center;
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  width: 50px;
  height: 100%;
  background-color: white;
  opacity: 0.6;
  border-radius: 10px;
  z-index: 1;
`;

export default AdoptionModal;
