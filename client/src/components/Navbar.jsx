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
        <div className="navbar-profile">
          <a className="navbar-picture"></a>
          <div className="navbar-profileName">Michael Siu</div>
          <div className="navbar-profileTitle">Software Engineer</div>
        </div>
        <ul className="navbar-list">
          <li className="navbar-item" onClick={() => this.props.changePage("Home")}>Home</li>
          <li className="navbar-item" onClick={() => this.props.changePage("Portfolio")}>Portfolio</li>
          <li className="navbar-item" onClick={() => this.props.changePage("Resume")}>Resume</li>
          <li className="navbar-item" onClick={() => this.props.changePage("Technical Skills")}>Technical Skills</li>
          <li className="navbar-item" onClick={() => this.props.changePage("Contact")}>Contact</li>
        </ul>
      </div>
    )
  }
}

export default Navbar;