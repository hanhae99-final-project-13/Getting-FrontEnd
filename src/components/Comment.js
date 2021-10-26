import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Grid, Image } from '../elements/';
import { commentCreators } from '../redux/modules/comment';
import CommentWrite from './CommentWrite';

const Comment = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const cmt = props.comment;
  console.log('아이디확인,', cmt.commentId);
  const commentDelete = () => {
    dispatch(commentCreators.deleteComment(cmt.commentId));
  };
  const [edit, setEdit] = useState(false);
  const editOn = () => {
    setEdit(!edit);
  };

  return (
    <React.Fragment>
      <Grid padding='20px'>
        {(cmt.commentId ? edit : false) ? (
          <React.Fragment>
            <Image />
            <CommentWrite comment={cmt} setEdit={setEdit} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Image />
            {cmt.comment}
            <button onClick={editOn}>수정</button>
            <button onClick={commentDelete}>삭제</button>
          </React.Fragment>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default Comment;
