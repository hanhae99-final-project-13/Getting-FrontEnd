import React from 'react';
import styled from 'styled-components';
import { history } from '../../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';

import { Grid, Image, Text } from '../../elements';
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
      padding='1rem'
      borderRadius='10px'
      margin={margin}
      boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
      _onClick={goDetail}
    >
      <Tag>
        <ElP>{ownerType}</ElP>
      </Tag>
      <Tag2>
        <ElP>{isAdopted === 'ABANDONED' ? '보호중' : '입양 완료'}</ElP>
      </Tag2>
      <ImageBox img={img} />
      <Grid display='flex' width='auto' margin='5px 0 5px 0'>
        <Text margin='0' size='14px' bold>
          {breed.split('[개]').reverse()[0]}
        </Text>
        <Image size='8' />
      </Grid>
      <Grid display='flex' alignItems='center' width='auto' height='auto'>
        <Image size='8' margin='0' />
        <ElP>
          {modifiedAt ? modifiedAt.split('T')[0].replace(/-/g, '.') : createAt}{' '}
          &nbsp;&nbsp;
        </ElP>
        <Image size='8' margin='0' />
        <ElP>{address}</ElP>
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
  position: absolute;
  top: -10px;
  left: 0;
  height: auto;
  padding: 3px 6px;
  background-color: white;
  border-radius: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Tag2 = styled.div`
  position: absolute;
  top: -10px;
  left: 100px;
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
