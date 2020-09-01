import React, { createRef } from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Ecommerce() {
  return (
    <div className="portfolio-main">

      <div className="portfolio-video">
        <video src="/app/assets/Portfolio/Ecommerce/Ecommerce-Overview.mp4" alt="VIDEO NOT FOUND" width="75%" height="auto" max-width="75vw" loop="loop" autoPlay="autoplay" />
      </div>

      <div className="portfolio-tech">
        React | Express | MySQL | Node.JS | AWS

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