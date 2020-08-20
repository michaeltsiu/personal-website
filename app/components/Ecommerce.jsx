import React from 'react';

class Ecommerce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div className="portfolio-main">
          <video src="https://michael-siu-portfolio.s3-us-west-1.amazonaws.com/FEC.mp4" alt="GIF NOT FOUND"  width="75%" height="auto" max-width="30vw" loop="loop" autoplay="autoplay" />
          <div>
            <span>Built with:</span>
            <ul>
              <li>React</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>Node.js</li>
              <li>hosted on AWS EC2 & RDS</li>
            </ul>
          </div>
        </div>
          <a href="https://github.com/proj-plus-ultra/fenty-recommended" target="_blank">codebase</a>
      </div>
    )
  }
}

export default Ecommerce;