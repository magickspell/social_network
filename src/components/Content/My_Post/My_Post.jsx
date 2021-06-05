import React from 'react';
import style from './My_Post.module.css';
import Post from './Post/Post.jsx'

const My_Post = (props) => {
    let postsElements = props.messages_post_Data.map(p => <Post message={p.message} like={p.like}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }

/*    let post_messages = props.messages_post_Data.map(post_message => <Post message={post_message.message}
                                                                           like={post_message.like}/>)*/
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default My_Post;