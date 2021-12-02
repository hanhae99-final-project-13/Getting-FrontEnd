import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Card, Carousel2 } from '../';
import { Grid, Text } from '../../elements';
import { history } from '../../redux/configureStore';

const MainAdoptionCardList = (props) => {
  const mainPostList = useSelector((state) => state.post.mainPostList);
  const goAdoptionPage = () => {
    history.push('/adoption');
  };

  return (
    <Grid margin='0 0 40px 0'>
      <Grid
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        margin='0 0 20px 0'
        height='auto'
        zIndex='2'
      >
        <Grid display='flex' width='auto'>
          <Text
            margin='0 8px 0 0'
            size='18px'
            weight='800'
            _onClick={goAdoptionPage}
            cursor='pointer'
          >
            저랑 <ElSpan>가족 </ElSpan>하실래요?
          </Text>
          <img src={process.env.PUBLIC_URL + '/img/icon/eye_heart.svg'} />
        </Grid>

        <Text
          margin='0'
          size='14px'
          weight='800'
          _onClick={() => {
            history.push('/adoption');
          }}
          cursor='pointer'
        >
          더보기+
        </Text>
      </Grid>
      <Carousel2 width={mainPostList.length}>
        {mainPostList.map((p) => {
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
              img={p.img.split(' ##')[0]}
              postId={p.postId}
              isAdopted={p.isAdopted}
              margin='0 20px 0 0'
              boxShadow='4px 4px 12px rgba(254, 121, 104, 0.1)'
            />
          );
        })}
      </Carousel2>
    </Grid>
  );
};

const ElSpan = styled.span`
  color: #fe7968;
  font-size: 18px;
  font-weight: 800;
`;

export default MainAdoptionCardList;
