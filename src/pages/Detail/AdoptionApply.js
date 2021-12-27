import React from 'react';
import { ErrorAlert } from '../../shared/Alerts';
import { Grid, Text } from '../../elements/index';
const AdoptionApply = ({
  post,
  user,
  appliedPostId,
  postId,
  openModal,
  token,
  eduCheckopenModal,
}) => {
  return (
    <>
      {post.post.isAdopted !== 'ABANDONED' ? null : user.eduList ===
        null ? null : user && user.nickname === post.post.nickname ? null : post
          .post.tag !== '직접등록' ? null : user.eduList[0] &&
        user.eduList[0].필수지식 === true ? (
        <Grid display='flex' justifyContent='center' alignItems='center'>
          <Grid
            position='fixed'
            bottom='130px'
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='144px'
            height='40px'
            margin='auto'
            bg='#FE7968'
            borderRadius='25px'
            boxShadow='1px 1px 5px rgba(0, 0, 0, 0.5)'
            cusor='pointer'
            _onClick={() => {
              if (appliedPostId[0] === parseInt(postId)) {
                ErrorAlert('이미 입양신청한 게시글입니다');
                return;
              }
              openModal();
              window.sessionStorage.clear();
            }}
          >
            <Text color='white'>입양 신청하기</Text>
          </Grid>
        </Grid>
      ) : token ? (
        <Grid display='flex' justifyContent='center' alignItems='center'>
          <Grid
            position='fixed'
            bottom='130px'
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='144px'
            height='40px'
            margin='auto'
            bg='#FE7968'
            borderRadius='25px'
            boxShadow='1px 1px 5px rgba(0, 0, 0, 0.5)'
            cusor='pointer'
            _onClick={() => {
              eduCheckopenModal();
            }}
          >
            <Text color='white'>입양 신청하기</Text>
          </Grid>
        </Grid>
      ) : null}
    </>
  );
};

export default AdoptionApply;
