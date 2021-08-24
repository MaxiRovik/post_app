import React from 'react';
import Link from "react-router-dom/es/Link";
import cl from './NavBar.module.css';

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