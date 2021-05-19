import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.posts}>
      <br />
      <img src='' />
      { props.message }
      <br />
      <span>like - { props.like }</span>
    </div>
  );
}

export default Post;