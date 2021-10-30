import React from 'react';
import styled from 'styled-components';
import { history } from '../../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';

import { Grid, Image, Text } from '../../elements';
import { postActions } from '../../redux/modules/post';

const AdoptionCard = (props) => {
  const { margin } = props;
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.postList);

  const goDetail = () => {
    history.push('/');
  };

  return (
    <Grid
      position='relative'
      width='130px'
      padding='1rem'
      borderRadius='10px'
      margin={margin}
      boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
      _onClick={() => {
        history.push('/detail');
      }}
    >
      <Tag>
        <ElP>임시보호중</ElP>
      </Tag>
      <ImageBox />
      <Grid display='flex' width='auto' margin='5px 0 5px 0'>
        <Text margin='0' size='14px' bold>
          닥스훈트
        </Text>
        <Image size='8' />
      </Grid>
      <Grid display='flex' alignItems='center' width='auto' height='auto'>
        <Image size='8' margin='0' />
        <ElP>2021.10.24 &nbsp;&nbsp;</ElP>
        <Image size='8' margin='0' />
        <ElP>경기도 수원</ElP>
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

const ImageBox = styled.div`
  width: 100%;
  height: 100px;
  background: url('http://rgo4.com/files/attach/images/2681740/682/850/029/5993dcd644b29c202130d9204e876693.jpeg')
    no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
`;

export default AdoptionCard;
