import React from 'react';
import styled from 'styled-components';

import { Grid } from '../../elements';
import { AdoptionCard } from '.';
import { useSelector } from 'react-redux';
import InfinityScroll from '../../shared/InfinityScroll';

const AdoptionCardList = () => {
  const postList = useSelector((state) => state.post.postList);

  // if (postList === []) {
  //   return <div></div>;
  // }

  return (
    <Grid width='auto' height='auto'>
      <Grid
        display='flex'
        justifyContent='space-between'
        flexWrap='wrap'
        margin='45px 0 0 0'
      >
        {postList &&
          postList.map((p) => {
            return (
              <AdoptionCard
                margin='0 0 53px 0'
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
    </Grid>
  );
};

export default AdoptionCardList;
