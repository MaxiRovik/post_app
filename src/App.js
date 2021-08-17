import React,{useState,useMemo} from 'react'
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";



function App() {
  const [posts, setPosts] = useState([
      {id: 1, title: 'Javascript', body: 'Some description of post Js is a famous language in nowadays'},
      {id: 2, title: 'Python', body: ' Post Python is a famous language in nowadays'},
      {id: 3, title: 'Java', body: 'Java is a famous language in nowadays'},
      {id: 4, title: '.Net', body: 'Some description of post .Net is a famous language in nowadays'},
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');


  const sortedPosts = useMemo(() => {
      console.log('ggggggggggggggggggggg')
      if (selectedSort){
          return [...posts].sort((a,b)=> a[selectedSort].localeCompare(b[selectedSort]))
      }
      return posts
  },[selectedSort,posts]);

    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPosts.filter(post => post.title.includes(searchQuery))
    },[searchQuery,sortedPosts]);

  const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    const sortPosts =(sort)=> {
        setSelectedSort(sort);

    };

  return (
      <div className="App">
          <PostForm createPost = {createPost} />
          <hr className="hr"/>
          <MyInput
              value = {searchQuery}
              onChange = {e => setSearchQuery(e.target.value)}
              placeholder="Search..."
          />
          <MySelect
              value = {selectedSort}
              onChange = {sortPosts}
          defaultValue = "sort by"
          options ={[
              {value: 'title', name: 'by title'},
              {value: 'body', name: 'by description'},
          ]}
          />
          {posts.length>0 ?
              <PostList remove ={removePost} posts = {sortedAndSearchedPosts} title ="Post list"/>
              : <h1> No posts</h1>
          }

      </div>

  );
}

export default App;
