import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Image } from '../elements/';
import { postActions } from '../redux/modules/post';
import CommentWrite from './CommentWrite';
import Swal from 'sweetalert2';
const Comment = (props) => {
  const { comment } = props;

  const userInfo = useSelector((state) => state.user.user.userInfo);

  const dispatch = useDispatch();

  const commentDelete = () => {
    dispatch(postActions.deleteCommentToAxios(comment.commentId));

    setCommentModal(!commentModal);
  };
  const [edit, setEdit] = React.useState(false);
  const editOn = () => {
    setEdit(!edit);
    setCommentModal(!commentModal);
  };
  const [commentModal, setCommentModal] = React.useState(false);
  const onModal = () => {
    setCommentModal(!commentModal);
  };

  const createdAt = new Date(comment.createdAt);
  const commentTime = (createdAt) => {
    const milliSeconds = new Date() - createdAt;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;

    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;

    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;

    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;

    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;

    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;

    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  };
  return (
    <React.Fragment>
      <Grid boxSizing='border-box'>
        {(comment.commentId ? edit : false) ? (
          <React.Fragment>
            <Grid
              height='70px'
              width='333px'
              margin='0 auto 10px'
              borderBottom='solid 1px rgba(225, 225, 225, 0.5)'
              borderRadius='10px'
              alignItems='center'
            >
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  height: '40px',
                  padding: '5px 0',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Image
                    src={
                      comment ? (
                        comment.userImgUrl
                      ) : (
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            '/GUIicon/profile_defalut_icon.svg'
                          }
                        />
                      )
                    }
                  />
                  <div
                    style={{
                      display: 'flex',
                      fontSize: '12px',
                      color: '#FE7968',
                    }}
                  >
                    {comment.nickname}
                  </div>
                </div>
                <img
                  src={
                    process.env.PUBLIC_URL + '/img/icon/cancel_filled_icon.svg'
                  }
                  style={{ width: '18px', height: '18px' }}
                  onClick={() => {
                    setEdit(false);
                  }}
                />
              </div>

              <CommentWrite
                key={comment.commentId}
                comment={comment}
                setEdit={setEdit}
              />
            </Grid>
          </React.Fragment>
        ) : (
          <Grid
            height='70px'
            width='333px'
            margin='0 auto'
            borderBottom='solid 1px rgba(225, 225, 225, 0.5)'
            borderRadius='10px'
            display='flex'
            alignItems='center'
          >
            <div
              style={{
                width: '100%',
                height: '40px',
                display: 'flex',
              }}
            >
              <Image
                src={
                  comment ? (
                    comment.userImgUrl
                  ) : (
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/GUIicon/profile_defalut_icon.svg'
                      }
                    />
                  )
                }
              />
              <Grid margin='0 0 0 5px'>
                <div
                  style={{
                    margin: '4px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ fontSize: '12px', color: '#FE7968' }}>
                    {comment.nickname}
                  </div>
                  <div
                    style={{
                      alignItems: 'center',
                      justifyContent: 'space-around',
                    }}
                  >
                    <div style={{ fontSize: '12px', color: '#B6B1B0' }}>
                      {commentTime(createdAt)}
                    </div>
                    {comment.nickname === userInfo.nickname ? (
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          position: 'relative',
                          top: '7px',
                          margin: '0 0 -30px 0',
                        }}
                      >
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            '/img/icon/setting_vertical_icon.svg'
                          }
                          style={{ width: '10px', height: '10px' }}
                          onClick={onModal}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
                <div
                  style={{
                    width: '250px',
                    paddingBottom: '8px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {comment.comment}
                </div>
              </Grid>
            </div>
          </Grid>
        )}
        {/* 모달 */}
        {commentModal ? (
          <div
            style={{
              backgroundColor: 'white',
              boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)',
              maxWidth: '414px',
              height: '200px',
              position: 'fixed',
              bottom: '0',
              display: 'flex',
              flexDirection: 'column',
              borderTopLeftRadius: '15px',
              borderTopRightRadius: '15px',
              boxSizing: 'border-box',
              zIndex: '10',
              margin: '0 auto',
              left: 0,
              right: 0,
            }}
          >
            <Grid display='flex' justifyContent='center' alignItems='center'>
              <button
                style={{
                  all: 'unset',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#FE7968',
                  width: '100%',
                  height: '100%',
                }}
                onClick={editOn}
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
                  color: '#FE7968',
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
                    customClass: 'swal-font swal-borderRadius',
                  }).then((result) => {
                    if (result.isConfirmed) {
                      commentDelete();
                    }
                    setCommentModal(!commentModal);
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
                  color: '#FE7968',
                  width: '100%',
                  height: '100%',
                }}
                onClick={() => {
                  setCommentModal(!commentModal);
                }}
              >
                취소
              </button>
            </Grid>
          </div>
        ) : null}
      </Grid>
    </React.Fragment>
  );
};

export default Comment;
