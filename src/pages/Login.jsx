import React,{useContext} from 'react'
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context/index";


const  Login = () => {
    const {setIsAuth} = useContext(AuthContext);
    const login = e => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth','true')
    };
    return (
        <div style = {{width: 400, margin:'0 auto'}}>
            <h1> LOGIN </h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder = "Enter login"/>
                <MyInput type="password" placeholder = "Enter password"/>
                <MyButton>Submit</MyButton>
            </form>
        </div>
    );
};

export default Login;