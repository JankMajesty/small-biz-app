import React from 'react'
import { Switch, Route } from 'react-router'
import cookie from 'cookie'
import Car from './containers/Listing'
import Listings from './containers/Listings'

const Router = () => {
    return (
        <Switch>
            <Route path="/car/:id" component={Car} />
            <Route path="/listings" component={Listings} />
        </Switch>
    );
};

export default Router;