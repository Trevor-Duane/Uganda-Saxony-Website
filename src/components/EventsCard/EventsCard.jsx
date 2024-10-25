import React from "react";
import { useNavigate } from "react-router-dom";
import DOMPurify from 'dompurify';
import "./EventsCard.css";

const EventsCard = ({ event }) => {
  const navigate = useNavigate();

  const navigateToDetails = ()=> {
      navigate(`/event_details/${event.id}_2ea070`,{ state: {event}})
    }
  return (
    <div className="eventsCard" onClick={navigateToDetails}>
      <div className="eventCardTop">
        <div className="eventTitle">
          <p>{event.acf.event_title}</p>
        </div>

        <div className="eventDate">
          <p>{event.acf.event_date}</p>
        </div>
        
      </div>

      <div className="eventCardMiddle">
        <p className="eventBody" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(event.acf.event_details).slice(0, 300) + '...'}}></p>
      </div>

      <div className="eventCardBottom">
        <div className="eventSlang">
          <p>{event.acf.event_type}</p>
        </div>
        
      </div>
    </div>
  );
};

export default EventsCard;
