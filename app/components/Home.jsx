import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className="home-main">
        <div className="home-picture"></div>
        <div className="home-text">THIS IS TEXT</div>
      </div>
    )
  }
}

export default Home