import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '../../elements';
import Card from '../Card';
import HaveNothing from '../HaveNothing';
import { postActions } from '../../redux/modules/post';

const AdoptionWait = (props) => {
  const dispatch = useDispatch();
  const myApplyList = useSelector((state) => state.apply.myApplyList);

  return (
    <Grid display={props.display}>
      {myApplyList.length !== 0 ? (
        myApplyList.map((p) => {
          if (p.postPreview.isAdopted !== '보호중') {
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
            />
          );
        })
      ) : (
        <HaveNothing
          it='입양신청한 친구가 '
          state='없습니다'
          ment='친구 보러가기'
          goThere='/adoption'
        />
      )}
    </Grid>
  );
};

export default AdoptionWait;
