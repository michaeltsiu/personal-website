import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="navbar-container">
        <ul className="navbar-list">
          <li className="navbar-item">HOME</li>
          <li className="navbar-item">PORTFOLIO</li>
          <li className="navbar-item">RESUME</li>
          <li className="navbar-item">TECHNICAL SKILLS</li>
        </ul>
      </div>
    )
  }
}

export default Navbar;