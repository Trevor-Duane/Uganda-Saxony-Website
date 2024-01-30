import React from "react";
import "./eventStyles.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import EventCard from "../components/header/EventCard";
import { EventsData } from "../components/header/EventData";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

const Events = () => {
  const [gallery, setGallery] = React.useState([]);
  const [selected, setSelected] = React.useState("School Visit");

  const [events, setEvents] = React.useState([]);

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const eventTypesData = [
    {
      id: 1,
      name: "Pre-visits to schools/CBOs",
      value: "School Visit",
    },
    {
      id: 2,
      name: "Delegation visits",
      value: "Delegation Visit",
    },
    {
      id: 3,
      name: "Partner visits",
      value: "Partner Visit",
    },
  ];

  // const handleChange = (event) => {
  //   const selectedType = event.target.value
  //   setSelected(selectedType)
  // };

  React.useEffect(() => {
    console.log(selected);
  }, [selected]);

  const fetchEvents = () => {
    axios
      .get(
        `https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/partnership-events`
      )
      .then((response) => {
        // console.log("Events", response.data);
        setEvents(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  React.useEffect(() => {
    fetchEvents();
  }, []);

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
                  <select
                    name="event-types"
                    id="eventSelect"
                    value={selected}
                    onChange={(e) => {
                      setSelected(e.target.value)
                      setGallery([])
                    }}
                  >
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
                {events
                  .filter((data) => data.acf.event_type === selected)
                  .map((event, index) => (
                    <EventCard
                      key={event.id}
                      onClick={() => setGallery(event.acf.event_images)}
                      category_name={event.acf.event_type}
                      event_name={event.acf.event_title}
                      slang={event.acf.event_type}
                      date={event.acf.event_date}
                      bio={event.acf.event_details}
                    />
                  ))}
              </div>
            </div>
            <div className="col-8 snapsDisplay">
              {/* <h6>Event Gallery</h6> */}
              <div>
                {gallery.length !== 0 ? (
                  <div className="row imageRow">
                    {gallery &&
                      gallery.map((snap, index) => (
                        <div className="column imageColumn" key={snap.id}>
                          <img src={snap} className="columnImage" />
                        </div>
                      ))}
                  </div>
                ) : (
                  <div>
                    <span></span>
                  </div>
                )}
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
