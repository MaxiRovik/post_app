import React,{useState,useEffect,useMemo} from 'react'
import '../styles/App.css';
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPagesCount, getPagesSet} from "../components/utils/pages";
import {usePagination} from "../hooks/usePagination";
import Pagination from "../components/UI/Pagination/Pagination";






function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort:'', query:''});
    const [visibleModal, setVisibleModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit]=useState(10);
    const [page, setPage]=useState(2);
    const [fetching, isLoading, error] = useFetching(async function fetchPosts(){
        const response = await PostService.getAll(limit,page);
        setPosts(response.data);
        const totalPostsCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalPostsCount,limit))
    });
    const pagesSet = usePagination(totalPages);


    useEffect(()=>{
        fetching()
    },[page]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setVisibleModal(false);
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };
    const changePage = (page) => {
        setPage(page);
    };

    return (
        <div className="App">
            <h1>"From your mind to here"</h1>
            <MyButton onClick ={fetching}>
                GET POSTS
            </MyButton>
            <MyButton onClick={()=> setVisibleModal(true)}>Create post</MyButton>
            <MyModal visible ={visibleModal} setVisible = {setVisibleModal}>
                <h1> Create new post! </h1>
                <PostForm createPost = {createPost}/>
            </MyModal>
            <PostFilter filter = {filter}
                        setFilter={setFilter}
            />
            <hr className="hr"/>

            {error &&
            <h1> ERROR <br/>${error} </h1>   }
            <Pagination pagesSet={pagesSet} page={page} changePage = {changePage} />
            {isLoading ? <div className="divForLoader"><Loader/></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Post list"/>
            }
            <Pagination pagesSet={pagesSet} page={page} changePage = {changePage} />
        </div>
    );
}

export default Posts;
