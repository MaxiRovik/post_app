import React,{useContext} from 'react';
import cl from './NavBar.module.css';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from '../../../context/index'


const NavBar = () => {
    const {setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
};
    return (
        <div className = {cl.navbar}>
            <div className = {cl.navbar__links}>
                <Link to ="/about"> About</Link>
                <Link to ="/posts"> Posts</Link>
                <MyButton style = {{backgroundColor:'grey',
                                    boxShadow:'none',
                                    border:'none'}}
                          onClick ={()=> logout()}>sign out</MyButton>
            </div>
        </div>
    )
};
export default NavBar;