import React from 'react';

class TechnicalSkills extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div className="header">Technical Skills</div>
        <div className="tech-list">
          <div>
            <h1 className="tech-cat">Front-End</h1>
            <ul className="tech-item">
              <li>Javascript[ES5 & ES6]</li>
              <li>React</li>
              <li>Redux</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div>
            <h1 className="tech-cat">Back-End</h1>
            <ul className="tech-item">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>RESTful API Development</li>
            </ul>
          </div>
          <div>
            <h1 className="tech-cat">Others</h1>
            <ul className="tech-item">
              <li>Git</li>
              <li>NPM</li>
              <li>Webpack</li>
              <li>Babel</li>
              <li>Agile Methodology</li>
              <li>Jest</li>
              <li>Enzyme</li>
              <li>Artillery</li>
              <li>AWS S3 | EC2</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TechnicalSkills