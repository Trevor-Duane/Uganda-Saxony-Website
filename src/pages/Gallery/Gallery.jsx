import { useState, useEffect } from "react";
import axios from "axios";
import "./Gallery.css";
import CustomSlider from "../../components/Slider/CustomSlider";
import img1 from "../../assets/workshop/IMG_1623.JPG";
import img2 from "../../assets/workshop/IMG_1649.JPG";
import img3 from "../../assets/workshop/IMG_1670.JPG";
import img4 from "../../assets/workshop/IMG_1714.JPG";
import img5 from "../../assets/workshop/IMG_1788.JPG";
import img6 from "../../assets/workshop/IMG_1813.JPG";

const fallbackGallery = [
  { id: "local-1", acf: { image: img1, caption: "Uganda-Saxony Workshop Session: Engaging stakeholders and participants." } },
  { id: "local-2", acf: { image: img2, caption: "Community and school representatives discussing collaboration areas." } },
  { id: "local-3", acf: { image: img3, caption: "Group presentations on SDG 17 and civil society partnership." } },
  { id: "local-4", acf: { image: img4, caption: "Interactive knowledge exchange during the workshop." } },
  { id: "local-5", acf: { image: img5, caption: "Networking and cross-border partnership development." } },
  { id: "local-6", acf: { image: img6, caption: "Coordinating teams from KWDT and ENS during joint sessions." } },
];

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/gallery"
        );
        if (isMounted && response.data && response.data.length > 0) {
          setImages(response.data);
          setSelectedImage(response.data[0]?.acf?.image || null);
          setSelectedCaption(response.data[0]?.acf?.caption || "");
        } else if (isMounted) {
          setImages(fallbackGallery);
          setSelectedImage(fallbackGallery[0].acf.image);
          setSelectedCaption(fallbackGallery[0].acf.caption);
        }
      } catch (error) {
        console.warn("Using local workshop gallery fallback", error);
        if (isMounted) {
          setImages(fallbackGallery);
          setSelectedImage(fallbackGallery[0].acf.image);
          setSelectedCaption(fallbackGallery[0].acf.caption);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchImages();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image.acf?.image || "");
    setSelectedCaption(image.acf?.caption || "");
  };

  return (
    <>
      <CustomSlider />
      <section className="container gallery-section-head gx-0">
        <div className="eventsTitle">
          <h2 className="sectionHeader">Frames of Inspiration</h2>
          <p className="sectionParaText">
            Discover the visual moments, milestones, and collaborations that move us.
          </p>
        </div>
      </section>

      <section className="container gallery-section">
        {loading ? (
          <div className="py-5 text-center">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading gallery...</span>
            </div>
            <p className="mt-2 text-muted">Loading photographs...</p>
          </div>
        ) : (
          <div className="gallery-container">
            {/* Left column: Scrollable 2-column thumbnail grid */}
            <div className="thumbnails-column">
              <div className="thumbnail-grid">
                {images.map((image) => {
                  const isCurrent = selectedImage === image.acf?.image;
                  return (
                    <div
                      key={image.id}
                      className={`thumbnail-item ${isCurrent ? "active-thumbnail" : ""}`}
                      onClick={() => handleImageClick(image)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleImageClick(image);
                        }
                      }}
                      aria-label={image.acf?.caption || "View image"}
                    >
                      <img
                        src={image.acf?.image}
                        alt={image.acf?.caption || "Gallery thumbnail"}
                        className="thumbnail-image"
                        loading="lazy"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right column: Selected image display */}
            <div className="image-display-column">
              {selectedImage && (
                <div className="selected-image-wrapper">
                  <img
                    src={selectedImage}
                    alt={selectedCaption || "Selected gallery view"}
                    className="selected-image"
                  />
                  {selectedCaption && (
                    <p className="image-caption">{selectedCaption}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Gallery;
