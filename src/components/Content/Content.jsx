import React from 'react';
import style from './Content.module.css';
import My_Post from './My_Post/My_Post.jsx';


const Content = () => {
  return (
    <div className={style.content}>Main content
    <div>ava + description</div>
    <My_Post />
    </div>
  );
}

export default Content;