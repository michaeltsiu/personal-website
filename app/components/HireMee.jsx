import React, { createRef } from 'react';
import { FaGithub } from 'react-icons/fa';

export default function HireMee() {
  return (
    <div className="portfolio-main">

      <div className="portfolio-video">
        <video src="/app/assets/Portfolio/Hire-mee/Hire-mee_Overview.mp4" alt="VIDEO NOT FOUND" width="75%" height="auto" max-width="75vw" loop="loop" autoPlay="autoplay" />
      </div>

      <div className="portfolio-tech">
        React | Express | PostgreSQL | Node.JS

        <div className="portfolio-icon">
          <a href='https://github.com/hire-mee/hire-mee' target="_blank">
            <FaGithub />
          </a>
        </div>

      </div>

      <div className="portfolio-summary">
        A web application that provides an organized space for job seekers to input information about submitted job applications.
        </div>

    </div>
  )
};