import React from "react";
import "./eventStyles.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import EventCard from "../components/header/EventCard";
import { EventsData } from "../components/header/EventData";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const Events = () => {
  const [gallery, setGallery] = React.useState([]);
  const [selected, setSelected] = React.useState("cso-visit");

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };


  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const eventTypesData = [
    {
      id:1,
      name: "Pre-visits to schools/CSOs",
      value:"cso-visit"
    },
    {
      id:2,
      name: "Delegation visits",
      value:"delegation"
    },
    {
      id:3,
      name: "Partner visits",
      value:"partner-visit"
    },
  ];

  return (
    <>
      <section className="eventsHero container-fluid">
        <div className="container eventsWrapper">
          <h6 className="eventsTitle">EVENTS</h6>
        </div>
      </section>

      <section className="filterComponent">
        <div className="container filterWrapper">
          <div className="row eventRow">
            <div className="col-4 eventsDisplay">
              <div className="filterRow">
                <div className="customSelect">
                  <label className="eventSelectLabel">Event Type</label>
                  <select name="event-types" id="eventSelect" onChange={handleChange}>
                   {eventTypesData.map((type, index) => (
                     <option value={type.value}>{type.name}</option>
                   ))}
                  </select>
                </div>

                <div className="filterButtonWrapper">
                  <button className="filterButton">Filter</button>
                </div>
              </div>

              <div className="eventCardDisplay">
                {(EventsData.filter((data) => data.category_name === selected)).map((event, index) => (
                  <EventCard
                    key={event.id}
                    onClick={() => setGallery(event.gallery)}
                    category_name={event.category_name}
                    event_name={event.event_name}
                    slang={event.slang}
                    date={event.date}
                    bio={event.bio}
                  />
                ))}
              </div>
            </div>
            <div className="col-8 snapsDisplay">
                  <h6>Event Gallery</h6>
              <div className="row imageRow">
                {gallery && gallery.map((snap, index) => (
                  <div className="column imageColumn" key={snap.id}>
                    <img src={snap.src} className="columnImage"/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid footerContainer">
        <Footer />
      </section>
    </>
  );
};

export default Events;
