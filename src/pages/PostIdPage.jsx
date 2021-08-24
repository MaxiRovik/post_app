import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import PostService from '../API/PostService'
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const id = params.id;
    const [post, setPost]= useState({});
    const [comments, setComments]= useState([]);
    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response =  await PostService.getOne(id);
        setPost(response.data)});

    const [fetchCommentsById, isCommLoading, commError] = useFetching( async (id) => {
        const response =  await PostService.getCommentsByPostId(id);
        setComments(response.data)});

    useEffect(() => {
        fetchPostById(id);
        fetchCommentsById(id)
    },[]);



    return (
        <div >
            <h1> Page of post with ID = {id}</h1>
            {isLoading
                ? <Loader/>
                : <div>
                     <div>{post.id}. {post.title}</div>
                     <div>{post.body}</div>
                 </div>
            }
            <h1> Comments </h1>
            {isCommLoading
                ? <Loader/>
                : <div>
                    <div>{comments.map(comment =>
                        <div style ={{marginTop:30}}>
                            <h4>{comment.email} </h4>
                            <div>{comment.body} </div>
                        </div>)}</div>
                </div>
            }
            {error && <div>{error.message}</div>}
            {commError && <div>{commError.message}</div>}
        </div>
    );
};

export default PostIdPage;