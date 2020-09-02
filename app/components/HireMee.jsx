import React, { createRef } from 'react';
import { FaGithub } from 'react-icons/fa';

export default function HireMee() {
  return (
    <div className="portfolio-main">

      <div className="portfolio-video">
        <video src="/app/assets/Portfolio/Hire-mee/Hire-mee_Overview.mp4" alt="VIDEO NOT FOUND" loop="loop" autoPlay="autoplay" />
      </div>

      <div className="portfolio-tech">
        <span>
          <a href="https://reactjs.org/" target="_blank">React</a> | <a href="https://reactrouter.com/" target="_blank">React Router</a> | <a href="https://expressjs.com/" target="_blank">Express</a> | <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> | <a href="https://nodejs.org/" target="_blank">Node.JS</a>
        </span>
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