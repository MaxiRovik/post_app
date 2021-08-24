import React from 'react';
import cl from './NavBar.module.css';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className = {cl.navbar}>
            <div className = {cl.navbar__links}>
                <Link to ="/about"> About</Link>
                <Link to ="/posts"> Posts</Link>
            </div>
        </div>
    )
};
export default NavBar;