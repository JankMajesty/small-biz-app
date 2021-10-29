import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Login from './containers/Login'
import Listing from './containers/Listing'
import Listings from './containers/Listings'
import AddListing from './containers/AddListing'


export const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
  };

  const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          checkAuth() ? <Component {...props} /> 
          : <Redirect to="/login" />
        }
      />
    )
  }

const Router = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/listing/:id" component={Listing} />
            <ProtectedRoute path="/addListing" component={AddListing} />
            <Route path="/" component={Listings} />
        </Switch>
    );
};

export default Router;