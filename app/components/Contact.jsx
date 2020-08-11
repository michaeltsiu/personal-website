import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div className="header">Contact</div>
        <div className="contact-main">
          <div>Feel free to get in touch. You can email me at:</div>
          <span>
            <a className="contact-email" href="mailto:michaeltsiu13@gmail.com">
              michaeltsiu13@gmail.com
              </a>
          </span>
        </div>
      </div>
    )
  }
}

export default Contact