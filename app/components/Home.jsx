import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    var settings = {
      autoplay: true,
      dots: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      autoplaySpeed: 5000
    };
    return (
      <div className="home-main">
        <div className="home-picture">
          <Slider {...settings}>
            <div className="home-picture1"></div>
            <div className="home-picture2"></div>
          </Slider>
        </div>
        <div className="home-text">
          <span className="home-title">Hello! I'm</span>
          <div className="home-header">Michael Siu <span style={{color: 'rgb(235, 198, 104)'}}>A Software Developer.</span></div>
          <div className="home-body">I am a Software Engineer that is passionate about where the future in tech may lead us. I have always been intrigued by the way websites have worked and what little improvements I could make to create a better user experience. I love to program and see what I can create from a simple idea and turn it into something that I can show to all my family members, friends and colleagues.</div>
        </div>
      </div>
    )
  }
}

export default Home