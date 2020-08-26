import React, { createRef } from 'react';

import { MdKeyboardArrowDown } from "react-icons/md";

let ref = React.createRef();

class HireMee extends React.Component {
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
            <video src="/app/assets/Portfolio/Hire-mee_Overview.mp4" alt="VIDEO NOT FOUND" width="75%" height="auto" max-width="30vw" loop="loop" autoPlay="autoplay" />
          </div>

          <div className="portfolio-tech">
            <div>
              <span>Built with:</span>
              <ul>
                <li>React</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>Node.js</li>
                <li>hosted on AWS EC2 and AWS RDS</li>
              </ul>
            </div>
          </div>

          <div className="portfolio-arrow">
            <div onClick={this.handleClick}>
             <MdKeyboardArrowDown />
            </div>
          </div>
        </div>

        <div className="ecommerce-body" ref={ref}>
          <div className="ecommerce-header">From the beginning</div>
          <div className="ecommerce-body">
            <p></p>
          </div>
          <div>You can find the codebase of the Hire-Mee project <a href="https://github.com/hire-mee/hire-mee" target="_blank">
          here
        </a></div>
        </div>
      </div>
    )
  }
}

export default HireMee;