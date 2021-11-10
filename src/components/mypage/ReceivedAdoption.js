import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';
import Card from '../Card';
import { postActions } from '../../redux/modules/post';

const ReceivedAdoption = (props) => {
  const dispatch = useDispatch();
  const myPostList = useSelector((state) => state.post.myPostList);
  const isShowApply = useSelector((state) => state.post.isShowApply);

  React.useEffect(() => {
    dispatch(postActions.changeShowApply(true));
    return () =>
      window.addEventListener(
        'beforeunload',
        dispatch(postActions.changeShowApply(false)),
      );
  }, []);
  return (
    <Grid display={props.display}>
      {myPostList.map((p, i) => {
        if (p.formPreviews.length === 0) {
          return;
        }
        return (
          <Card
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
            img={p.postPreview.img.split(' ##'[0])}
            postId={p.postPreview.postId}
            isAdopted={p.postPreview.isAdopted}
            index={i}
            isShowApply={isShowApply}
          />
        );
      })}
    </Grid>
  );
};

export default ReceivedAdoption;
