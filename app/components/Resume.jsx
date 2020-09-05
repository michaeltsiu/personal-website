import React from 'react';

export default function Resume () {
  return (
    <div>
      <div className="header fontLarge">Resume</div>
      <div className="resume-container">
        <a target="_blank" href="https://michael-siu-resume.s3-us-west-2.amazonaws.com/Michael+Siu's+Resume.pdf">
          <img className="resume-img" src="https://michael-siu-resume.s3-us-west-2.amazonaws.com/Michael+Siu's+Resume.png"/>
        </a>
      </div>
    </div>
  )
}