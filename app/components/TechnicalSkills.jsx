import React from 'react';

import { Icon, InlineIcon } from '@iconify/react';
import expressIcon from '@iconify/icons-logos/express';
import jestIcon from '@iconify/icons-logos/jest';
import reduxIcon from '@iconify/icons-logos/redux';
import webpackIcon from '@iconify/icons-logos/webpack';
import babelIcon from '@iconify/icons-logos/babel';
import awsEc2 from '@iconify/icons-logos/aws-ec2';
import gitIcon from '@iconify/icons-logos/git-icon';
import npmIcon from '@iconify/icons-logos/npm';
// import nodejsIcon from '@iconify/icons-logos/nodejs-icon';
import mongodbIcon from '@iconify/icons-logos/mongodb';
import mysqlIcon from '@iconify/icons-logos/mysql';
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import javascriptIcon from '@iconify/icons-logos/javascript';
import reactIcon from '@iconify/icons-logos/react';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
import css3 from '@iconify/icons-logos/css-3';
import html5 from '@iconify/icons-logos/html-5';

import nodejsIcon from '@iconify/icons-logos/nodejs';

export default function TechnicalSkills() {
  return (
    <div>
      <div className="header">Technical Skills</div>
      <div className="tech-list">
        <div>
          <h1 className="tech-cat">Front-End</h1>
          <ul className="tech-item">
            <li>
              <div><Icon icon={javascriptIcon} /></div>
              <p>Javascript</p>
            </li>
            <li>
              <div><Icon icon={reactIcon} /></div>
              <p>React</p>
            </li>
            <li>
              <div><Icon icon={html5} /></div>
              <p>HTML5</p>
            </li>
            <li>
              <div><Icon icon={css3} /></div>
              <p>CSS3</p>
            </li>
            <li>
              <div><Icon icon={bootstrapIcon} /></div>
              <p>Bootstrap</p>
            </li>
          </ul>

        </div>
        <div>
          <h1 className="tech-cat">Back-End</h1>
          <ul className="tech-item">
            <li>
              <div><Icon icon={nodejsIcon} /></div>
              <p>Node.JS</p>
            </li>
            <li>
              <div><Icon icon={expressIcon} /></div>
              <p>Express</p>
            </li>
            <li>
              <div><Icon icon={mongodbIcon} /></div>
              <p>MongoDB</p>
            </li>
            <li>
              <div><Icon icon={mysqlIcon} /></div>
              <p>MySQL</p>
            </li>
            <li>
              <div><Icon icon={postgresqlIcon} /></div>
              <p>PostgreSQL</p>
            </li>
          </ul>

        </div>
        <div>
          <h1 className="tech-cat">Others</h1>
          <ul className="tech-item">
          <li>
              <div><Icon icon={gitIcon} /></div>
              <p>Git</p>
            </li>
            <li>
              <div><Icon icon={npmIcon} /></div>
              <p>NPM</p>
            </li>
            <li>
              <div><Icon icon={webpackIcon} /></div>
              <p>Webpack</p>
            </li>
            <li>
              <div><Icon icon={babelIcon} /></div>
              <p>Babel</p>
            </li>
            <li>
              <div><Icon icon={awsEc2} /></div>
              <p>AWS EC2</p>
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
}