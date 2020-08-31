import React, { createRef } from 'react';

import { MdKeyboardArrowDown } from "react-icons/md";
import { FaGithub } from 'react-icons/fa';

class Ecommerce extends React.Component {
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
            <video src="/app/assets/Portfolio/Ecommerce/Ecommerce-Overview.mp4" alt="VIDEO NOT FOUND" width="75%" height="auto" max-width="30vw" loop="loop" autoPlay="autoplay" />
          </div>

          <div className="portfolio-tech">
            React | Express | MySQL | Node.JS | AWS
          </div>

          <div className="icons">
            <a href='https://github.com/proj-plus-ultra/fenty-recommended' target="_blank">
              <FaGithub />
            </a>
          </div>

        </div>
      </div>
    )
  }
}

export default Ecommerce;