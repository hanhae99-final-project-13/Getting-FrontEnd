import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Grid, Image } from '../elements/';
import Comment from './Comment';
import CommentWrite from './CommentWrite';

const CommentList = (props) => {
  const { postId } = props;
  const commentList = useSelector((state) => state.post.detailPost.commentList);
  console.log(commentList);
  return (
    <React.Fragment>
      <CommentWrite postId={postId} />
      {commentList.map((c, i) => {
        return <Comment key={i} comment={c} />;
      })}
    </React.Fragment>
  );
};

export default CommentList;
