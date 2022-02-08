import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <div></div>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
