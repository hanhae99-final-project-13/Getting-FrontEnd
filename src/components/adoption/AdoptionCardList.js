import React from 'react';
import styled from 'styled-components';

import { Grid } from '../../elements';
import { AdoptionCard } from '.';
import { useSelector } from 'react-redux';
import InfinityScroll from '../../shared/InfinityScroll';

const AdoptionCardList = () => {
  const postList = useSelector((state) => state.post.postList);

  if (postList === []) {
    return <div>로우딩중</div>;
  }

  return (
    <Grid width='auto' height='auto'>
      <Grid
        display='flex'
        justifyContent='space-around'
        flexWrap='wrap'
        margin='20px 0 0 0'
      >
        {postList.map((p, idx) => {
          return (
            <AdoptionCard
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
            />
          );
        })}
      </Grid>
      <InfinityScroll />
    </Grid>
  );
};

export default AdoptionCardList;
