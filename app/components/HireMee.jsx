import React from 'react';

class HireMee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        This is HireMee
        <ul>
          <li>React</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>Node.js</li>
          <li>hosted on AWS EC2 and AWS RDS</li>
        </ul>
        <a href="https://github.com/hire-mee/hire-mee" target="_blank">codebase</a>
      </div>
    )
  }
}

export default HireMee;