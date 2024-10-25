import React from "react";
import './SchoolCard.css'
import DOMPurify from 'dompurify';
import { NavLink, useNavigate, useNavigation } from "react-router-dom";

const SchoolCard = ({ school }) => {
    const navigate = useNavigate();

    const navigateToDetails = ()=> {
        navigate(`/school_details/${school.id}_6532ec`,{ state: {school}})
      }
  return (
    <div className="col school-profile-card">
      <div className="school-info">
        <p className="school-info-name">{school.acf.name}</p>
        <p className='school-info-details' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(school.acf.details).slice(0, 400) + '...'}}></p>
      </div>
      <div className="school-info-button">
        <div className="school-type">
          <p>{school.acf.school_type}</p>
        </div>
        <button onClick={navigateToDetails}>More</button>
      </div>
    </div>
  );
};

export default SchoolCard;
