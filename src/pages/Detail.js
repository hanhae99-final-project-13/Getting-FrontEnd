import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Greetings,
  Like,
  HorizonBtn,
  DogImg,
  BreedAndSex,
  WeightAndAge,
  AdoptionApply,
  LostLocation,
  OwnerType,
  Address,
  Tag,
  Url,
  Contact,
  Extra,
  PostEditModal,
} from './Detail/index';
import EditPost from '../components/EditPost';
import CommentList from '../components/CommentList';
import AdoptionNoticeModal from '../components/adoptionApplycation/AdoptionNoticeModal';
import { Grid } from '../elements/index';
import EduCheckAlert from '../components/adoptionApplycation/EduCheckAlert';
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../redux/modules/post';

const Detail = (props) => {
  const dispatch = useDispatch();
  const [eduCheck, setEduCheck] = useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [detailModal, setDetailModal] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const post = useSelector((state) => state.post?.detailPost);
  const user = useSelector((state) => state.user?.user.userInfo);
  const isLogin = useSelector((state) => state.user?.user.isLogin);
  const requestedPostList = useSelector(
    (state) => state.user?.user.userInfo.requestedPostList,
  );
  const token = localStorage.getItem('USER_TOKEN');
  const postId = props.match.params.id;

  const appliedPostId =
    requestedPostList !== []
      ? requestedPostList.filter((i) => {
          return i === parseInt(postId);
        })
      : null;

  // 필수지식 수료요청 모달

  const eduCheckopenModal = () => {
    setEduCheck(!eduCheck);
  };

  //입양신청시 주의하기 modal

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const onModal = () => {
    setDetailModal(!detailModal);
  };

  const detailDelete = () => {
    dispatch(postActions.deleteDetailToAxios(postId));
  };

  const editMode = () => {
    setEdit(true);
    setDetailModal(!detailModal);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(postActions.getDetailPostMW(postId));
  }, []);

  if (!post.post) {
    return <div style={{ marginTop: '80px' }}></div>;
  }
  if (token && !isLogin) {
    return <div></div>;
  }

  return (
    <React.Fragment>
      {edit ? (
        <EditPost data={post.post} postId={postId} setEdit={setEdit} />
      ) : (
        <Grid width='375px' margin='50px auto 180px auto'>
          <Grid width='auto' padding='0 35px'>
            <Grid display='flex' justifyContent='space-between'>
              <Greetings />
              <Like token={token} postId={postId} post={post} />
              <HorizonBtn user={user} post={post} onModal={onModal} />
            </Grid>
            <Grid margin='-10px 0 20px' color='#b6b1b0' fontSize='12px'>
              {post.post.nickname} · {post.post.createdAt.split('T')[0]} 등록
            </Grid>
            <DogImg post={post} />
          </Grid>

          <Grid
            width='283px'
            margin='0 auto'
            padding='15px 25px'
            boxShadow='1px 1px 2px 1px rgba(0, 0, 0, 0.06)'
            borderRadius='10px'
          >
            <BreedAndSex post={post} />
            <WeightAndAge post={post} />
            <LostLocation post={post} />
            <OwnerType post={post} />
            <Address post={post} />
            <Tag post={post} />
            <Url post={post} />
            <Contact post={post} />
            <Extra post={post} />
          </Grid>
          <AdoptionApply
            post={post}
            user={user}
            appliedPostId={appliedPostId}
            postId={postId}
            openModal={openModal}
            token={token}
            eduCheckopenModal={eduCheckopenModal}
          />

          <p style={{ padding: '0 30px', fontWeight: '800' }}>댓글</p>
          <CommentList postId={postId} />

          {/* 입양시 주의사항 모달 */}
          {modalOpen ? (
            <AdoptionNoticeModal
              postId={postId}
              closeModal={closeModal}
            ></AdoptionNoticeModal>
          ) : (
            ' '
          )}

          {/* 필수지식 먼저 숙지 모달 */}
          {eduCheck ? (
            <EduCheckAlert closeModal={eduCheckopenModal}></EduCheckAlert>
          ) : (
            ''
          )}

          {/* 글 수정 삭제 모달 */}
          {detailModal ? (
            <PostEditModal
              editMode={editMode}
              detailModal={detailModal}
              setDetailModal={setDetailModal}
              detailDelete={detailDelete}
            />
          ) : null}
        </Grid>
      )}
    </React.Fragment>
  );
};

export default Detail;
