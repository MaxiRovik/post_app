import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";


const PostForm = ({createPost}) => {
    const [post, setPost] = useState({title:'', body:''});


    const addNewPost =(e) =>{
        e.preventDefault();
        const newPost = {
            id: Date.now(), ...post
        };
        createPost(newPost)
        setPost({title:'', body:''})

    };

    return(
        <form className="form">
            <MyInput value = {post.title}
                     onChange = {e => setPost({...post, title:e.target.value})}
                     type="text"
                     placeholder="post title"/>
            <MyInput value = {post.body}
                     onChange = {e => setPost({...post, body:e.target.value})}
                     type="text"
                     placeholder="post description"/>
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    )
};

export default PostForm;