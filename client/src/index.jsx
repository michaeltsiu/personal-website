import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import '../dist/styles.css';

import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import Navbar from './components/Navbar.jsx';
import Loading from './components/Loading.jsx';

const Home = React.lazy(() => import('./components/Home.jsx'));
const Portfolio = React.lazy(() => import('./components/Portfolio.jsx'));
const Resume = React.lazy(() => import('./components/Resume.jsx'));
const TechnicalSkills = React.lazy(() => import('./components/TechnicalSkills.jsx'));
const Contact = React.lazy(() => import('./components/Contact.jsx'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Home'
    }
    this.changePage = this.changePage.bind(this);
  }

  changePage(value) {
    this.setState({
      currentPage: value
    })
  }

  render() {
    console.log(this.state.currentPage)
    return (
      <React.Fragment>
        <div className="grid-container">
          <Router>
            <div className="Navbar">
              <Navbar />
            </div>
            <div className="Main">
              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/portfolio' component={Portfolio} />
                  <Route exact path='/resume' component={Resume} />
                  <Route exact path='/technical-skills' component={TechnicalSkills} />
                  <Route exact path='/contact' component={Contact} />
                  <Route render={() => <h1>404</h1>} />
                </Switch>
              </React.Suspense>
              {/* <Main currentPage={this.state.currentPage} /> */}
            </div>
          </Router>
          <div className="Footer">
           <Footer />
          </div>
        </div>

        {/* <div className="mainImage"> */}
        {/* <div className="mainText"> */}
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));