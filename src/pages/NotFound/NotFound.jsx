import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container not-found-container py-5 text-center">
      <div className="not-found-card p-5">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title mb-3">Page Not Found</h2>
        <p className="not-found-text text-muted mb-4">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/" className="btn btn-success px-4 py-2">
            Return to Home
          </Link>
          <Link to="/contact" className="btn btn-outline-success px-4 py-2">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
