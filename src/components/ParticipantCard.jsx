import React from "react";
import "./header/componentStyles.css";
import { Link } from "react-router-dom";

export const ParticipantCard = ({
  image,
  organisation_type,
  organisation_name,
  actor_type,
  bio,
  id,
}) => {
  return (
    <div className="profileCardWrapper">
      <div className="profileOwner">
        <h6>{organisation_name}</h6>
      </div>
      <div className="profileInfo">
        <p>{actor_type}</p>
        <p>{bio}</p>
      </div>

      <div className="profileExtras">
        <Link className="profileButton" to={`/participant-details/${id}`}>
          View profile
        </Link>
      </div>
    </div>
  );
};
