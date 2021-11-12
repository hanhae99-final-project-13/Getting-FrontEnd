import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../redux/modules/post';
import { actionCreators as userAction } from '../redux/modules/user';
import EduCheckAlert from '../components/adoptionApplycation/EduCheckAlert';

import CommentList from '../components/CommentList';
import { Grid, Image, Text } from '../elements/index';
import Swal from 'sweetalert2';
import AdoptionNoticeModal from '../components/adoptionApplycation/AdoptionNoticeModal';
import EditPost from '../components/EditPost';

const Detail = (props) => {
  const dispatch = useDispatch();
  const { history } = props;
  const postId = props.match.params.id;
  const post = useSelector((state) => state.post?.detailPost);
  const user = useSelector((state) => state.user?.user.userInfo);
  const token = localStorage.getItem('USER_TOKEN');
  const isLogin = useSelector((state) => state.user?.user.isLogin);

  console.log(post);

  // 필수지식 수료요청 모달
  const [eduCheck, setEduCheck] = useState(false);
  const eduCheckopenModal = () => {
    setEduCheck(!eduCheck);
  };

  //입양신청시 주의하기 modal
  const [modalOpen, setModalOpen] = React.useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const [detailModal, setDetailModal] = React.useState(false);
  const onModal = () => {
    setDetailModal(!detailModal);
  };

  const detailDelete = () => {
    dispatch(postActions.deleteDetailToAxios(postId));
  };
  const [edit, setEdit] = React.useState(false);
  const editMode = () => {
    setEdit(true);
    setDetailModal(!detailModal);
  };
  React.useEffect(() => {
    dispatch(postActions.getDetailPostMW(postId));
  }, []);

  if (!post.post) {
    return <div style={{ marginTop: '80px' }}>로우딩주웅</div>;
  }
  if (token && !isLogin) {
    return <div>로딩중~</div>;
  }
  // console.log(!post.post.url.includes('http://'));
  return (
    <React.Fragment>
      {edit ? (
        <EditPost data={post.post} postId={postId} setEdit={setEdit} />
      ) : (
        <Grid width='375px' margin='0 auto 140px auto'>
          <Grid width='auto' padding='0 35px'>
            <Grid display='flex' justifyContent='space-between'>
              <p
                style={{
                  fontWeight: '800',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                저와 친구하실래요?
                <img
                  src={process.env.PUBLIC_URL + '/img/icon/smile.svg'}
                  style={{ width: '18px', height: '18px' }}
                />
              </p>

              {user && user.nickname === post.post.nickname ? (
                <button style={{ all: 'unset' }} onClick={onModal}>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      '/img/icon/setting_horizontal_icon.svg'
                    }
                    style={{ width: '12px', height: '12px' }}
                  />
                </button>
              ) : null}
            </Grid>
            <Grid
              height='0'
              position='relative'
              top='20px'
              right='10px'
              display='flex'
              flexDirection='row-reverse'
            >
              <button
                style={{ all: 'unset' }}
                onClick={() => {
                  // wish();
                  dispatch(postActions.heartToAxios({ postId: postId }));
                }}
              >
                {post.post.heart === true ? (
                  <img
                    src={
                      process.env.PUBLIC_URL + '/img/icon/heart_fill_icon.svg'
                    }
                    style={{ width: '25px', height: '25px' }}
                  />
                ) : (
                  <img
                    src={
                      process.env.PUBLIC_URL + '/img/icon/heart_line_icon.svg'
                    }
                    style={{ width: '25px', height: '25px' }}
                  />
                )}
              </button>
            </Grid>
            <Grid
              display='flex'
              overflowX='auto'
              justifyContent='space-between'
            >
              {post.post.img &&
                post.post.img.map((m, i) => {
                  return (
                    <>
                      <img
                        key={i}
                        style={{
                          margin: '0 10px 15px 0',
                          borderRadius: '10px',
                          width: '305px',
                          height: '200px',
                          objectFit: 'scale-down',
                        }}
                        src={m}
                      />
                    </>
                  );
                })}
            </Grid>
          </Grid>
          {post.post.tag !== '직접등록' ? null : user.eduList &&
            user.eduList[0].필수지식 === true ? (
            <Grid display='flex' justifyContent='center' alignItems='center'>
              <Grid
                position='fixed'
                margin='auto'
                bg='#FE7968'
                width='144px'
                height='40px'
                borderRadius='25px'
                display='flex'
                justifyContent='center'
                alignItems='center'
                bottom='90px'
                boxShadow='1px 1px 5px rgba(0, 0, 0, 0.5)'
                _onClick={() => {
                  openModal();
                  window.sessionStorage.clear();
                }}
              >
                <Text color='white'>입양 신청하기</Text>
              </Grid>
            </Grid>
          ) : (
            <Grid display='flex' justifyContent='center' alignItems='center'>
              <Grid
                position='fixed'
                margin='auto'
                bg='#FE7968'
                width='144px'
                height='40px'
                borderRadius='25px'
                display='flex'
                justifyContent='center'
                alignItems='center'
                bottom='90px'
                boxShadow='1px 1px 5px rgba(0, 0, 0, 0.5)'
                _onClick={() => {
                  eduCheckopenModal();
                }}
              >
                <Text color='white'>입양 신청하기</Text>
              </Grid>
            </Grid>
          )}
          <Grid
            width='283px'
            margin='0 auto'
            padding='15px 25px'
            boxShadow='1px 1px 2px 1px rgba(0, 0, 0, 0.06)'
            borderRadius='10px'
          >
            <Grid
              display='flex'
              margin='10px 0'
              padding='0 0 15px 0'
              borderBottom='1px solid rgba(225, 225, 225, 0.8)'
            >
              <Grid width='50%'>
                <span style={{ fontWeight: '800', color: '#6B6462' }}>
                  견종
                </span>
                <span style={{ margin: '0 5px 0 10px' }}>
                  {post.post.breed.split('[개]').reverse()[0]}
                </span>
              </Grid>

              <Grid width='50%'>
                <span style={{ fontWeight: '800', color: '#6B6462' }}>
                  성별
                </span>
                <span style={{ margin: '0 5px 0 10px' }}>{post.post.sex}</span>
              </Grid>
            </Grid>

            <Grid
              display='flex'
              margin='20px 0 0 0'
              padding='0 0 15px 0'
              borderBottom='1px solid rgba(225, 225, 225, 0.8)'
            >
              <Grid width='50%'>
                <span style={{ fontWeight: '800', color: '#6B6462' }}>
                  체중
                </span>
                <span style={{ margin: '0 5px 0 10px' }}>
                  {post.post.weight} kg
                </span>
              </Grid>

              <Grid width='50%'>
                <span style={{ fontWeight: '800', color: '#6B6462' }}>
                  나이
                </span>
                <span style={{ margin: '0 5px 0 10px' }}>
                  {post.post.age} 년생
                </span>
              </Grid>
            </Grid>

            <Grid
              display='flex'
              margin='20px 0 0 0'
              padding='0 0 15px 0'
              borderBottom='1px solid rgba(225, 225, 225, 0.8)'
            >
              <Grid>
                <span style={{ fontWeight: '800', color: '#6B6462' }}>
                  발견 장소
                </span>
                <span style={{ margin: '0 5px 0 10px' }}>
                  {post.post.lostLocation}
                </span>
              </Grid>
            </Grid>

            <Grid
              display='flex'
              margin='20px 0 0 0'
              padding='0 0 15px 0'
              borderBottom='1px solid rgba(225, 225, 225, 0.8)'
            >
              <Grid>
                <span style={{ fontWeight: '800', color: '#6B6462' }}>
                  보호 장소
                </span>
                <span style={{ margin: '0 5px 0 10px' }}>
                  {post.post.ownerType}
                </span>
              </Grid>
            </Grid>

            <Grid
              display='flex'
              margin='20px 0 0 0'
              padding='0 0 15px 0'
              borderBottom='1px solid rgba(225, 225, 225, 0.8)'
            >
              <Grid>
                <span style={{ fontWeight: '800', color: '#6B6462' }}>
                  주소
                </span>
                <span style={{ margin: '0 5px 0 10px' }}>
                  {post.post.address}
                </span>
              </Grid>
            </Grid>

            <Grid
              display='flex'
              margin='20px 0 0 0'
              padding='0 0 15px 0'
              borderBottom='1px solid rgba(225, 225, 225, 0.8)'
            >
              <Grid>
                <span style={{ fontWeight: '800', color: '#6B6462' }}>
                  출처
                </span>
                <span style={{ margin: '0 5px 0 10px' }}>{post.post.tag}</span>
              </Grid>
            </Grid>
            <Grid
              display='flex'
              margin='20px 0 0 0'
              padding='0 0 15px 0'
              borderBottom='1px solid rgba(225, 225, 225, 0.8)'
            >
              <Grid
                display='flex'
                justifyContent='space-between'
                alignItems='center'
              >
                <span style={{ fontWeight: '800', color: '#6B6462' }}>
                  웹사이트
                </span>
                <span style={{ margin: '0 5px 0 10px' }}>
                  {post.post.url.includes('http://') ? (
                    // http:// 가 주소에 있다면
                    post.post.url.includes('instagram.com') ? (
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '/img/GUIicon/instagram_icon.svg'
                        }
                        style={{ width: '30px' }}
                        onClick={() =>
                          window.open(`${post.post.url}`, '_blank')
                        }
                      />
                    ) : post.post.url.includes('facebook.com') ? (
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '/img/GUIicon/facebook_icon.svg'
                        }
                        style={{ width: '30px' }}
                        onClick={() =>
                          window.open(`${post.post.url}`, '_blank')
                        }
                      />
                    ) : post.post.url.includes('twitter.com') ? (
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '/img/GUIicon/twitter_icon.svg'
                        }
                        style={{ width: '30px' }}
                        onClick={() =>
                          window.open(`${post.post.url}`, '_blank')
                        }
                      />
                    ) : (
                      <img
                        src={process.env.PUBLIC_URL + '/img/icon/link_icon.svg'}
                        style={{ width: '20px' }}
                        onClick={() =>
                          window.open(`${post.post.url}`, '_blank')
                        }
                      />
                    )
                  ) : // http:// 가 주소에 없다면
                  post.post.url.includes('instagram.com') ? (
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/img/GUIicon/instagram_icon.svg'
                      }
                      style={{ width: '30px' }}
                      onClick={() =>
                        window.open(`http://${post.post.url}`, '_blank')
                      }
                    />
                  ) : post.post.url.includes('facebook.com') ? (
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/img/GUIicon/facebook_icon.svg'
                      }
                      style={{ width: '30px' }}
                      onClick={() =>
                        window.open(`http://${post.post.url}`, '_blank')
                      }
                    />
                  ) : post.post.url.includes('twitter.com') ? (
                    <img
                      src={
                        process.env.PUBLIC_URL + '/img/GUIicon/twitter_icon.svg'
                      }
                      style={{ width: '30px' }}
                      onClick={() =>
                        window.open(`http://${post.post.url}`, '_blank')
                      }
                    />
                  ) : (
                    <img
                      src={process.env.PUBLIC_URL + '/img/icon/link_icon.svg'}
                      style={{ width: '30px' }}
                      onClick={() =>
                        window.open(`http://${post.post.url}`, '_blank')
                      }
                    />
                  )}
                </span>
              </Grid>
            </Grid>

            <Grid
              display='flex'
              margin='20px 0 0 0'
              padding='0 0 15px 0'
              borderBottom='1px solid rgba(225, 225, 225, 0.8)'
            >
              <Grid>
                <span style={{ fontWeight: '800', color: '#6B6462' }}>
                  연락처
                </span>
                <span style={{ margin: '0 5px 0 10px' }}>
                  {post.post.phone}
                </span>
              </Grid>
            </Grid>

            <Grid display='flex' margin='5px 0 0 0'>
              <Grid>
                <p style={{ fontWeight: '800', color: '#6B6462' }}>특이사항</p>
                <span>{post.post.extra}</span>
              </Grid>
            </Grid>
          </Grid>

          <p style={{ padding: '0 46px', fontWeight: '800' }}>댓글</p>

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
            <div
              style={{
                backgroundColor: 'white',
                boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)',
                width: '375px',
                height: '200px',
                position: 'fixed',
                bottom: '0',
                display: 'flex',
                flexDirection: 'column',
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px',
                boxSizing: 'border-box',
                zIndex: '5',
              }}
            >
              <Grid display='flex' justifyContent='center' alignItems='center'>
                <button
                  style={{
                    all: 'unset',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#ff6666',
                    width: '100%',
                    height: '100%',
                  }}
                  onClick={() => {
                    editMode();
                    // history.push('/editpost');
                  }}
                >
                  수정
                </button>
              </Grid>
              <Grid display='flex' justifyContent='center' alignItems='center'>
                <button
                  style={{
                    all: 'unset',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#ff6666',
                    width: '100%',
                    height: '100%',
                    borderTop: 'solid 1px rgba(225, 225, 225, 0.8)',
                    borderBottom: 'solid 1px rgba(225, 225, 225, 0.8)',
                  }}
                  onClick={() => {
                    Swal.fire({
                      title: '정말 삭제하시겠습니까?',
                      showCancelButton: true,
                      confirmButtonColor: '#FE7968',
                      cancelButtonColor: '#d33',
                      confirmButtonText: '승인',
                      cancelButtonText: '취소',
                    }).then((result) => {
                      if (result.isConfirmed) {
                        detailDelete();
                      }
                      setDetailModal(!detailModal);
                    });
                  }}
                >
                  삭제
                </button>
              </Grid>
              <Grid display='flex' justifyContent='center' alignItems='center'>
                <button
                  style={{
                    all: 'unset',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#ff6666',
                    width: '100%',
                    height: '100%',
                  }}
                  onClick={() => {
                    setDetailModal(!detailModal);
                  }}
                >
                  취소
                </button>
              </Grid>
            </div>
          ) : null}
        </Grid>
      )}
    </React.Fragment>
  );
};

export default Detail;
