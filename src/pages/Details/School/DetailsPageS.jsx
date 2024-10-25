import React from "react";
import "./DetailsPageS.css";
import DOMPurify from 'dompurify'
import { useLocation, useNavigate, useParams } from "react-router-dom";

const DetailsPageS = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const school = location.state?.school;

  const defaultUrl = "https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/08/image-placeholder.png";


  return (
    <div className="container school-details-wrapper gx-0">
      <div className="school-details">
        <div className="school-badge">
          <img className="img-thumbnail" src={school.acf.badge || defaultUrl} alt="" />
        </div>
        <div className="school-name-status">
        <span className="school-name">{school.acf.name}</span>
        <span className="school-partnership-status">({school.acf.partnership_status})</span>
        </div>
        <p className='school-bio' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(school.acf.details)}}></p>
      </div>
    </div>
  );
};

export default DetailsPageS;
