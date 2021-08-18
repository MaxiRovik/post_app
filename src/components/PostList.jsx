import React from 'react';
import PostItem from "./PostItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const PostList = ({posts, title, remove}) => {

    if (!posts.length){
        return (
            <h1>
                No posts!
            </h1>
        )
    }
    return(
       <div>
            <h1>{title}</h1>
           <TransitionGroup className="todo-list">
               {posts.map((post, index) =>
                   <CSSTransition key={post.id}
                                  timeout={500}
                                  classNames="post">
                   <PostItem remove={remove}
                             number={index+1}
                             post={post}
                   />
                   </CSSTransition>)}
           </TransitionGroup>
        </div>
    )
};

export default PostList;