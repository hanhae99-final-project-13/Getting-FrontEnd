import React from 'react';
import { useSelector } from 'react-redux';

import { Grid } from '../../elements';
import Card from '../Card';
import MiniCard from './MiniCard';
const MyWriteList = (props) => {
  const myPostList = useSelector((state) => state.post.myPostList);
  if (!myPostList) {
    return <div></div>;
  }
  return (
    <Grid display={props.display}>
      {myPostList.map((p) => {
        return (
          <Card
            margin='0 0 49px 0'
            width='auto'
            imageHeight='150px'
            key={p.postPreview.postId}
            breed={p.postPreview.breed}
            sex={p.postPreview.sex}
            age={p.postPreview.age}
            createAt={p.postPreview.createAt}
            modifiedAt={p.postPreview.modifiedAt}
            ownerType={p.postPreview.ownerType}
            address={p.postPreview.address}
            img={p.postPreview.img.split(' ##')[0]}
            postId={p.postPreview.postId}
            isAdopted={p.postPreview.isAdopted}
          />
        );
      })}
    </Grid>
  );
};

export default MyWriteList;
