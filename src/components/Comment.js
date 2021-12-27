import React from 'react';
import CommentUpdate from './Comment/CommentUpdate';
import CommentEditModal from './Comment/CommentEditModal';
import { Grid, Image } from '../elements/';
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../redux/modules/post';

const Comment = (props) => {
  const { comment } = props;
  const dispatch = useDispatch();
  const [edit, setEdit] = React.useState(false);
  const [commentModal, setCommentModal] = React.useState(false);
  const userInfo = useSelector((state) => state.user.user.userInfo);

  const commentDelete = () => {
    dispatch(postActions.deleteCommentToAxios(comment.commentId));
    setCommentModal(!commentModal);
  };
  const editOn = () => {
    setEdit(!edit);
    setCommentModal(!commentModal);
  };
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
          <CommentUpdate comment={comment} setEdit={setEdit} />
        ) : (
          <Grid
            display='flex'
            alignItems='center'
            width='333px'
            height='70px'
            margin='0 auto'
            borderBottom='solid 1px rgba(225, 225, 225, 0.5)'
            borderRadius='10px'
          >
            <div
              style={{
                display: 'flex',
                width: '100%',
                height: '40px',
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
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '4px 0',
                  }}
                >
                  <div style={{ color: '#FE7968', fontSize: '12px' }}>
                    {comment.nickname}
                  </div>
                  <div
                    style={{
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    }}
                  >
                    <div style={{ color: '#B6B1B0', fontSize: '12px' }}>
                      {commentTime(createdAt)}
                    </div>
                    {comment.nickname === userInfo.nickname ? (
                      <div
                        style={{
                          position: 'relative',
                          top: '7px',
                          display: 'flex',
                          justifyContent: 'flex-end',
                          margin: '0 0 -30px 0',
                          cursor: 'pointer',
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

        {commentModal ? (
          <CommentEditModal
            editOn={editOn}
            commentDelete={commentDelete}
            commentModal={commentModal}
            setCommentModal={setCommentModal}
          />
        ) : null}
      </Grid>
    </React.Fragment>
  );
};
export default Comment;
