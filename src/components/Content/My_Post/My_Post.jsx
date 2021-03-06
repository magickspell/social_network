import React from 'react';
import style from './My_Post.module.css';
import Post from './Post/Post.jsx'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const My_Post = React.memo(props => {

    /*shouldComponentUpdate(nextProps, nextState) {
        return nextProps != this.props || nextState != this.state;
        } this is for class components*/

    let postsElements = props.messages_post_Data.map(p => <Post message={p.message} like={p.like}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
}
)

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder={"Post message"} validate={[required, maxLength10]}/>
{/*                <textarea onChange={props.onChange} ref={props.ref} value={props.value}/>*/}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);


export default My_Post;