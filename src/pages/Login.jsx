import React,{useContext} from 'react'
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context/index";


const  Login = () => {
    const {setIsAuth} = useContext(AuthContext)
    return (
        <div style = {{width: 400, margin:'0 auto'}}>
            <h1> LOGIN </h1>
            <form onSubmit={()=> setIsAuth(true)}>
                <MyInput type="text" placeholder = "Enter login"/>
                <MyInput type="password" placeholder = "Enter password"/>
                <MyButton>Submit</MyButton>
            </form>
        </div>
    );
};

export default Login;