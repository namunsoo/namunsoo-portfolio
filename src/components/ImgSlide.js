import React from 'react'
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';

function RequireCheck({location, img}){
  try {
    return require(`../${location}${img}`);
  }
  catch (e) {
    return require('assets/images/error.jpg');
  }
}

function ImgSlide({location, imgs}) {
  return (
    <>
      <Carousel interval={null}>
        {
          imgs.map((img, idx) => {
            return(
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={RequireCheck({location, img})}
                  alt="No Data"
                />
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    </>
  )
}

ImgSlide.propTypes = {
  location: PropTypes.string.isRequired,
  imgs: PropTypes.array.isRequired
};

export default ImgSlide
