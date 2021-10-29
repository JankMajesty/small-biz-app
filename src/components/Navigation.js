import React from 'react'
import cookie from "cookie";
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import AddListing from '../containers/AddListing'
import { useLocation } from "react-router-dom"
import { checkAuth } from '../Router';

const Navigation = () => {
    return checkAuth() ? (
        <AppBar position="relative" style={{ background: '#3EB371' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Austin Small Business
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/listings">Listings</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/AddListing">Add Listing</Link>
                    </li>
                    <li className="nav-list-item"
                        onClick={() => {
                            document.cookie = "loggedIn="
                            window.location.replace("/login")
                        }}>
                      <Link to ="/login">Logout</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    ) : (
        <AppBar position="relative" style={{ background: '#3EB371' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Austin Small Business
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/listings">Listings</Link>
                    </li>
                    <li className="nav-list-item">
                    <Link to ="/login">Login</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation
