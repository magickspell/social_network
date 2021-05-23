import React from 'react';
import style from './My_Post.module.css';
import Post from './Post/Post.jsx'

const my_post = () => {

    let messagesData = [
        {id: 1, message: "hello", like: 3},
        {id: 1, message: "hi", like: 2},
        {id: 1, message: "leatherman", like: 0}
        ];

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
                <Post message={messagesData[0].message} like={messagesData[0].like}/>
                <Post message={messagesData[1].message} like={messagesData[1].like}/>
                <Post message={messagesData[2].message} like={messagesData[2].like}/>
            </div>
        </div>
    );
}

export default my_post;