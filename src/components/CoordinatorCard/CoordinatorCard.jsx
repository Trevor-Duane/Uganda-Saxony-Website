import React from "react";
import './CoordinatorCard.css';
import DOMPurify from 'dompurify';

const CoordinatorCard = ({coordinator}) => {
  const defaultImage = "https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/08/image-placeholder.png"

  return (
    <div className="coordinator-card">
      <div className="coordinator-img">
        <img
          src={coordinator.acf.photo || defaultImage}
          alt=""
        />
      </div>
      <div className="coordinator-info">
        <div className="coordinator-name">
          <p>{coordinator.acf.name}</p>
          <p>{coordinator.acf.role}</p>
        </div>

        <div className="coordinator-details">
          <span>Contact Details</span>
          <span>Email: {coordinator.acf.email}</span>
          <span>Phone: {coordinator.acf.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default CoordinatorCard;
