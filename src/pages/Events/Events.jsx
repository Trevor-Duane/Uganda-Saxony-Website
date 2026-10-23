import { useState, useEffect } from "react";
import "./Events.css";
import EventsCard from "../../components/EventsCard/EventsCard";
import axios from "axios";
import CustomSlider from "../../components/Slider/CustomSlider";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/partnership-events"
        );
        if (isMounted && response.data) {
          setEvents(response.data);
        }
      } catch (error) {
        console.warn("Could not load events from CMS", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchEvents();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <CustomSlider />
      <div className="container events-page gx-0">
        <section className="events-left">
          <div className="eventsTitle">
            <h1 className="sectionHeader">Events & News</h1>
            <p className="sectionParaText">
              Activities, workshops, and milestones across Uganda and Saxony
            </p>
          </div>

          <div className="events-content">
            {loading ? (
              <div className="py-5 text-center">
                <div className="spinner-border text-success" role="status">
                  <span className="visually-hidden">Loading events...</span>
                </div>
                <p className="mt-2 text-muted">Loading events...</p>
              </div>
            ) : events.length > 0 ? (
              events.map((event) => (
                <EventsCard key={event.id} event={event} />
              ))
            ) : (
              <div className="p-4 bg-light rounded text-center my-3">
                <p className="text-muted mb-0">
                  No upcoming events are scheduled at the moment. Please check back soon!
                </p>
              </div>
            )}
          </div>
        </section>

        <aside className="events-right" aria-label="Social media feeds">
          <div className="event-social-content">
            <p className="event-social-para">Follow Our Socials</p>
            <div className="social-icons-container">
              <a
                href="https://www.facebook.com/profile.php?id=100094606894335"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook page"
              >
                <FaFacebook className="socialIcons" size={24} color="#1e8e2c" />
              </a>

              <a
                href="https://twitter.com/uganda_saxony"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter handle"
              >
                <FaTwitter className="socialIcons" size={24} color="#1e8e2c" />
              </a>

              <a
                href="https://www.instagram.com/uganda_saxony_partnership/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram page"
              >
                <FaInstagram className="socialIcons" size={24} color="#1e8e2c" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Events;
