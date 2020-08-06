import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import Navbar from './components/Navbar.jsx';

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
          <div className="Navbar">
            <Navbar changePage={this.changePage} />
          </div>
          <div className="Main">
            <Main currentPage={this.state.currentPage} />
          </div>
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