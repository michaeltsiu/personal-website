import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  color: 'black'
}

export default function Navbar () {
  return (
    <div className="navbar-container">
        <div className="navbar-profile">
            <div>
            <NavLink
              to='/'
              exact
              activeStyle={activeStyle}
              className='navlink-profile'>
                <span className="navbar-picture"></span>
              </NavLink>
            </div>
            <div className="navbar-profileName">
              <NavLink
              to='/'
              exact
              activeStyle={activeStyle}
              className='navlink-profile'>
                <span>Michael Siu</span>
              </NavLink>
              </div>
            <div className="navbar-profileTitle">
            <NavLink
              to='/'
              exact
              activeStyle={activeStyle}
              className='navlink-profile'>
              <span>Software Engineer</span>
              </NavLink></div>
        </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink
            to='/'
            exact
            activeStyle={activeStyle}
            activeClassName="navlink-active"
            className="navlink-li">
              Home
            </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to='/portfolio'
            exact
            activeStyle={activeStyle}
            activeClassName="navlink-active"
            className="navlink-li">
              Portfolio
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to='/resume'
            exact
            activeStyle={activeStyle}
            activeClassName="navlink-active"
            className="navlink-li">
              Resume
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to='/technical-skills'
            exact
            activeStyle={activeStyle}
            activeClassName="navlink-active"
            className="navlink-li">
              Technical Skills
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to='/contact'
            exact
            activeStyle={activeStyle}
            activeClassName="navlink-active"
            className="navlink-li">
              Contact
          </NavLink>
        </li>
      </ul>
    </div>
  )
};