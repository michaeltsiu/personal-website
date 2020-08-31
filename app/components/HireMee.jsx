import React, { createRef } from 'react';
import { FaGithub } from 'react-icons/fa';

class HireMee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="portfolio-main">

        <div className="portfolio-hero">

          <div className="portfolio-video">
            <video src="/app/assets/Portfolio/Hire-mee/Hire-mee_Overview.mp4" alt="VIDEO NOT FOUND" width="75%" height="auto" max-width="30vw" loop="loop" autoPlay="autoplay" />
          </div>

          <div className="portfolio-tech">
            React | Express | PostgreSQL | Node.JS
          </div>

          <div className="icons">
            <a href='https://github.com/hire-mee/hire-mee' target="_blank">
              <FaGithub />
            </a>
          </div>

        </div>
      </div>
    )
  }
}

export default HireMee;