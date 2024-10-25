import React from "react";
import "./DetailsPageO.css";
import DOMPurify from "dompurify";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const DetailsPageO = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const organisation = location.state?.organisation;

  const defaultUrl = "https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/08/image-placeholder.png";


  return (
    <div className="container organisation-details-wrapper gx-0">
      <div className="organisation-details">
        <div className="organisation-logo">
          <img
            className="img-thumbnail"
            src={organisation.acf.organisation_logo || defaultUrl}
            alt=""
          />
        </div>
        <div className="organisation-name-status">
          <span className="organisation-name">
            {organisation.acf.organisation_name}
          </span>
          <span className="organisation-status">
            ({organisation.acf.partnership_status})
          </span>
        </div>
        <p
          className="organisation-bio"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(organisation.acf.organisation_details),
          }}
        ></p>
      </div>
    </div>
  );
};

export default DetailsPageO;
