import React from 'react';

class SystemDesign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        This is System Design
        <div>
        Built with:
          <ul>
            <li>React</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Node.js</li>
            <li>stress tested via New Relic & Loader.io</li>
            <li>hosted on AWS EC2 t2.micros x 3</li>
            <li>Load balancing & caching via NGINX</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SystemDesign;