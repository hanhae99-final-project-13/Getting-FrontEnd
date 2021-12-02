import React from 'react';
import styled from 'styled-components';
import { ErrorAlert } from '../shared/Alerts';
import { Grid } from '../elements/';
import { useDispatch } from 'react-redux';
import { postActions } from '../redux/modules/post';

const CommentWrite = (props) => {
  const dispatch = useDispatch();
  const [comment, setComment] = React.useState();
  const token = localStorage.getItem('USER_TOKEN');
  const postId = props.postId;

  if (props.comment) {
  }
  const editSubmit = () => {
    const commentId = props.comment.commentId;
    if (!token) {
      ErrorAlert('로그인 후 이용해주세요');
    } else if (comment === '') {
      ErrorAlert('댓글을 입력해주세요!');
    } else {
      dispatch(
        postActions.updateCommentToAxios(commentId, { comment: comment }),
      );
      props.setEdit(false);
    }
  };

  const commentSubmit = () => {
    if (!token) {
      ErrorAlert('로그인 후 이용해주세요');
    } else if (comment === '') {
      ErrorAlert('댓글을 입력해주세요!');
    } else {
      dispatch(
        postActions.addCommentToAxios({ postId: postId, comment: comment }),
      );
      setComment('');
    }
  };
  const enterKey = (e) => {
    if (e.key === 'Enter') {
      if (props.comment) {
        editSubmit(e);
      } else {
        commentSubmit(e);
      }
    }
  };
  React.useEffect(() => {
    if (props.comment) {
      setComment(props.comment.comment);
    }
    return;
  }, [props.comment]);
  return (
    <React.Fragment>
      {props.comment ? (
        <Grid
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          width='333px'
          height='40px'
          margin='0 auto 10px auto'
          bg='white'
          border='1.5px solid rgb(235, 235, 235)'
          borderRadius='10px'
        >
          <CommentBox
            value={comment || ''}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            onKeyUp={enterKey}
          />

          <button
            style={{
              marginRight: '6px',
              padding: '4px 10px',
              color: 'white',
              backgroundColor: '#FE7968',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
            onClick={editSubmit}
          >
            입력
          </button>
        </Grid>
      ) : (
        <Grid
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          width='333px'
          height='40px'
          margin='0 auto 10px auto'
          bg='white'
          border='1.5px solid rgb(235, 235, 235)'
          borderRadius='10px'
        >
          <CommentBox
            value={comment || ''}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            onKeyUp={enterKey}
          />
          <button
            style={{
              marginRight: '6px',
              padding: '4px 10px',
              color: 'white',
              backgroundColor: '#FE7968',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
            onClick={commentSubmit}
            onKeyUp={enterKey}
          >
            입력
          </button>
        </Grid>
      )}
    </React.Fragment>
  );
};

const CommentBox = styled.input`
  display: flex;
  align-items: center;
  width: 250px;
  height: 30px;
  margin: auto;
  background-color: white;
  border: none;
  border-radius: 10px;
  &:focus {
    border: none;
    outline: none;
  }
`;

export default CommentWrite;
