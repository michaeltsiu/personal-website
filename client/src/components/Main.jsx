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
    this.renderPage = this.renderPage.bind(this);
  }

  renderPage() {
    if (this.props.currentPage === "Home") {
      return <Home />
    } else if (this.props.currentPage === "Portfolio") {
      return <Portfolio />
    } else if (this.props.currentPage === "Resume") {
      return <Resume />
    } else if (this.props.currentPage === "Technical Skills") {
      return <TechnicalSkills />
    } else if (this.props.currentPage === "Contact") {
      return <Contact />
    }
  }

  render() {
    return (
      <div>
        {this.renderPage()}
      </div>
    )
  }
}

export default Main;