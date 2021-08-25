import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/index";
import {AuthContext} from "../context/index";




const AppRouter = () => {
    const {isAuth } = useContext(AuthContext)
    return (
        isAuth
           ? <Switch>
                {privateRoutes.map(route =>
                    <Route component = {route.component}
                           path={route.path}
                           exact={route.exact}
                    />
                )}

                <Redirect to = "/posts" />
            </Switch>
        : <Switch>
                {publicRoutes.map(route =>
                    <Route component = {route.component}
                           path={route.path}
                           exact={route.exact}
                    />
                )}
                <Redirect to = "/login" />
            </Switch>

    )
};
export default AppRouter;