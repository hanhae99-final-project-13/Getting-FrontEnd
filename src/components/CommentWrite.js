import React, { useState } from 'react';
import { history } from '../redux/configureStore';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Grid, Image } from '../elements/';
import { commentCreators } from '../redux/modules/comment';
const CommentWrite = (props) => {
  console.log(props);
  if (props.comment) {
    console.log('수정버튼시 활성화', props.comment.commentId);
  }
  const editSubmit = () => {
    dispatch(
      commentCreators.updateCommentToAxios({
        commentId: props.comment.commentId,
        comment,
      }),
    );
    props.setEdit(false);
  };
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  // 임시로 id값 지정
  const commentId = Date.now();
  const postId = Date.now();
  const commentSubmit = () => {
    dispatch(
      commentCreators.addComment({
        postId: postId,
        comment: comment,
      }),
    );
    setComment('');
  };
  return (
    <React.Fragment>
      <Grid
        bg='rgba(235, 235, 235)'
        padding='0 8px'
        width='283px'
        height='40px'
        borderRadius='10px'
        margin=' auto'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
      >
        <CommentBox
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        {props.comment ? (
          <button
            style={{
              marginRight: '10px',
              padding: '4px 10px',
              border: 'none',
              color: 'white',
              backgroundColor: '#3FCC66',
              borderRadius: '10px',
            }}
            onClick={editSubmit}
          >
            입력
          </button>
        ) : (
          <button
            style={{
              marginRight: '10px',
              padding: '4px 10px',
              border: 'none',
              color: 'white',
              backgroundColor: '#3FCC66',
              borderRadius: '10px',
            }}
            onClick={commentSubmit}
          >
            입력
          </button>
        )}
      </Grid>
    </React.Fragment>
  );
};

const CommentBox = styled.input`
  background-color: rgba(235, 235, 235);
  width: 200px;
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
