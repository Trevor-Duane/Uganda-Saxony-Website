import React from "react";
import { FaCalendar } from "react-icons/fa";
import "./componentStyles.css";

const EventCard = ({category_name, event_name, slang, date, bio, gallery, onClick}) => {
  return (
    <div className="eventCardWrapper">
      <div className="eventCardTitle">
        <h6>{event_name}</h6>
      </div>

      <div className="eventCategory">
        <span>{slang}</span>
        <button onClick={onClick}>Gallery</button>
      </div>

        <div className="eventDayTime">
          <FaCalendar color="#1e8e2c" size={12} />
          <span>{date}</span>
        </div>

      <div className="eventCardText">
        <div dangerouslySetInnerHTML={{__html: bio}}>
          
        </div>
      </div>      
    </div>
  );
};

export default EventCard;
