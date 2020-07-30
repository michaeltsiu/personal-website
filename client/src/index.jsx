import React from 'react';
import ReactDOM from 'react-dom';
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
        <Navbar />
        <div className="mainImage"></div>
        <div className="mainText">

        </div>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));