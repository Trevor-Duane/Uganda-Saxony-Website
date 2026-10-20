import { useState, useEffect } from "react";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import CustomSlider from "../../components/Slider/CustomSlider";
import EventsCard from "../../components/EventsCard/EventsCard";
import ensLogo from "../../assets/ENS-Logo.png";
import kwdtLogo from "../../assets/KWDT_LOGO.jpg";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchMostRecentEvent = async () => {
      try {
        const response = await axios.get(
          "https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/partnership-events"
        );
        if (isMounted && response.data) {
          setEvents(response.data);
        }
      } catch (error) {
        console.warn("Could not fetch remote events, displaying empty or local notice", error);
      } finally {
        if (isMounted) setLoadingEvents(false);
      }
    };

    fetchMostRecentEvent();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <CustomSlider />

      {/* About Section */}
      <section className="container-fluid aboutContainer gx-0">
        <div className="container aboutSection">
          <div className="row aboutRow">
            <div className="col-md-12 col-sm-12">
              <h2 className="sectionHeader">
                About the Uganda - Saxony Partnership
              </h2>
              <p className="sectionParaText">
                The Uganda-Saxony Partnership is funded by the Free State of
                Saxony, through the Entwicklungspolitisches Netzwerk Sachsen
                (ENS e.V. / Development Policy Network Saxony). The partnership
                project seeks to strengthen cooperation between actors in Uganda and
                Saxony working across different areas of sustainable development,
                including Civil Society Organisations (CSOs), schools, cultural
                institutions, sciences, business sectors, and municipalities
                interested in social and ecological development. The project
                directly contributes to the implementation of SDG 17:
                &ldquo;Partnerships for the Goals.&rdquo;
              </p>

              <div className="mt-3">
                <Link to="/about_us" className="sectionLink">
                  <FaLink color="#1E8E2C" size={18} />
                  <span className="linkText">Read more about the partnership...</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coordinating Partners Section */}
      <section className="container-fluid membersContainer">
        <div className="container membersWrapper gx-0">
          <h2 className="sectionHeader">Coordinating Partners</h2>
          <p className="sectionParaText">
            The Uganda-Saxony partnership project is jointly coordinated by
            <strong> Katosi Women Development Trust (KWDT)</strong> in Uganda and
            <strong> Entwicklungspolitisches Netzwerk Sachsen e.V. (ENS)</strong> in Germany.
          </p>
          <div className="member-wrapper">
            <div className="partner-logo-card">
              <a href="https://www.einewelt-sachsen.de/en/ens-homepage/" target="_blank" rel="noreferrer">
                <img
                  src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/07/ENS_LOGO_Official.png"
                  height="120"
                  width="220"
                  alt="ENS - Entwicklungspolitisches Netzwerk Sachsen Logo"
                  className="img-fluid partner-logo-img"
                  onError={(e) => {
                    e.currentTarget.src = ensLogo;
                  }}
                />
              </a>
            </div>
            <div className="partner-logo-card">
              <a href="https://katosi.org/" target="_blank" rel="noreferrer">
                <img
                  src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/07/katosi-logo.png"
                  height="120"
                  width="220"
                  alt="Katosi Women Development Trust (KWDT) Logo"
                  className="img-fluid partner-logo-img"
                  onError={(e) => {
                    e.currentTarget.src = kwdtLogo;
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="container-fluid galleryContainer">
        <div className="container galleryWrapper gx-0">
          <h2 className="sectionHeader">Featured Events & News</h2>
          <p className="sectionParaText text-dark">
            Catch the most exciting happenings, workshops, and milestones.
          </p>
          <hr />
          <div>
            {loadingEvents ? (
              <div className="py-4 text-center">
                <div className="spinner-border text-success" role="status">
                  <span className="visually-hidden">Loading events...</span>
                </div>
                <p className="mt-2 text-muted">Checking for upcoming events...</p>
              </div>
            ) : events.length > 0 ? (
              <div>
                <div className="events-grid">
                  {events.slice(0, 3).map((event) => (
                    <EventsCard key={event.id} event={event} />
                  ))}
                </div>

                <div className="mt-3">
                  <Link to="/events" className="sectionLink">
                    <FaLink color="#1E8E2C" size={18} />
                    <span className="linkText">View all events &rarr;</span>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="emptyNewzTop py-4 text-center">
                <p className="text-muted">No recent events scheduled at this moment. Please check back soon!</p>
                <Link to="/about_us" className="btn btn-outline-success btn-sm mt-2">
                  Learn More About Our Work
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
