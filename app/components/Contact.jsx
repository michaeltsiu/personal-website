import React from 'react';

import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const activeStyle = {
  color: 'black'
}

export default function Contact () {
  return (
    <div>
      <div className="header">Contact</div>
      <div className="contact-main">
        <div>Feel free to get in touch by clicking any of the icons below:</div>
        <div className="navbar-footer">
          <div className="icons">
            <a href='https://www.linkedin.com/in/michaeltsiu/' target="_blank">
              <FaLinkedin />
            </a>
            <a href='https://github.com/michaeltsiu' target="_blank">
              <FaGithub />
            </a>
            <a href='https://www.facebook.com/msiu13/' target="_blank">
              <FaFacebook />
            </a>
            <a href='https://www.instagram.com/michaeltsiu/' target="_blank">
              <FaInstagram />
            </a>
            <a href='mailto:michaeltsiu13@gmail.com'>
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}