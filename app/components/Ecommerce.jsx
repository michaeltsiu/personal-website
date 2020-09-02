import React, { createRef } from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Ecommerce() {
  return (
    <div className="portfolio-main">

      <div className="portfolio-video">
        <video src="/app/assets/Portfolio/Ecommerce/Ecommerce-Overview.mp4" alt="VIDEO NOT FOUND" width="75%" height="auto" max-width="75vw" loop="loop" autoPlay="autoplay" />
      </div>

      <div className="portfolio-tech">
      <span>
          <a href="https://reactjs.org/" target="_blank">React</a> | <a href="https://expressjs.com/" target="_blank">Express</a> | <a href="https://www.mysql.com/" target="_blank">MySQL</a> | <a href="https://nodejs.org/" target="_blank">Node.JS</a> | <a
          href="https://aws.amazon.com/ec2/" target="_blank">AWS EC2</a> | <a href="https://aws.amazon.com/s3/" target="_blank">AWS S3</a>
        </span>

          <div className="portfolio-icon">
          <a href='https://github.com/proj-plus-ultra/fenty-recommended' target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="portfolio-summary">
        A clone of Fenty Beauty's product related page with dynamically rendered items that pertain to a specific category.
        </div>

    </div>
  )
};