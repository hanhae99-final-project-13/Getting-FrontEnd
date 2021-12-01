import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';
import Card from '../Card';

const AdoptionOk = (props) => {
  const myApplyList = useSelector((state) => state.apply.myApplyList);

  return (
    <Grid display={props.display}>
      {myApplyList.map((p) => {
        if (p.acceptance !== 'accepted') {
          return;
        }
        return (
          <Card
            width='auto'
            imageHeight='150px'
            margin='0 0 33px 0'
            noTag
            key={p.postPreview.postId}
            breed={p.postPreview.breed}
            sex={p.postPreview.sex}
            age={p.postPreview.age}
            createAt={p.postPreview.createAt}
            modifiedAt={p.postPreview.modifiedAt}
            ownerType={p.postPreview.ownerType}
            address={p.postPreview.address}
            img={p.postPreview.img.split(' ##'[0])}
            postId={p.postPreview.postId}
            isAdopted={p.postPreview.isAdopted}
          />
        );
      })}
    </Grid>
  );
};

export default AdoptionOk;
