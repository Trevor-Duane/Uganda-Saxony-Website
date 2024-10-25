import React from "react";
import './OrganisationCard.css'
import DOMPurify from 'dompurify';
import { useNavigate } from "react-router-dom";

const OrganisationCard = ({ organisation }) => {
    const navigate = useNavigate();

    const navigateToDetails = ()=> {
        navigate(`/organisation_details/${organisation.id}_ee163d`,{ state: {organisation}})
      }
  return (
    <div className="col organisation-profile-card">
      <div className="organisation-info">
        <p className="organisation-info-name">{organisation.acf.organisation_name}</p>
        <p className='organisation-info-details' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(organisation.acf.organisation_details).slice(0, 400) + '...'}}></p>
      </div>
      <div className="organisation-info-button">
        <div className="organisation-type">
          <p>{organisation.acf.organisation_type}</p>
        </div>
        <button onClick={navigateToDetails}>More</button>
      </div>
    </div>
  );
};

export default OrganisationCard;
