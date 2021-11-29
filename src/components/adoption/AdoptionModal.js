import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';
import { Calendar } from '.';
import SearchAddressSelector from './SearchAddressSelector';
import { postActions } from '../../redux/modules/post';

const AdoptionModal = (props) => {
  const dispatch = useDispatch();
  const searchSetting = useSelector((state) => state.post.searchSetting);
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
  const toggleCircle = React.useRef();
  const toggleOwnerType = () => {
    if (ownerType === '개인') {
      setOwnerType('보호소');
      toggleCircle.current.style.marginLeft = '36px';
    } else {
      setOwnerType('개인');
      toggleCircle.current.style.marginLeft = '-1.5px';
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
    dispatch(postActions.setSearch(newSearchSetting));
    dispatch(postActions.getPostMW(newSearchSetting));
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
        bg='rgba(30, 30, 30, 0.8)'
        _onClick={hideModal}
      ></Grid>
      <Grid
        position='relative'
        padding='20px 0'
        width='305px'
        height='361px'
        bg='white'
        borderRadius='16px'
        boxSizing='border-box'
      >
        <Grid
          display='flex'
          alignItems='center'
          justifyContent='center'
          margin='0 0 20px 0'
          height='auto'
        >
          <Text margin='0' size='16px' weight='700'>
            검색 조건
          </Text>
        </Grid>
        <Grid
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='space-evenly'
          height='calc(100% - 40px)'
          borderTop='0.5px solid #e7e5e5'
        >
          <Grid
            display='flex'
            justifyContent='flex-start'
            margin='0 0 0 24px'
            height='auto'
          >
            {termCheck ? (
              <CheckBoxOn onClick={() => setTermCheck(!termCheck)} />
            ) : (
              <CheckBoxOff onClick={() => setTermCheck(!termCheck)} />
            )}
            <Text margin='0 0 0 10px' size='14px' weight='700'>
              기간
            </Text>
          </Grid>
          <Grid
            display='flex'
            justifyContent='space-evenly'
            alignItems='center'
            height='auto'
            zIndex='2'
          >
            <Grid display='flex' alignItems='center' width='auto'>
              <Calendar changeDate={changeStartDate} termCheck={termCheck} />
              <img
                width='18'
                height='19'
                style={{ marginLeft: '8px' }}
                src={process.env.PUBLIC_URL + '/img/icon/calender_icon.svg'}
              />
            </Grid>
            <Text margin='0' weight='700' color='#6b6462'>
              ~
            </Text>
            <Grid display='flex' alignItems='center' width='auto'>
              <Calendar
                changeDate={changeEndDate}
                startDate={startDate}
                termCheck={termCheck}
              />
              <img
                width='18'
                height='19'
                style={{ marginLeft: '8px' }}
                src={process.env.PUBLIC_URL + '/img/icon/calender_icon.svg'}
              />
            </Grid>
          </Grid>
          <Grid
            display='flex'
            justifyContent='flex-start'
            margin='0 0 0 24px'
            height='auto'
          >
            {ownerTypeCheck ? (
              <CheckBoxOn onClick={() => setOwnerTypeCheck(!ownerTypeCheck)} />
            ) : (
              <CheckBoxOff onClick={() => setOwnerTypeCheck(!ownerTypeCheck)} />
            )}
            <Text margin='0 0 0 10px' size='14px' weight='700'>
              장소
            </Text>
          </Grid>
          <Grid
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='auto'
            height='auto'
          >
            <Text margin='0' size='12px' weight='700'>
              개인
            </Text>
            <Grid
              position='relative'
              display='flex'
              justifyContent='center'
              width='auto'
              height='auto'
            >
              {ownerTypeCheck ? null : <Cover />}
              <ToggleButton onClick={toggleOwnerType}>
                <div ref={toggleCircle} />
              </ToggleButton>
            </Grid>
            <Text margin='0' size='12px' weight='700'>
              보호소
            </Text>
          </Grid>
          <Grid
            display='flex'
            justifyContent='flex-start'
            margin='0 0 0 24px'
            height='auto'
          >
            {locationCheck ? (
              <CheckBoxOn onClick={() => setLocationCheck(!locationCheck)} />
            ) : (
              <CheckBoxOff onClick={() => setLocationCheck(!locationCheck)} />
            )}
            <Text margin='0 0 0 10px' size='14px' weight='700'>
              지역
            </Text>
          </Grid>
          <SearchAddressSelector
            setCity={setCity}
            setDistrict={setDistrict}
            locationCheck={locationCheck}
          />
          <Grid
            display='flex'
            alignItems='center'
            justifyContent='center'
            width='128px'
            height='40px'
            bg='#fe7968'
            borderRadius='26px'
            _onClick={doSearch}
            cusor='pointer'
          >
            <Text margin='0' color='white' size='16px' weight='800'>
              찾아보기
            </Text>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ToggleButton = styled.div`
  margin: 0 10px;
  width: 59px;
  height: 24px;
  background-color: #fe7968;
  border-radius: 50px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  div {
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 50px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s all ease;
  }
`;

const CheckBoxOn = styled.div`
  margin-right: 4px;
  width: 16px;
  height: 16px;
  background: url(${process.env.PUBLIC_URL}/img/icon/check_icon_pink.svg);
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const CheckBoxOff = styled.div`
  margin-right: 4px;
  width: 16px;
  height: 16px;
  background: url(${process.env.PUBLIC_URL}/img/icon/check_icon_black.svg);
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  width: 59px;
  height: 100%;
  background-color: white;
  opacity: 0.6;
  border-radius: 10px;
  z-index: 1;
`;

export default AdoptionModal;
