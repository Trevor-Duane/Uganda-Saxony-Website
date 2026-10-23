import { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";

const defaultSlides = [
  {
    id: "def-1",
    acf: {
      slider_image_link: slider1,
      slider_text_1: "Uganda - Saxony",
      slider_text_2: "Partnership for Sustainable Development",
    },
  },
  {
    id: "def-2",
    acf: {
      slider_image_link: slider2,
      slider_text_1: "Strengthening Cooperation",
      slider_text_2: "Between Schools & Civil Society",
    },
  },
  {
    id: "def-3",
    acf: {
      slider_image_link: slider3,
      slider_text_1: "Empowering Communities",
      slider_text_2: "Driving Progress towards SDG 17",
    },
  },
];

const CustomSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchSlides = async () => {
      try {
        const response = await axios.get(
          "https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/slides"
        );
        if (isMounted && response.data && response.data.length > 0) {
          setSlides(response.data);
        }
      } catch (error) {
        // Fallback to local default slides if offline or error
        console.warn("Using offline fallback slides for hero section");
      }
    };

    fetchSlides();
    return () => {
      isMounted = false;
    };
  }, []);

  const activeSlides = slides.length > 0 ? slides : defaultSlides;

  const settings = {
    dots: true,
    lazyLoad: "ondemand",
    arrows: true,
    infinite: activeSlides.length > 1,
    slidesToShow: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4500,
    adaptiveHeight: false,
    slidesToScroll: 1,
  };

  return (
    <div className="container-fluid homeContainer gx-0 gy-0 p-0 m-0">
      <Slider {...settings} className="sliderWrapper">
        {activeSlides.map((slide) => {
          const imgSrc = slide.acf?.slider_image_link || slider1;
          const text1 = slide.acf?.slider_text_1 || "Uganda - Saxony";
          const text2 = slide.acf?.slider_text_2 || "Partnership";

          return (
            <div key={slide.id} className="slidesContainer">
              <img
                className="img-fluid w-100"
                src={imgSrc}
                alt={`${text1} ${text2}`}
                onError={(e) => {
                  e.currentTarget.src = slider1;
                }}
              />
              <div className="heroContent">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-10 col-lg-8 gradient-head">
                      <h2>
                        {text1}
                        {text2 && (
                          <>
                            <br />
                            {text2}
                          </>
                        )}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CustomSlider;
