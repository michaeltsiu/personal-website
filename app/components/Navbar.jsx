import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaAngellist } from 'react-icons/fa';

const activeStyle = {
  color: 'black',
  // borderBottom: '2px solid black',
  // textDecoration: 'underline',
  // textUnderlineOffset: '0.75em'
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
      <div>
        <div className="navbar-item">
          <NavLink
            to='/'
            exact
            activeStyle={activeStyle}
            activeClassName="navlink-active"
            className="navlink-li">
              Home
            </NavLink>
        </div>
        <div className="navbar-item">
          <NavLink
            to='/portfolio'
            exact
            activeStyle={activeStyle}
            activeClassName="navlink-active"
            className="navlink-li">
              Portfolio
          </NavLink>
        </div>
        <div className="navbar-item">
          <NavLink
            to='/resume'
            exact
            activeStyle={activeStyle}
            activeClassName="navlink-active"
            className="navlink-li">
              Resume
          </NavLink>
        </div>
        <div className="navbar-item">
          <NavLink
            to='/technical-skills'
            exact
            activeStyle={activeStyle}
            activeClassName="navlink-active"
            className="navlink-li">
              Technical Skills
          </NavLink>
        </div>
        <div className="navbar-item">
          <NavLink
            to='/contact'
            exact
            activeStyle={activeStyle}
            activeClassName="navlink-active"
            className="navlink-li">
              Contact
          </NavLink>
        </div>
      </div>
      <div className="navbar-footer">
        <div className="icons">
            <a href='https://www.linkedin.com/in/michaeltsiu/' target="_blank">
              <FaLinkedin />
            </a>
            <a href='https://angel.co/u/michaeltsiu' target="_blank">
              <FaAngellist />
            </a>
            <a href='https://github.com/michaeltsiu' target="_blank">
              <FaGithub />
            </a>
            <a href='https://www.instagram.com/michaeltsiu/' target="_blank">
              <FaInstagram />
            </a>
            <a href='mailto:michaeltsiu13@gmail.com'>
              <FaEnvelope />
            </a>
        </div>
      </div>
    </div>
  )
};