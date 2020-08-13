import React from 'react';

import { DiPostgresql, DiBootstrap, DiMysql, DiMongodb, DiCss3, DiHtml5, DiReact, DiJsBadge, DiNodejsSmall, DiNpm, DiGit } from "react-icons/di";
import { FaBootstrap, FaAws } from 'react-icons/fa';

export default function TechnicalSkills () {
  return (
    <div>
      <div className="header">Technical Skills</div>
      <div className="tech-list">
        <div>
          <h1 className="tech-cat">Front-End</h1>
          <ul className="tech-item">
            <li><DiJsBadge /> Javascript[ES5 & ES6]</li>
            <li><DiReact /> React</li>
            <li>Redux</li>
            <li><DiHtml5 /> HTML5</li>
            <li><DiCss3 /> CSS</li>
            <li><FaBootstrap /> Bootstrap</li>
          </ul>
        </div>
        <div>
          <h1 className="tech-cat">Back-End</h1>
          <ul className="tech-item">
            <li><DiNodejsSmall />Node.js</li>
            <li>Express</li>
            <li><DiMongodb /> MongoDB</li>
            <li><DiMysql /> MySQL</li>
            <li><DiPostgresql /> PostgreSQL</li>
            <li>RESTful API Development</li>
          </ul>
        </div>
        <div>
          <h1 className="tech-cat">Others</h1>
          <ul className="tech-item">
            <li><DiGit />Git</li>
            <li><DiNpm />NPM</li>
            <li>Webpack</li>
            <li>Babel</li>
            <li>Agile Methodology</li>
            <li>Jest</li>
            <li>Enzyme</li>
            <li>Artillery</li>
            <li><FaAws />AWS S3 | EC2</li>
          </ul>
        </div>
      </div>
    </div>
  )
}