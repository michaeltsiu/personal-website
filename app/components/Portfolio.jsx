import React from 'react';

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div className="header">
          <span>Portfolio</span>
          <div>
            <ul className="portfolio-title">
              <li>E-Commerce clone</li>
              <li>System Design</li>
              <li>Hire-Mee</li>
            </ul>
            {/* <div>E-Commerce clone</div>
            <div>System Design</div>
            <div>Hire-Mee</div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio