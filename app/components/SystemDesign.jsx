import React from 'react';
import { FaGithub } from 'react-icons/fa';

class SystemDesign extends React.Component {
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
            <img src="/app/assets/Portfolio/System-Design/System-Design_Overview.png" alt="IMAGE NOT FOUND" width="50%" height="auto" max-width="30vw" />
          </div>

          <div className="portfolio-tech">
            React | PostgreSQL | AWS | Ubuntu | Artillery | Loader.io | NGINX
          </div>

          <div className="icons">
            <a href='https://github.com/proj-minus-ultra/navbar-proxy' target="_blank">
              <FaGithub />
            </a>
          </div>

        </div>
      </div>
    )
  }
}

export default SystemDesign;
