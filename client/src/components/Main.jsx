import React from 'react';
import Home from './Home.jsx';
import Portfolio from './Portfolio.jsx';
import Resume from './Resume.jsx';
import TechnicalSkills from './TechnicalSkills.jsx';
import Contact from './Contact.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        This is Main
        <Home />
        <Portfolio />
        <Resume />
        <TechnicalSkills />
        <Contact />
      </div>
    )
  }
}

export default Main;