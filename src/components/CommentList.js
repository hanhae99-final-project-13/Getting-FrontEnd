import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Grid, Image } from '../elements/';
import Comment from './Comment';
import CommentWrite from './CommentWrite';

const CommentList = () => {
  const commentList = useSelector((state) => state.comment.commentList);
  return (
    <React.Fragment>
      <CommentWrite />
      {commentList.map((c) => {
        return <Comment key={c.commentId} comment={c} />;
      })}
    </React.Fragment>
  );
};

export default CommentList;
