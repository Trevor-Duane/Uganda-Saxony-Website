import { useState, useEffect } from "react";
import "./EventDetails.css";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import axios from "axios";
import CustomSlider from "../../../components/Slider/CustomSlider";
import defaultEventImg from "../../../assets/event.JPG";

const EventDetails = () => {
  const params = useParams();
  const rawId = params.id || params.id_2ea070;
  const eventId = rawId ? rawId.split("_")[0] : null;

  const location = useLocation();
  const navigate = useNavigate();

  const [event, setEvent] = useState(location.state?.event || null);
  const [loading, setLoading] = useState(!location.state?.event);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (event) return;

    const fetchEvent = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/partnership-events"
        );
        const found = response.data?.find(
          (item) => String(item.id) === String(eventId)
        );
        if (found) {
          setEvent(found);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Failed to load event details", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (eventId) {
      fetchEvent();
    } else {
      setLoading(false);
      setError(true);
    }
  }, [eventId, event]);

  if (loading) {
    return (
      <>
        <CustomSlider />
        <div className="container py-5 text-center">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading event...</span>
          </div>
          <p className="mt-3 text-muted">Loading event details...</p>
        </div>
      </>
    );
  }

  if (error || !event) {
    return (
      <>
        <CustomSlider />
        <div className="container py-5 text-center">
          <h4 className="text-secondary mb-3">Event Not Found</h4>
          <p className="text-muted mb-4">
            We could not find the requested event or news item.
          </p>
          <Link to="/events" className="btn btn-success">
            &larr; Back to Events
          </Link>
        </div>
      </>
    );
  }

  const title = event.acf?.event_title || "Partnership Event";
  const date = event.acf?.event_date || "";
  const detailsHtml = event.acf?.event_details
    ? DOMPurify.sanitize(event.acf.event_details)
    : "<p>No description available.</p>";

  const img1 = event.acf?.featured_image_1 || defaultEventImg;
  const img2 = event.acf?.featured_image_2;

  return (
    <>
      <CustomSlider />
      <div className="container events-details-wrapper gx-0">
        <div className="mb-3">
          <button
            onClick={() => navigate("/events")}
            className="btn btn-outline-success btn-sm"
          >
            &larr; Back to Events
          </button>
        </div>
        <div className="event-details">
          <div className="event-image">
            <img
              className="img-thumbnail img-fluid"
              src={img1}
              alt={title}
              onError={(e) => {
                e.currentTarget.src = defaultEventImg;
              }}
            />

            {img2 && (
              <img
                className="img-thumbnail img-fluid d-none d-sm-block"
                src={img2}
                alt={`${title} alternate view`}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            )}
          </div>

          <div className="title-date">
            <h1 className="event-title">{title}</h1>
            {date && <p className="event-date">{date}</p>}
          </div>
          <hr />
          <div
            className="event-bio"
            dangerouslySetInnerHTML={{ __html: detailsHtml }}
          />
        </div>
      </div>
    </>
  );
};

export default EventDetails;
