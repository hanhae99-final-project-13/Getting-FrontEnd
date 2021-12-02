import React from 'react';
import Comment from './Comment';
import CommentWrite from './CommentWrite';
import { useSelector } from 'react-redux';

const CommentList = (props) => {
  const { postId } = props;
  const commentList = useSelector((state) => state.post.detailPost.commentList);

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
