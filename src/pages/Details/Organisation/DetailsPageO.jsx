import { useState, useEffect } from "react";
import "./DetailsPageO.css";
import DOMPurify from "dompurify";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import defaultLogo from "../../../assets/logo512.png";

const DetailsPageO = () => {
  const params = useParams();
  const rawId = params.id || params.id_ee163d;
  const organisationId = rawId ? rawId.split("_")[0] : null;

  const location = useLocation();
  const navigate = useNavigate();

  const [organisation, setOrganisation] = useState(location.state?.organisation || null);
  const [loading, setLoading] = useState(!location.state?.organisation);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (organisation) return;

    const fetchOrganisation = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/organisations"
        );
        const found = response.data?.find(
          (item) => String(item.id) === String(organisationId)
        );
        if (found) {
          setOrganisation(found);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Failed to load organisation details", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (organisationId) {
      fetchOrganisation();
    } else {
      setLoading(false);
      setError(true);
    }
  }, [organisationId, organisation]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading organisation details...</span>
        </div>
        <p className="mt-3 text-muted">Loading organisation information...</p>
      </div>
    );
  }

  if (error || !organisation) {
    return (
      <div className="container py-5 text-center">
        <h4 className="text-secondary mb-3">Organisation Not Found</h4>
        <p className="text-muted mb-4">
          We could not find the requested organisation profile or the information is temporarily unavailable.
        </p>
        <Link to="/partner_cso" className="btn btn-success">
          &larr; Back to Partner CSOs
        </Link>
      </div>
    );
  }

  const logoSrc = organisation.acf?.organisation_logo || defaultLogo;
  const orgName = organisation.acf?.organisation_name || "Organisation Profile";
  const partnershipStatus = organisation.acf?.partnership_status || "Registered";
  const detailsHtml = organisation.acf?.organisation_details
    ? DOMPurify.sanitize(organisation.acf.organisation_details)
    : "<p>No details provided.</p>";

  return (
    <div className="container organisation-details-wrapper gx-0">
      <div className="mb-3">
        <button
          onClick={() => navigate("/partner_cso")}
          className="btn btn-outline-success btn-sm"
        >
          &larr; Back to Partner CSOs
        </button>
      </div>
      <div className="organisation-details">
        <div className="organisation-logo">
          <img
            className="img-thumbnail"
            src={logoSrc}
            alt={orgName}
            onError={(e) => {
              e.currentTarget.src = defaultLogo;
            }}
          />
        </div>
        <div className="organisation-name-status">
          <span className="organisation-name">{orgName}</span>
          <span className="organisation-status">({partnershipStatus})</span>
        </div>
        <div
          className="organisation-bio"
          dangerouslySetInnerHTML={{ __html: detailsHtml }}
        />
      </div>
    </div>
  );
};

export default DetailsPageO;
