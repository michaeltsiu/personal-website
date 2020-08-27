import React, { createRef } from 'react';

import { MdKeyboardArrowDown } from "react-icons/md";

let ref = React.createRef();

class Ecommerce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  render() {
    return (
      <div className="portfolio-main">
        <div className="portfolio-hero">
          <div className="portfolio-video">
            <video src="/app/assets/Portfolio/FEC.mp4" alt="VIDEO NOT FOUND" width="75%" height="auto" max-width="30vw" loop="loop" autoPlay="autoplay" />
          </div>

          <div className="portfolio-tech">
            <div>
              <span>Built with:</span>
              <ul>
                <li>React</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>Node.js</li>
                <li>Hosted on AWS EC2 & RDS</li>
              </ul>
            </div>
          </div>

          <div className="portfolio-arrow">
            <div onClick={this.handleClick}>
             <MdKeyboardArrowDown />
            </div>
          </div>
        </div>

        <div className="portfolio-text" ref={ref}>
          <div className="portfolio-header">Overview</div>
          <div className="portfolio-innertext">
            <p></p>
          </div>
          <div>You can find the codebase of the E-commerce clone project <a href="https://github.com/proj-plus-ultra/fenty-recommended" target="_blank">
          here
        </a></div>
        </div>
      </div>
    )
  }
}

export default Ecommerce;