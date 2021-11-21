import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';
import { Card, Carousel2 } from '../';

const AdoptionWishedCardList = (props) => {
  const wishPostList = useSelector((state) => state.post.wishPostList);

  return (
    <Grid margin='80px 0 0 0'>
      <Grid display='flex' width='calc(100% - 1rem)'>
        <Text margin='0' size='18px' weight='700'>
          나의 관심친구
        </Text>
      </Grid>
      {wishPostList.length === 0 ? (
        <>
          <Grid
            display='flex'
            alignItems='center'
            margin='8px 0'
            width='auto'
            height='auto'
          >
            <Text margin='0' color='#b6b1b0' weight='700' size='12px'>
              아직 관심친구가 없어요..
            </Text>
            <Text margin='0' size='12px'>
              😓
            </Text>
          </Grid>
          <img
            width='100%'
            src={process.env.PUBLIC_URL + '/img/illust/no_wish.svg'}
          />
        </>
      ) : (
        <Carousel2 width={wishPostList.length}>
          {wishPostList.map((p) => {
            return (
              <Card
                key={p.postId}
                breed={p.breed}
                sex={p.sex}
                age={p.age}
                createAt={p.createAt}
                modifiedAt={p.modifiedAt}
                ownerType={p.ownerType}
                address={p.address}
                img={p.img.split(' ##'[0])}
                postId={p.postId}
                isAdopted={p.isAdopted}
                margin='0 20px 0 0'
              />
            );
          })}
        </Carousel2>
      )}
    </Grid>
  );
};

export default AdoptionWishedCardList;
