import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Cybersoft
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink activeStyle={{fontWeight:'bold'}} activeClassName="bg-dark text-light" className="nav-link" aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="bg-dark text-light" className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="bg-dark text-light" className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
             
              <li className="nav-item">
                <NavLink
                    activeClassName="bg-dark text-light"
                  className="nav-link"
                  to="/register"
                  tabIndex={-1}
                >
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                    activeClassName="bg-dark text-light"
                  className="nav-link"
                  to="/lifecycle"
                  tabIndex={-1}
                >
                  Life Cycle
                </NavLink>
              </li>
           <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Hook
  </a>
  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    <li><NavLink className="dropdown-item" to="/usestate">useStateHook</NavLink></li>
    <li><NavLink className="dropdown-item" to="/btusestate">BT useStateHook</NavLink></li>
    <li><NavLink className="dropdown-item" to="/useeffect">useEffect</NavLink></li>
    <li><NavLink className="dropdown-item" to="/usecallback">UseCallBack</NavLink></li>
    <li><NavLink className="dropdown-item" to="/usememo">UseMemo</NavLink></li>
    <li><NavLink className="dropdown-item" to="/useref">UseRef</NavLink></li>
    <li><NavLink className="dropdown-item" to="/reduxhook">ReduxHook</NavLink></li>
  </ul>
</li>
                <li className="nav-item">
                <NavLink
                    activeClassName="bg-dark text-light"
                  className="nav-link"
                  to="/details/:id"
                  tabIndex={-1}
                >
                  Details
                </NavLink>
              </li>
              
            
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
