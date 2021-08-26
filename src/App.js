import React,{useState, useEffect} from 'react'
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/UI/NavBar/NavBar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context/index";



function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true)

    useEffect(()=>{
    if (localStorage.getItem('auth')){
    setIsAuth(true);
}
    setLoading(false)
    },[]);

    return (
        <AuthContext.Provider value={{
            isAuth, setIsAuth, isLoading
        }}>
            <BrowserRouter>
                <div className="App">
                    <NavBar/>
                    <AppRouter/>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>

    )
}

export default App;
