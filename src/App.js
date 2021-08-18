import React,{useState,useMemo} from 'react'
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";



function App() {
  const [posts, setPosts] = useState([
      {id: 1, title: 'Javascript', body: 'Some description of post Js is a famous language in nowadays'},
      {id: 2, title: 'Python', body: ' Post Python is a famous language in nowadays'},
      {id: 3, title: 'Java', body: 'Java is a famous language in nowadays'},
      {id: 4, title: '.Net', body: 'Some description of post .Net is a famous language in nowadays'},
  ]);

  const [filter, setFilter] = useState({sort:'', query:''});
  const [visible, setVisible] = useState(false);

  const createNewPost = () => {
      setVisible(true)
  };

    const sortedPosts = useMemo(() => {
        if (filter.sort){
            return [...posts].sort((a,b)=> a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    },[filter.sort,posts]);

    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    },[filter.query,sortedPosts]);


  const createPost = (newPost) => {
        setPosts([...posts, newPost])
      setVisible(false);
    };
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

  return (
      <div className="App">
              <h1>"From your mind to here"</h1>
          <MyButton onClick={createNewPost}>Create post</MyButton>
          <MyModal visible ={visible} setVisible = {setVisible}>
              <h1> Create new post! </h1>
              <PostForm createPost = {createPost}/>
          </MyModal>
          <PostFilter filter = {filter}
                      setFilter={setFilter}
          />
          <hr className="hr"/>

          <PostList remove ={removePost} posts = {sortedAndSearchedPosts} title ="Post list"/>

      </div>
  );
}

export default App;
