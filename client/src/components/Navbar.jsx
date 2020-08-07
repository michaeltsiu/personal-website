import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  color: 'black'
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
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
              activeClassName="navbar-active"
              className='nav-link'>
                Home
              </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to='/portfolio'
              exact
              activeStyle={activeStyle}
              activeClassName="navbar-active"
              className='nav-link'>
                Portfolio
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to='/resume'
              exact
              activeStyle={activeStyle}
              activeClassName="navbar-active"
              className='nav-link'>
                Resume
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to='/technical-skills'
              exact
              activeStyle={activeStyle}
              activeClassName="navbar-active"
              className='nav-link'>
                Technical Skills
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to='/contact'
              exact
              activeStyle={activeStyle}
              activeClassName="navbar-active"
              className='nav-link'>
                Contact
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar;