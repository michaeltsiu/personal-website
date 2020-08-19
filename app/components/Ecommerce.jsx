import React from 'react';

class Ecommerce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        This is Ecommerce
        <div>
          <ul>
            <li>React</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>Node.js</li>
            <li>hosted on AWS EC2 and AWS RDS</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Ecommerce;