import React from 'react';
import style from './My_Post.module.css';
import Post from './Post/Post.jsx'

const my_post = () => {
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea>insert post</textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                <Post message='hello' like='3'/>
                <Post message='hi' like='1'/>
                <Post message='fuck you leatherman' like='0'/>
            </div>
        </div>
    );
}

export default my_post;