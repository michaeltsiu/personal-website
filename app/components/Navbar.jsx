import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaAngellist } from 'react-icons/fa';

export default function Navbar () {
  return (
    <div className="navbar-container">
        <div className="navbar-profile">
            <div>
            <NavLink
              to='/'
              exact
              className='navlink-profile'>
                <span className="navbar-picture"></span>
              </NavLink>
            </div>
            <div className="navbar-profileName">
              <NavLink
              to='/'
              exact
              className='navlink-profile'>
                <span className="fontMedium">Michael Siu</span>
              </NavLink>
              </div>
            <div className="navbar-profileTitle">
            <NavLink
              to='/'
              exact
              className='navlink-profile'>
              <span>Software Engineer</span>
              </NavLink></div>
        </div>
      <div className="navbar-list">
        <div className="navbar-item fontSmall">
          <NavLink
            to='/'
            exact
            activeClassName="navlink-active"
            className="navlink-li">
              Home
            </NavLink>
        </div>
        <div className="navbar-item">
          <NavLink
            to='/portfolio'
            exact
            activeClassName="navlink-active"
            className="navlink-li">
              Portfolio
          </NavLink>
        </div>
        <div className="navbar-item">
          <NavLink
            to='/resume'
            exact
            activeClassName="navlink-active"
            className="navlink-li">
              Resume
          </NavLink>
        </div>
        <div className="navbar-item">
          <NavLink
            to='/technical-skills'
            exact
            activeClassName="navlink-active"
            className="navlink-li">
              Technical Skills
          </NavLink>
        </div>
        <div className="navbar-item">
          <NavLink
            to='/contact'
            exact
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