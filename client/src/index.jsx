import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import Navbar from './components/Navbar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    console.log("I AM HERE")
    return (
      <React.Fragment>
        <div className="grid-container">
          <div className="Navbar">
            <Navbar />
          </div>
          <div className="Main">
            <Main />
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