import React from "react";
import CookieConsent from "react-cookie-consent";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaBookmark,
  FaFacebook,
  FaFile,
  FaInstagram,
  FaLink,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import CustomSlider from "../../components/Slider/CustomSlider";
import EventsCard from "../../components/EventsCard/EventsCard";

const Home = () => {
  const [active, setActive] = React.useState("cso");
  const [events, setEvents] = React.useState([]);

  const defaultUrl =
    "https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/08/logo512.png";

  const fetchMostRecentEvent = () => {
    axios
      .get(
        `https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/partnership-events`
      )
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    fetchMostRecentEvent();
  }, []);
  return (
    <>
      <CustomSlider />
      <section className="container-fluid aboutContainer gx-0">
        <div className="container aboutSection">
          <div className="row aboutRow">
            <div className="col-md-12 col-sm-12">
              <h6 className="sectionHeader">
                About the Uganda - Saxony Partnership
              </h6>
              <p className="sectionParaText">
                The Uganda-Saxony Partnership is funded by the Free State of
                Saxony, through the Entwicklungspolitisches Netzwerk Sachsen,
                ENS e.V (Development Policy Network Saxony); The partnership
                project seeks to strengthen cooperation of actors in Uganda and
                Saxony that work in different areas of sustainable development
                including Civil Society Organisations (CSOs), schools, cultural
                institutions sciences, business sector and municipalities
                interested in social and sustainable development. The project
                directly contirbutes to the implementation of SDG 17:
                “Partnerships to achieve the Sustainable Development Goals”
              </p>

              <div>
                <Link to="/about_us" className="sectionLink">
                  <FaLink color="#1E8E2C" size={18} />
                  <span className="linkText">Read more..</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid membersContainer">
        <div className="container membersWrapper gx-0">
          <h6 className="sectionHeader">Coordinating Partners</h6>
          <p className="sectionParaText">
            The Uganda-Saxony partnership project is coordinated by Katosi Women
            Development Trust(KWDT) in uganda Entwicklungspolitische Netzwerk
            Sachsen e.V. (ENS) in Germany
          </p>
          <div className="member-wrapper">
            <div>
              <img
                src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/07/ENS_LOGO_Official.png"
                height="240"
                width="240"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/07/katosi-logo.png"
                height="240"
                width="240"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/08/Group-50-1.png"
                height="240"
                width="240"
                alt=""
              />
            </div>
            
          </div>
        </div>
      </section>

      <section className="container-fluid galleryContainer">
        <div className="container galleryWrapper gx-0">
        <h6 className="sectionHeader">Featured Events</h6>
          <p className="sectionParaText text-dark">
          Catch the Most Exciting Happenings Coming Up
          </p>
          <hr/>
          <div>
            {events.length !== 0 ? (
              <div>
                {events?.slice(0, 3).map((event, index) => (
                  <EventsCard key={event.id} event={event} />
                ))}

                <div>
                  <Link to="/events" className="sectionLink">
                    <FaLink color="#1E8E2C" size={18} />
                    <span className="linkText">View all events</span>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="newzTop emptyNewzTop">
                <span>No Recent Events</span>
              </div>
            )}
          </div>
        </div>
      </section>
      <CookieConsent
        location="bottom"
        overlay
        enableDeclineButton
        flipButtons
        buttonText="I Understand"
        cookieName="usersData"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
    </>
  );
};

export default Home;
