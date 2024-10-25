import React from "react";
import Slider from "react-slick";
import axios from "axios";

const CustomSlider = () => {

  const [slides, setSlides] = React.useState([])

  React.useEffect(() => {
    const fetchSlides = async() => {
      try {
        axios.get('https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/slides')
      .then(response => {
        setSlides(response.data)
      })
      .catch(error => {
        console.log(error)
      })
      } catch (error) {
        console.log(error)
      }
    }

    fetchSlides()
  }, [])

  const settings = {
    dots: false,
    lazyload: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    slidesToScroll: 1,
  };
  return (
    <div className="container-fluid homeContainer gx-0 gy-0 p-0 m-0">
      <Slider {...settings} className="sliderWrapper">
        {slides.map((slide, index) => (
          <div key={slide.id} className="slidesContainer">
            <img
              className="img-fluid w-100"
              src={slide.acf.slider_image_link}
              alt="First slide"
            />
            <div className="heroContent">
              <div className="heroText container gx-0 row">
                <div className="col-sm-5 gradient-head">
                  <h2>
                    {slide.acf.slider_text_1}<br></br>{slide.acf.slider_text_2}
                  </h2>
                </div>

                <div className="col-sm-7 gradient-text">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
