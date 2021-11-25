import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Grid } from '../elements/';
import { postActions } from '../redux/modules/post';
import { ErrorAlert } from '../shared/Alerts';
const CommentWrite = (props) => {
  const token = localStorage.getItem('USER_TOKEN');
  // console.log('코멘트', props);
  const postId = props.postId;
  if (props.comment) {
    console.log('수정버튼시 활성화', props.comment);
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
  const dispatch = useDispatch();
  const [comment, setComment] = useState();
  // 임시로 id값 지정
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
          bg='white'
          width='333px'
          height='40px'
          border='1.5px solid rgb(235, 235, 235)'
          borderRadius='10px'
          margin='0 auto 10px auto'
          display='flex'
          alignItems='center'
          justifyContent='space-between'
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
              border: 'none',
              color: 'white',
              backgroundColor: '#FE7968',
              borderRadius: '10px',
            }}
            onClick={editSubmit}
          >
            입력
          </button>
        </Grid>
      ) : (
        <Grid
          bg='white'
          width='333px'
          height='40px'
          border='1.5px solid rgb(235, 235, 235)'
          borderRadius='10px'
          margin='0 auto 10px auto'
          display='flex'
          alignItems='center'
          justifyContent='space-between'
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
              border: 'none',
              color: 'white',
              backgroundColor: '#FE7968',
              borderRadius: '10px',
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
  background-color: white;
  width: 250px;
  height: 35px;
  margin: auto;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  &:focus {
    border: none;
    outline: none;
  }
`;

export default CommentWrite;
