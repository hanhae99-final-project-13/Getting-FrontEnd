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
    console.log('A');
    dispatch(
      commentCreators.updateComment({
        commentId: props.comment.commentId,
        comment,
      }),
    );
    props.setEdit(false);
  };
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const commentId = Date.now();
  const commentSubmit = () => {
    dispatch(
      commentCreators.addComment(/* commentId, */ { commentId, comment }),
    );
    setComment('');
  };
  return (
    <React.Fragment>
      <Grid>
        <CommentBox
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        {props.comment ? (
          <button onClick={editSubmit}>submit</button>
        ) : (
          <button onClick={commentSubmit}>submit</button>
        )}
      </Grid>
    </React.Fragment>
  );
};

const CommentBox = styled.input``;

export default CommentWrite;
