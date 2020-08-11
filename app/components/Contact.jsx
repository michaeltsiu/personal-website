import React from 'react';
import { faGithub, faFacebook, faInstagram, faLinkedinIn, faAngellist} from '@fortawesome/fontawesome-free-brands';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const activeStyle = {
  color: 'black'
}

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
          <div>Feel free to get in touch by clicking any of the icons below:</div>
          <div className="navbar-footer">
            <div className="navbar-icons">
              <a href='https://www.linkedin.com/in/michaeltsiu/' target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href='https://github.com/michaeltsiu' target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href='https://www.facebook.com/msiu13/' target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href='https://www.instagram.com/michaeltsiu/' target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href='mailto:michaeltsiu13@gmail.com'>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact