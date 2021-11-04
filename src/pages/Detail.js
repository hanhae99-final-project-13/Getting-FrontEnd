import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import CommentList from '../components/CommentList';
import { Grid, Image, Text } from '../elements/index';
import AdoptionModal from '../components/adoptionApplycation/AdoptionModal';
import { postActions } from '../redux/modules/post';

const Detail = (props) => {
  const dispatch = useDispatch();
  const postId = props.match.params.id;
  console.log(postId);
  const post = useSelector((state) => state.post?.detailPost);
  console.log(post);
  //입양신청하기 modal
  const [modalOpen, setModalOpen] = React.useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  React.useEffect(() => {
    dispatch(postActions.getDetailPostMW(postId));
  }, []);

  if (!post.post) {
    return <div style={{ marginTop: '80px' }}>로우딩주웅</div>;
  }

  return (
    <React.Fragment>
      <Grid width='375px' margin='0 auto'>
        <Grid width='auto' padding='0 46px'>
          <p>저와 친구하실래요?😁</p>
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '80px',
                height: '30px',
                borderRadius: '15px',
                backgroundColor: 'white',
                top: '40px',
                left: '50px',
                marginBottom: '5px',
              }}>
              {post.post.ownerType}
            </div>
            <img
              style={{
                marginBottom: '15px',
                borderRadius: '10px',
                width: '283px',
                height: '145px',
                objectFit: 'cover',
              }}
              src={post.post.img}
            />
          </div>
        </Grid>
        <Grid
          width='280px'
          margin='0 auto'
          padding='15px 25px'
          boxShadow='1px 1px 2px 1px rgba(0, 0, 0, 0.06)'
          borderRadius='10px'>
          <Grid
            display='flex'
            margin='10px 0'
            padding='0 0 15px 0'
            borderBottom='1px solid rgba(225, 225, 225, 0.8)'>
            <Grid width='50%'>
              견종
              <span style={{ margin: '0 5px 0 10px' }}>
                {post.post.breed.split('[개]').reverse()[0]}
              </span>
            </Grid>

            <Grid width='50%'>
              성별
              <span style={{ margin: '0 5px 0 10px' }}>{post.post.sex}</span>
            </Grid>
          </Grid>

          <Grid
            display='flex'
            margin='20px 0 0 0'
            padding='0 0 15px 0'
            borderBottom='1px solid rgba(225, 225, 225, 0.8)'>
            <Grid width='50%'>
              체중
              <span style={{ margin: '0 5px 0 10px' }}>
                {post.post.weight} kg
              </span>
            </Grid>

            <Grid width='50%'>
              나이
              <span style={{ margin: '0 5px 0 10px' }}>
                {post.post.age} 년생
              </span>
            </Grid>
          </Grid>

          <Grid
            display='flex'
            margin='20px 0 0 0'
            padding='0 0 15px 0'
            borderBottom='1px solid rgba(225, 225, 225, 0.8)'>
            <Grid>
              발견 장소
              <span style={{ margin: '0 5px 0 10px' }}>
                {post.post.lostLocation}
              </span>
            </Grid>
          </Grid>

          <Grid
            display='flex'
            margin='20px 0 0 0'
            padding='0 0 15px 0'
            borderBottom='1px solid rgba(225, 225, 225, 0.8)'>
            <Grid>
              보호 장소
              <span style={{ margin: '0 5px 0 10px' }}>
                {post.post.ownerType}
              </span>
            </Grid>
          </Grid>

          <Grid
            display='flex'
            margin='20px 0 0 0'
            padding='0 0 15px 0'
            borderBottom='1px solid rgba(225, 225, 225, 0.8)'>
            <Grid>
              주소
              <span style={{ margin: '0 5px 0 10px' }}>
                갱기도 수원시 뭐시깽이~
              </span>
            </Grid>
          </Grid>

          <Grid
            display='flex'
            margin='20px 0 0 0'
            padding='0 0 15px 0'
            borderBottom='1px solid rgba(225, 225, 225, 0.8)'>
            <Grid>
              SNS
              <span style={{ margin: '0 5px 0 10px' }}>
                트윗 페북 인스타 마크
              </span>
            </Grid>
          </Grid>

          <Grid display='flex' margin='5px 0 0 0'>
            <Grid>
              <p>특이사항</p>
              <span>
                겁이 엄청 많은 친구라 아직도 집에서 꼬리 내리고 다니는데 요즘엔
                무서워하면서 옆에 붙어다니고 신나면 빙글빙글 돌기도하고 그럽니다
                부르면 귀찮다는듯 터벅터벅 걸어와서 쳐다봐서 너무 귀여워요!
              </span>
            </Grid>
          </Grid>
        </Grid>

        <Grid display='flex' justifyContent='center' alignItems='center'>
          <Grid
            position='fixed'
            margin='auto'
            bg='#FF6666'
            width='144px'
            height='50px'
            borderRadius='25px'
            display='flex'
            justifyContent='center'
            alignItems='center'
            bottom='30px'
            boxShadow='1px 1px 5px rgba(0, 0, 0, 0.5)'
            _onClick={openModal}>
            <Text color='white'>입양 신청하기</Text>
          </Grid>
        </Grid>

        <p style={{ padding: '0 46px' }}>댓글😁</p>

        <CommentList />

        {modalOpen ? (
          <AdoptionModal
            postId={postId}
            closeModal={closeModal}></AdoptionModal>
        ) : (
          ' '
        )}
      </Grid>
    </React.Fragment>
  );
};

export default Detail;
