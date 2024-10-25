import React from "react";
import { Link } from "react-router-dom";
import './ParticipantCard.css'

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
        {/* <div className="profileInfoBio" dangerouslySetInnerHTML={{__html: bio}}></div> */}
      </div>

      <div className="profileExtras">
        <Link className="profileButton" to={`/participant-details/${id}`}>
          View profile
        </Link>
      </div>
    </div>
  );
};
