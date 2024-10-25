import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Gallery.css";
import CustomSlider from "../../components/Slider/CustomSlider";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/gallery`
        );
        console.log("images", response.data);
        setImages(response.data);
        setSelectedImage(response.data[0]?.acf.image); 
        setSelectedCaption(response.data[0].acf.caption);
        
      } catch (error) {
        console.error("Error fetching images", error);
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image.acf.image);
  };

  return (
    <>
    <CustomSlider/>
    <section className="container gallery-section-head gx-0">
        <div className="eventsTitle">
          <h6 className="sectionHeader">Frames of Inspiration</h6>
          <p className="sectionParaText">
            Discover the Visual Inspirations That Move Us
          </p>
        </div>
      </section>
      <section className="container gallery-section">
        <div className="gallery-container">
          {/* Left column: Scrollable 2-column thumbnail grid */}
          <div className="thumbnails-column">
            <div className="thumbnail-grid">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="thumbnail-item"
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={image.acf.image}
                    alt={image.acf.caption}
                    className="thumbnail-image"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Selected image display */}
          <div className="image-display-column">
            {selectedImage && (
              <div>
              <img
                src={selectedImage}
                alt={selectedCaption}
                className="selected-image"
              />
              <p className="image-caption">{selectedCaption}</p> {/* Caption under image */}
            </div>

              
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
