import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Image } from '../elements/';
import { postActions } from '../redux/modules/post';
import CommentWrite from './CommentWrite';

const Comment = (props) => {
  const { comment } = props;
  console.log('코멘트 하나의 정보', comment);

  const userInfo = useSelector((state) => state.user.user.userInfo);
  console.log('유저인포', userInfo);
  const dispatch = useDispatch();

  const commentDelete = () => {
    console.log(comment.commentId);
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
    // console.log(commentModal);
    setCommentModal(!commentModal);
  };
  return (
    <React.Fragment>
      <Grid boxSizing='border-box'>
        {(comment.commentId ? edit : false) ? (
          <React.Fragment>
            <Grid
              height='70px'
              width='283px'
              margin='0 auto 10px'
              borderBottom='solid 1px rgba(225, 225, 225, 0.5)'
              borderRadius='10px'
              // display='flex'
              alignItems='center'
            >
              <div
                style={{
                  width: '100%',
                  height: '40px',
                  display: 'flex',
                  padding: '5px 0',
                  alignItems: 'center',
                }}
              >
                <Image src={userInfo ? userInfo.userImgUrl : ''} />
                <div style={{ fontSize: '12px' }}>{comment.nickname}</div>
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
            width='auto'
            padding='0 46px'
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
              <Image src={userInfo ? userInfo.userImgUrl : ''} />
              <Grid margin='0 0 0 5px'>
                <div
                  style={{
                    margin: '4px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ fontSize: '12px' }}>{comment.nickname}</div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                    }}
                  >
                    <div style={{ fontSize: '12px' }}>
                      {comment.createdAt.split('.')[0]}
                    </div>
                    {comment.nickname === userInfo.nickname ? (
                      <div
                        style={{ fontSize: '12px', margin: '0 0 0 8px' }}
                        onClick={onModal}
                      >
                        💛
                      </div>
                    ) : null}
                  </div>
                </div>
                <div
                  style={{
                    width: '230px',
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
              width: '375px',
              height: '200px',
              position: 'fixed',
              bottom: '0',
              display: 'flex',
              flexDirection: 'column',
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
                  color: '#ff6666',
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
                  color: '#ff6666',
                  width: '100%',
                  height: '100%',
                  borderTop: 'solid 1px rgba(225, 225, 225, 0.8)',
                  borderBottom: 'solid 1px rgba(225, 225, 225, 0.8)',
                }}
                onClick={() => {
                  if (window.confirm('정말 삭제하시겠습니까?')) {
                    commentDelete();
                  }
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
