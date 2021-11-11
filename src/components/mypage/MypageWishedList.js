import React from 'react';
import { useSelector } from 'react-redux';

import { Grid, Text } from '../../elements';
import Card from '../Card';
import HaveNothing from '../HaveNothing';

const MypageWishedList = (props) => {
  const wishPostList = useSelector((state) => state.post.wishPostList);

  return (
    <Grid display={props.display} margin='22px 0 80px 0'>
      <Grid
        display='flex'
        alignItems='center'
        margin='0 0 66px 0'
        width='auto'
        height='auto'
      >
        <Text margin='0 10px 0 0' weight='800' size='12px'>
          나의 관심 친구 수
        </Text>
        <Text margin='0' color='#f88' weight='800' size='14px'>
          {wishPostList.length}
        </Text>
      </Grid>

      {wishPostList && wishPostList.length !== 0 ? (
        wishPostList.map((p) => {
          return (
            <Card
              width='auto'
              imageHeight='150px'
              margin='0 0 66px 0'
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
            />
          );
        })
      ) : (
        <HaveNothing
          it='관심친구가 '
          state='없습니다'
          ment='친구 보러가기'
          goThere='/adoption'
        />
      )}
    </Grid>
  );
};

export default MypageWishedList;
