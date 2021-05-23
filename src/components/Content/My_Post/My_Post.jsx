import React from 'react';
import style from './My_Post.module.css';
import Post from './Post/Post.jsx'

const My_Post = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        /*debugger;*/
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    let post_messages = props.messages_post_Data.map(post_message => <Post message={post_message.message}
                                                                           like={post_message.like}/>)

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}>insert post</textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {post_messages}
            </div>
        </div>
    );
}

export default My_Post;