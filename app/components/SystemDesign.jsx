import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function SystemDesign() {
  return (
    <div className="portfolio-main">

      <div className="portfolio-video">
        <img src="/app/assets/Portfolio/System-Design/System-Design_Overview.png" alt="IMAGE NOT FOUND" width="50%" height="auto" max-width="75vw" />
      </div>

      <div className="portfolio-tech">
        React | PostgreSQL | AWS | Ubuntu | Artillery | Loader.io | NGINX

          <div className="portfolio-icon">
          <a href='https://github.com/proj-minus-ultra/navbar-proxy' target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="portfolio-summary">
        <p>Horizontally scaled system design on an inherited codebase with a goal to at least reach 2,000 client requests per second.</p>
        <br/>
        <p>Achieved by being deployed on 4 AWS EC2 t2 micro instances capable of handling 10,579 client requests per second, 0% error rate and 61ms average response time. Load balanced and cached via NGINX.</p>
      </div>


    </div>
  )
};
