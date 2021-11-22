import React from 'react';
import styled from 'styled-components';
import { history } from '../../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';

import { Grid, Text } from '../../elements';
import { postActions } from '../../redux/modules/post';

const AdoptionCard = (props) => {
  const {
    breed,
    sex,
    age,
    createAt,
    modifiedAt,
    ownerType,
    address,
    img,
    postId,
    isAdopted,
  } = props;
  const { margin } = props;
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.postList);

  const goDetail = () => {
    history.push(`/detail/${postId}`);
  };

  return (
    <Grid
      position='relative'
      width='43%'
      padding='12px 8px'
      borderRadius='10px'
      margin={margin}
      border='0.5px solid #e7e5e5'
      boxShadow='4px 4px 20px rgba(164, 184, 255, 0.3)'
      _onClick={goDetail}
    >
      <Grid
        position='absolute'
        top='-25px'
        left='0px'
        display='flex'
        width='auto'
        height='auto'
      >
        <Tag>
          <ElP>
            {ownerType.includes('보호') ||
            ownerType.includes('병원') ||
            ownerType.includes('동물')
              ? '보호소'
              : ownerType}
          </ElP>
        </Tag>
        <Tag2>
          <ElP>{isAdopted === 'ABANDONED' ? '보호중' : '입양 완료'}</ElP>
        </Tag2>
      </Grid>
      <ImageBox img={img} />
      <Grid display='flex' width='auto' margin='5px 0 5px 0'>
        {sex === 'F' ? (
          <img
            width='11'
            height='11'
            src={process.env.PUBLIC_URL + '/img/icon/female_icon.svg'}
          />
        ) : (
          <img
            width='11'
            height='11'
            src={process.env.PUBLIC_URL + '/img/icon/male_icon.svg'}
          />
        )}
        <Text margin='0 0 0 6px' size='12px' color='#1a0300' weight='800 '>
          {breed.split('[개]').reverse()[0]}
        </Text>
      </Grid>
      <Grid
        display='flex'
        alignItems='center'
        margin='0 0 6px 0'
        width='auto'
        height='auto'
      >
        <img
          width='10'
          src={process.env.PUBLIC_URL + '/img/icon/clock_icon.svg'}
        />
        <Text margin='0 0 0 5px' size='12px'>
          {modifiedAt ? modifiedAt.split('T')[0].replace(/-/g, '.') : createAt}{' '}
          &nbsp;&nbsp;
        </Text>
      </Grid>
      <Grid display='flex' alignItems='center' width='auto'>
        <img
          width='10'
          src={process.env.PUBLIC_URL + '/img/icon/location_icon.svg'}
        />
        <Text margin='0 0 0 5px' size='12px'>
          {address}
        </Text>
      </Grid>
    </Grid>
  );
};

AdoptionCard.defaultProps = {
  margin: null,
};

const ElP = styled.p`
  width: auto;
  margin: 0;
  font-size: 12px;
  text-align: center;
`;

const Tag = styled.div`
  height: auto;
  padding: 3px 6px;
  background-color: white;
  border: 0.5px solid #e7e5e5;
  border-radius: 15px;
  box-shadow: 4px 4px 20px rgba(164, 184, 255, 0.3);
`;

const Tag2 = styled.div`
  height: auto;
  padding: 3px 6px;
  background-color: white;
  border: 0.5px solid #e7e5e5;
  border-radius: 15px;
  box-shadow: 4px 4px 20px rgba(164, 184, 255, 0.3);
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100px;
  background: url(${(props) => props.img}) no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
`;

export default AdoptionCard;
