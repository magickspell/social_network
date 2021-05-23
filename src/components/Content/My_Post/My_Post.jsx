import React from 'react';
import style from './My_Post.module.css';
import Post from './Post/Post.jsx'

const My_Post = (props) => {



    let post_messages = props.messages_post_Data.map(post_message => <Post message={post_message.message} like={post_message.like}/> )

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
                {post_messages}
            </div>
        </div>
    );
}

export default My_Post;