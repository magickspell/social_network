import React from 'react';
import style from './My_Post.module.css';
import Post from './Post/Post.jsx'

const my_post = () => {
  return (
    <div className={style.item}>My posts
      <br />
      <textarea>insert post</textarea>
      <br />
      <button>Add post</button>
      <Post message='hello' like='3' />
      <Post message='hi' like='1'/>
      <Post message='fuck you leatherman' like='0'/>
    </div>
  );
}

export default my_post;