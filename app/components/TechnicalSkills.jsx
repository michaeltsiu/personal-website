import React from 'react';

import { Icon, InlineIcon } from '@iconify/react';
import expressIcon from '@iconify/icons-logos/express';
import jestIcon from '@iconify/icons-logos/jest';
import reduxIcon from '@iconify/icons-logos/redux';
import webpackIcon from '@iconify/icons-logos/webpack';
import babelIcon from '@iconify/icons-logos/babel';
import awsIcon from '@iconify/icons-logos/aws';
import gitIcon from '@iconify/icons-logos/git-icon';
import npmIcon from '@iconify/icons-logos/npm';
import nodejsIcon from '@iconify/icons-logos/nodejs-icon';
import mongodbIcon from '@iconify/icons-logos/mongodb';
import mysqlIcon from '@iconify/icons-logos/mysql';
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import javascriptIcon from '@iconify/icons-logos/javascript';
import reactIcon from '@iconify/icons-logos/react';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
import css3 from '@iconify/icons-logos/css-3';
import html5 from '@iconify/icons-logos/html-5';

export default function TechnicalSkills () {
  return (
    <div>
      <div className="header">Technical Skills</div>
      <div className="tech-list">
        <div>
          <h1 className="tech-cat">Front-End</h1>
          <ul className="tech-item">
            <li className="tech20"><Icon icon={javascriptIcon} width="20" /> Javascript[ES5 & ES6]</li>
            <li className="tech20"><Icon icon={reactIcon} width="20" /> React</li>
            <li className="tech20"><Icon icon={reduxIcon} width="20" /> Redux</li>
            <li className="tech20"><Icon icon={html5} width="20" /> HTML5</li>
            <li className="tech20"><Icon icon={css3} width="20" /> CSS3</li>
            <li className="tech20"><Icon icon={bootstrapIcon} width="20" /> Bootstrap</li>
          </ul>
        </div>
        <div>
          <h1 className="tech-cat">Back-End</h1>
          <ul className="tech-item">
            <li className="tech20"><Icon icon={nodejsIcon} width="20" /> Node.js</li>
            <li className="tech60"><Icon icon={expressIcon} width="60" /> Express</li>
            <li className="tech60"><span className="icon60"><Icon icon={mongodbIcon} width="60"/></span> MongoDB</li>
            <li className="tech20"><Icon icon={mysqlIcon} width="20" /> MySQL</li>
            <li className="tech20"><Icon icon={postgresqlIcon} width="20" /> PostgreSQL</li>
          </ul>
        </div>
        <div>
          <h1 className="tech-cat">Others</h1>
          <ul className="tech-item">
            <li className="tech20"><Icon icon={gitIcon} width="20" /> Git</li>
            <li className="tech40"><Icon icon={npmIcon} width="40" /> NPM</li>
            <li className="tech20"><Icon icon={webpackIcon} width="20"/> Webpack</li>
            <li className="tech40"><Icon icon={babelIcon} width="40" /> Babel</li>
            <li className="tech20"><Icon icon={jestIcon} width="20" /> Jest</li>
            <li className="tech30"><Icon icon={awsIcon} width="30" /> AWS S3 | EC2</li>
          </ul>
        </div>
      </div>
    </div>
  )
}