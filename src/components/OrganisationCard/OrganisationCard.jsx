import { useNavigate } from "react-router-dom";
import { getPlainTextSnippet } from "../../utils/textUtils";
import "./OrganisationCard.css";

const OrganisationCard = ({ organisation }) => {
  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`/organisation_details/${organisation.id}`, { state: { organisation } });
  };

  const name = organisation?.acf?.organisation_name || "Organisation";
  const rawDetails = organisation?.acf?.organisation_details || "";
  const snippet = getPlainTextSnippet(rawDetails, 350);
  const orgType = organisation?.acf?.organisation_type || "Organisation";

  return (
    <div className="col organisation-profile-card">
      <div className="organisation-info">
        <p className="organisation-info-name">{name}</p>
        <p className="organisation-info-details">{snippet}</p>
      </div>
      <div className="organisation-info-button">
        <div className="organisation-type">
          <p>{orgType}</p>
        </div>
        <button onClick={navigateToDetails} aria-label={`View details for ${name}`}>
          More
        </button>
      </div>
    </div>
  );
};

export default OrganisationCard;
