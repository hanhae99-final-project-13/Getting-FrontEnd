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
      width='36%'
      padding='12px 8px'
      borderRadius='10px'
      margin={margin}
      boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
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
          <ElP>{ownerType.includes('보호소') ? '보호소' : ownerType}</ElP>
        </Tag>
        <Tag2>
          <ElP>{isAdopted === 'ABANDONED' ? '보호중' : '입양 완료'}</ElP>
        </Tag2>
      </Grid>
      <ImageBox img={img} />
      <Grid
        display='flex'
        justifyContent='space-between'
        width='auto'
        margin='5px 0 5px 0'
      >
        <Text margin='0' size='14px' weight='800 '>
          {breed.split('[개]').reverse()[0]}
        </Text>
        {sex === 'F' ? (
          <img
            width='10'
            height='12'
            src={process.env.PUBLIC_URL + '/img/icon/female_icon.svg'}
          />
        ) : (
          <img
            width='10'
            height='12'
            src={process.env.PUBLIC_URL + '/img/icon/male_icon.svg'}
          />
        )}
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
        <Text margin='0 0 0 5px' size='10px'>
          {modifiedAt ? modifiedAt.split('T')[0].replace(/-/g, '.') : createAt}{' '}
          &nbsp;&nbsp;
        </Text>
      </Grid>
      <Grid display='flex' alignItems='center' width='auto'>
        <img
          width='10'
          src={process.env.PUBLIC_URL + '/img/icon/location_icon.svg'}
        />
        <Text margin='0 0 0 5px' size='10px'>
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
  font-size: 6px;
  text-align: center;
`;

const Tag = styled.div`
  height: auto;
  padding: 3px 6px;
  background-color: white;
  border-radius: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Tag2 = styled.div`
  height: auto;
  padding: 3px 6px;
  background-color: white;
  border-radius: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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
