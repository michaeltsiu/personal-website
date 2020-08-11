import React from 'react';

class Resume extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div className="header">Resume</div>
        <div className="resume-container">
          <a target="_blank" href="https://michael-siu-resume.s3-us-west-2.amazonaws.com/Michael+Siu's+Resume.pdf">
            <img className="resume-img" src="https://michael-siu-resume.s3-us-west-2.amazonaws.com/Michael+Siu's+Resume.png"/>
          </a>
        </div>
      </div>
    )
  }
}

export default Resume