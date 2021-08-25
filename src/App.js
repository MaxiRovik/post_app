import React,{useState} from 'react'
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/UI/NavBar/NavBar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context/index";



function App() {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <AuthContext.Provider value={{
            isAuth, setIsAuth
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
