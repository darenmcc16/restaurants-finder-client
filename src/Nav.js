import React, { Component } from 'react'
import TokenService from "./service/token-service.js"
import { Link } from 'react-router-dom'


class Nav extends Component {

    logOutClick = () => {
        //console.log('Logging out')
        TokenService.clearAuthToken()
        TokenService.getUserId = (id) => {
            //console.log(id)
        }

        window.location = '/'
    }

    render() {

        return (
            <header className='header'>
                <h2>
                    <Link to="/">
                        Restaurant-Finder
                </Link>
                </h2>
                {TokenService.hasAuthToken() ?
                    <nav className="nav">
                        <ul className='link'>
                            <li>
                                <Link to="/">
                                    <i className="home"></i>
                                    <span className='navlink-text'>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={this.logOutClick}>
                                    <i className="sign-out"></i>
                                    <span className='navlink-text'>Log Out</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/business-search">
                                <i className="sign-out"></i>
                                    <span className='navlink-text'>Search Restaurants</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/favorites">
                                <i className="sign-out"></i>
                                    <span className='navlink-text'>Favorites</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    :
                    <nav className="nav">
                        <ul>
                            <li>
                                <Link to='/signup' >Sign Up</Link>
                            </li>
                            <li>
                                <Link to='/user/login' >Login</Link>
                            </li>
                        </ul>
                    </nav>
                }
            </header>
        )
    }
}

export default Nav 