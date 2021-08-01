import React from 'react';
import { Route, Switch } from 'react-router';
import Home from "../../features/home/home.screen"
const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
        </Switch>
    );
};

export default Router;