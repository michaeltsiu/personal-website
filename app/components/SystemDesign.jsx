import React from 'react';

import { MdKeyboardArrowDown } from "react-icons/md";
let ref = React.createRef();

class SystemDesign extends React.Component {
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
            <img src="/app/assets/Portfolio/System-Design/System-Design_Overview.png" alt="IMAGE NOT FOUND" width="50%" height="auto" max-width="30vw" />
          </div>

          <div className="portfolio-tech">
            <div>
              <span>Built with:</span>
              <div className="portfolio-system">
                <ul>
                  <li>React</li>
                  <li>PostgreSQL</li>
                  <li>AWS</li>
                  <li>Ubuntu</li>
                  <li>Artillery</li>
                  <li>Loader.io</li>
                  <li>NGINX</li>
                </ul>
              </div>
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
          <div>You can find the codebase of the System Design project <a href="https://github.com/proj-minus-ultra/navbar-proxy" target="_blank">here</a>
          </div>
        </div>
      </div>
    )
  }
}

export default SystemDesign;
