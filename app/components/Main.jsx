import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Home from './Home.jsx';
// import Portfolio from './Portfolio.jsx';
// import Resume from './Resume.jsx';
// import TechnicalSkills from './TechnicalSkills.jsx';
// import Contact from './Contact.jsx';

const Home = React.lazy(() => import('./Home.jsx'));
const Portfolio = React.lazy(() => import('./Portfolio.jsx'));
const Resume = React.lazy(() => import('./Resume.jsx'));
const TechnicalSkills = React.lazy(() => import('./TechnicalSkills.jsx'));
const Contact = React.lazy(() => import('./Contact.jsx'));

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.renderPage = this.renderPage.bind(this);
  }

  renderPage() {
    // if (this.props.currentPage === "Home") {
    //   return <Home />
    // } else if (this.props.currentPage === "Portfolio") {
    //   return <Portfolio />
    // } else if (this.props.currentPage === "Resume") {
    //   return <Resume />
    // } else if (this.props.currentPage === "Technical Skills") {
    //   return <TechnicalSkills />
    // } else if (this.props.currentPage === "Contact") {
    //   return <Contact />
    // }
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