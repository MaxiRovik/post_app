import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Error from "../pages/Error";
import Posts from "../pages/Posts";
import About from "../pages/About";



const AppRouter = () => {
    return (
        <Switch>
            <Route path = "/about">
                <About />
            </Route>
            <Route path = "/posts">
                <Posts />
            </Route>
            <Route path = "/error">
                <Error />
            </Route>
            <Redirect to = "/error" />
        </Switch>
    )
};
export default AppRouter;