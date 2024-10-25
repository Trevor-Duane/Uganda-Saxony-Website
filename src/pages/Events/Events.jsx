import React from "react";
import "./Events.css";
import EventsCard from "../../components/EventsCard/EventsCard";
import axios from "axios";
import CustomSlider from "../../components/Slider/CustomSlider";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Events = () => {
  const [events, setEvents] = React.useState([]);
  const [firstEvent, setFirstEvent] = React.useState({});

  React.useEffect(() => {
    const fetchEvents = async () => {
      axios
        .get(
          `https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/partnership-events`
        )
        .then((response) => {
          console.log("Events", response.data);
          setEvents(response.data);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    };

    fetchEvents();
  }, []);

  return (
    <>
      <CustomSlider />
      <div className="container events-page gx-0">
        <section className="events-left">
          <div className="eventsTitle">
            <h6 className="sectionHeader">Events/News</h6>
            <p className="sectionParaText">
              We proudly present, happening in and all around
            </p>
          </div>

          <div className="events-content">
            {events?.map((event, index) => (
              <EventsCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        <section className="events-right">
          <div className="event-social-content">
            <p className="event-social-para">Socials</p>
            <div>
            <a
                    href="https://www.facebook.com/profile.php?id=100094606894335"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook
                      className="socialIcons"
                      size={24}
                      color="#1e8e2c"
                    />
                  </a>

                  <a
                    href="https://twitter.com/uganda_saxony"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter
                      className="socialIcons"
                      size={24}
                      color="#1e8e2c"
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/uganda_saxony_partnership/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram
                      className="socialIcons"
                      size={24}
                      color="#1e8e2c"
                    />
                  </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Events;


// This has pagination

// import React from "react";
// import "./Events.css";
// import EventsCard from "../../components/EventsCard/EventsCard";
// import axios from "axios";
// import CustomSlider from "../../components/Slider/CustomSlider";
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// const Events = () => {
//   const [events, setEvents] = React.useState([]);
//   const [currentPage, setCurrentPage] = React.useState(1);
//   const eventsPerPage = 5; // Adjust this number to show more or fewer events per page

//   React.useEffect(() => {
//     const fetchEvents = async () => {
//       axios
//         .get(`https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/partnership-events`)
//         .then((response) => {
//           console.log("Events", response.data);
//           setEvents(response.data);
//         })
//         .catch((error) => {
//           console.log("Error", error);
//         });
//     };

//     fetchEvents();
//   }, []);

//   // Calculate paginated events
//   const indexOfLastEvent = currentPage * eventsPerPage;
//   const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
//   const paginatedEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

//   // Handle pagination
//   const handleNextPage = () => {
//     if (currentPage < Math.ceil(events.length / eventsPerPage)) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   return (
//     <>
//       <CustomSlider />
//       <div className="container events-page gx-0">
//         <section className="events-left">
//           <div className="eventsTitle">
//             <h6 className="sectionHeader">Events/News</h6>
//             <p className="sectionParaText">
//               We proudly present, happening in and all around
//             </p>
//           </div>

//           <div className="events-content">
//             {paginatedEvents.map((event) => (
//               <EventsCard key={event.id} event={event} />
//             ))}
//           </div>

//           {/* Pagination controls */}
//           <div className="pagination-controls">
//             <button onClick={handlePrevPage} disabled={currentPage === 1}>
//               Previous
//             </button>
//             <span>Page {currentPage} of {Math.ceil(events.length / eventsPerPage)}</span>
//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === Math.ceil(events.length / eventsPerPage)}
//             >
//               Next
//             </button>
//           </div>
//         </section>

//         <section className="events-right">
//           <div className="event-social-content">
//             <p className="event-social-para">Socials</p>
//             <div>
//               <a
//                 href="https://www.facebook.com/profile.php?id=100094606894335"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <FaFacebook className="socialIcons" size={24} color="#1e8e2c" />
//               </a>
//               <a
//                 href="https://twitter.com/uganda_saxony"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <FaTwitter className="socialIcons" size={24} color="#1e8e2c" />
//               </a>
//               <a
//                 href="https://www.instagram.com/uganda_saxony_partnership/"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <FaInstagram className="socialIcons" size={24} color="#1e8e2c" />
//               </a>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Events;

