import React from 'react'
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/UI/NavBar/NavBar";
import AppRouter from "./components/AppRouter";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <AppRouter/>
            </div>
        </BrowserRouter>
    )
}

export default App;
