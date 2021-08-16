import React,{useState} from 'react'
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";



function App() {
  const [posts, setPosts] = useState([
      {id: 1, title: 'Javascript', body: 'Some description of post Js is a famous language in nowadays'},
      {id: 2, title: 'Python', body: ' post Python is a famous language in nowadays'},
      {id: 3, title: 'Java', body: 'Java is a famous language in nowadays'},
      {id: 4, title: '.Net', body: 'Some description of post .Net is a famous language in nowadays'},
  ]);
  return (
      <div className="App">
        <form className="form">
            <MyInput type="text" placeholder="post title"/>
            <MyInput type="text" placeholder="post description"/>
            <MyButton >Create post</MyButton>
        </form>
        <PostList posts = {posts} title ="Post list"/>
      </div>

  );
}

export default App;
