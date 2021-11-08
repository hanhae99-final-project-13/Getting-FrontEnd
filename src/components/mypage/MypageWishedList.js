import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';
import Card from '../Card';

const MypageWishedList = (props) => {
  const wishPostList = useSelector((state) => state.post.wishPostList);
  return (
    <Grid display={props.display} margin='22px 0 80px 0'>
      <Grid display='flex' margin='0 0 22px 0' width='auto' height='auto'>
        <Text margin='0 10px 0 0' bold size='12px'>
          나의 관심 친구 수
        </Text>
        <Text margin='0' bold size='12px'>
          3
        </Text>
      </Grid>
      {wishPostList &&
        wishPostList.map((p) => {
          <Card
            width='auto'
            imageHeight='150px'
            margin='0 0 20px 0'
            key={p.postId}
            breed={p.breed}
            sex={p.sex}
            age={p.age}
            createAt={p.createAt}
            modifiedAt={p.modifiedAt}
            ownerType={p.ownerType}
            address={p.address}
            img={p.img[0]}
            postId={p.postId}
            isAdopted={p.isAdopted}
          />;
        })}
    </Grid>
  );
};

export default MypageWishedList;
