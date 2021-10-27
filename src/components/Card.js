import React from 'react';
import styled from 'styled-components';
import { history } from '../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';

import { Grid, Image, Text } from '../elements';
import { postActions } from '../redux/modules/post';

const Card = (props) => {
  const { margin } = props;
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.postList);

  const goDetail = () => {
    history.push('/');
  };

  React.useEffect(() => {
    dispatch(postActions.getPostMW());
  }, []);
  return (
    <Grid
      position='relative'
      width='180px'
      padding='1rem'
      borderRadius='10px'
      margin={margin}
      boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
      _onClick={goDetail}
    >
      <Tag>
        <ElP>임시보호중</ElP>
      </Tag>
      <ImageBox />
      <Grid display='flex' width='auto' margin='5px 0 5px 0'>
        <Text margin='0' bold>
          콩이
        </Text>
        <Image size='8' />
        <Text margin='0'>(닥스훈트)</Text>
      </Grid>
      <Grid display='flex' width='auto'>
        <Image size='8' />
        <ElP>2021.10.24 &nbsp;&nbsp;&nbsp;&nbsp;</ElP>
        <Image size='8' />
        <ElP>경기도 수원</ElP>
      </Grid>
    </Grid>
  );
};

Card.defaultProps = {
  margin: null,
};

const ElP = styled.p`
  width: auto;
  margin: 0;
  font-size: 0.7rem;
  text-align: center;
`;

const Tag = styled.div`
  position: absolute;
  top: -10px;
  left: 0;
  width: 60px;
  height: auto;
  padding: 3px 5px;
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

export default Card;
