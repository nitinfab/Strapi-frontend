import React from 'react'

const Hero = () => {
    return (
      <div
        class="uk-cover-container uk-height-large uk-width-1-1"
        uk-height-viewport="offset-top: true"
      >
        <img src="images/light.jpg" class="uk-width-1-1" alt="" />
        <div class="uk-position-center uk-text-center uk-text-primary">
          <h2 uk-slider-parallax="x: 100,-100">Hello Everyone</h2>
          {/* <p uk-slider-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p> */}
        </div>
      </div>
    );
}

export default Hero;
