import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Swal from 'sweetalert2';
import EditPost from '../components/EditPost';
import CommentList from '../components/CommentList';
import AdoptionNoticeModal from '../components/adoptionApplycation/AdoptionNoticeModal';
import { ErrorAlert } from '../shared/Alerts';
import { Grid, Text } from '../elements/index';
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
              <p
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: '800',
                }}
              >
                저와 친구하실래요?
                <img
                  src={process.env.PUBLIC_URL + '/img/icon/smile.svg'}
                  style={{ width: '18px', height: '18px' }}
                />
              </p>
              <Grid
                position='relative'
                top='60px'
                left='60px'
                zIndex='2'
                display='flex'
                flexDirection='row-reverse'
                width='30px'
                height='auto'
              >
                <button
                  style={{ all: 'unset', cursor: 'pointer' }}
                  onClick={() => {
                    if (!token) {
                      ErrorAlert('로그인 후 이용해주세요');
                    } else {
                      dispatch(postActions.heartToAxios({ postId: postId }));
                    }
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
              {user && user.nickname === post.post.nickname ? (
                <button
                  style={{ all: 'unset', cursor: 'pointer' }}
                  onClick={onModal}
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      '/img/icon/setting_horizontal_icon.svg'
                    }
                    style={{ width: '12px', height: '12px' }}
                  />
                </button>
              ) : (
                <button
                  style={{ all: 'unset', width: '12px' }}
                  onClick={onModal}
                ></button>
              )}
            </Grid>
            <Grid margin='-10px 0 20px' color='#b6b1b0' fontSize='12px'>
              {post.post.nickname} · {post.post.createdAt.split('T')[0]} 등록
            </Grid>
            <Grid overflowX='hidden'>
              <StyledSlider {...settings}>
                {post.post.img === null
                  ? null
                  : post.post.img.map((m, i) => {
                      return (
                        <>
                          <img
                            key={i}
                            style={{
                              width: '305px',
                              height: '305px',
                              margin: '0 10px 15px 0',
                              borderRadius: '10px',
                              objectFit: 'scale-down',
                            }}
                            src={m}
                          />
                        </>
                      );
                    })}
              </StyledSlider>
            </Grid>
          </Grid>
          {post.post.isAdopted !== 'ABANDONED' ? null : user.eduList ===
            null ? null : user &&
            user.nickname === post.post.nickname ? null : post.post.tag !==
            '직접등록' ? null : user.eduList[0] &&
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
                _onClick={() => {
                  eduCheckopenModal();
                }}
              >
                <Text color='white'>입양 신청하기</Text>
              </Grid>
            </Grid>
          ) : null}
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
                <span
                  style={{
                    color: '#6B6462',
                    fontSize: '14px',
                    fontWeight: '800',
                  }}
                >
                  견종
                </span>
                <span style={{ margin: '0 5px 0 10px' }}>
                  {post.post.breed.split('[개]').reverse()[0]}
                </span>
              </Grid>

              <Grid width='50%'>
                <span
                  style={{
                    color: '#6B6462',
                    fontSize: '14px',
                    fontWeight: '800',
                  }}
                >
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
                <span
                  style={{
                    color: '#6B6462',
                    fontSize: '14px',
                    fontWeight: '800',
                  }}
                >
                  체중
                </span>
                <span style={{ margin: '0 5px 0 10px' }}>
                  {post.post.weight} kg
                </span>
              </Grid>

              <Grid width='50%'>
                <span
                  style={{
                    color: '#6B6462',
                    fontSize: '14px',
                    fontWeight: '800',
                  }}
                >
                  나이
                </span>
                <span style={{ margin: '0 5px 0 10px' }}>
                  {post.post.age} 살
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
                <span
                  style={{
                    color: '#6B6462',
                    fontSize: '14px',
                    fontWeight: '800',
                  }}
                >
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
                <span
                  style={{
                    color: '#6B6462',
                    fontSize: '14px',
                    fontWeight: '800',
                  }}
                >
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
                <span
                  style={{
                    color: '#6B6462',
                    fontSize: '14px',
                    fontWeight: '800',
                  }}
                >
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
                <span
                  style={{
                    color: '#6B6462',
                    fontSize: '14px',
                    fontWeight: '800',
                  }}
                >
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
                <span
                  style={{
                    color: '#6B6462',
                    fontSize: '14px',
                    fontWeight: '800',
                  }}
                >
                  웹사이트
                </span>
                <span style={{ margin: '0 5px 0 10px', cursor: 'pointer' }}>
                  {post.post.url === null || post.post.url === '' ? (
                    '없음'
                  ) : post.post.url.includes('http') ? (
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
                  ) : post.post.url.includes('instagram.com') ? (
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
                  ) : post.post.url === null ? (
                    '없음'
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
                <span
                  style={{
                    color: '#6B6462',
                    fontSize: '14px',
                    fontWeight: '800',
                  }}
                >
                  연락처
                </span>
                <span style={{ margin: '0 5px 0 10px' }}>
                  {post.post.phone}
                </span>
              </Grid>
            </Grid>

            <Grid display='flex' margin='5px 0 0 0'>
              <Grid>
                <p
                  style={{
                    color: '#6B6462',
                    fontSize: '14px',
                    fontWeight: '800',
                  }}
                >
                  특이사항
                </p>
                <span style={{ whiteSpace: 'pre-line' }}>
                  {post.post.extra}
                </span>
              </Grid>
            </Grid>
          </Grid>

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
            <div
              style={{
                position: 'fixed',
                left: 0,
                right: 0,
                bottom: '0',
                zIndex: '5',
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '414px',
                height: '200px',
                margin: '0 auto',
                backgroundColor: 'white',
                boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)',
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px',
                boxSizing: 'border-box',
              }}
            >
              <Grid display='flex' justifyContent='center' alignItems='center'>
                <button
                  style={{
                    all: 'unset',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    color: '#ff6666',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    editMode();
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
                    width: '100%',
                    height: '100%',
                    color: '#ff6666',
                    borderTop: 'solid 1px rgba(225, 225, 225, 0.8)',
                    borderBottom: 'solid 1px rgba(225, 225, 225, 0.8)',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    Swal.fire({
                      title: '정말 삭제하시겠습니까?',
                      showCancelButton: true,
                      confirmButtonColor: '#FE7968',
                      cancelButtonColor: '#d33',
                      confirmButtonText: '승인',
                      cancelButtonText: '취소',
                      customClass: 'swal-font swal-borderRadius',
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
                    width: '100%',
                    height: '100%',
                    color: '#ff6666',
                    cursor: 'pointer',
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
const settings = {
  dots: true, // 슬라이드 밑에 점 보이게
  infinite: false, // 무한으로 반복
  arrows: false, // 화살표 안보임
  speed: 500,
  autoplay: false,
  autoplaySpeed: 500, // 넘어가는 속도
  slidesToShow: 1, // 1장씩 보이게
  slidesToScroll: 1, // 1장씩 뒤로 넘어가게
  centerMode: true,
  centerPadding: '0px', // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
};
const StyledSlider = styled(Slider)`
  .slick-list {
    width: 375px;
    margin: 0 auto;
  }
  .slick-dots li {
    margin: 0 0rem;
  }
  .slick-dots {
    width: 305px;
    bottom: 20px;
    .slick-active {
      button::before {
        color: #ffbe5b;
      }
    }
    button::before {
      color: #b6b1b0;
    }
  }
`;

export default Detail;
