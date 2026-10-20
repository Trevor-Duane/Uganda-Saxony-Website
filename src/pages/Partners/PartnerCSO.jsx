import { useState, useEffect } from "react";
import axios from "axios";
import "./Partner.css";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import OrganisationCard from "../../components/OrganisationCard/OrganisationCard";

const CATEGORIES = [
  { id: "NGO", label: "Non-Governmental Organisations (NGOs)", apiStatus: "ngo" },
  { id: "CBO", label: "Community-Based Organisations (CBOs)", apiStatus: "cbo" },
];

const PartnerCSO = () => {
  const [organisations, setOrganisations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContent, setSelectedContent] = useState("NGO");
  const [partnershipStatus, setPartnershipStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let isMounted = true;
    const fetchOrganisations = async () => {
      try {
        const response = await axios.get(
          "https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/organisations"
        );
        if (isMounted && response.data) {
          setOrganisations(response.data);
        }
      } catch (err) {
        console.warn("Could not fetch organisations from CMS", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchOrganisations();
    return () => {
      isMounted = false;
    };
  }, []);

  const activeCategory = CATEGORIES.find((c) => c.id === selectedContent) || CATEGORIES[0];

  const filteredOrganisations = organisations.filter((org) => {
    const regStatus = (org.acf?.registration_status || "").toLowerCase();
    const matchCat = regStatus === activeCategory.apiStatus.toLowerCase();

    const pStatus = (org.acf?.partnership_status || "").toLowerCase();
    const matchPartnership =
      partnershipStatus === "all" ||
      (partnershipStatus === "in partnership" && pStatus === "in partnership") ||
      (partnershipStatus === "not in partnership" && pStatus === "not in partnership");

    const name = (org.acf?.organisation_name || "").toLowerCase();
    const matchSearch = searchTerm === "" || name.includes(searchTerm.toLowerCase());

    return matchCat && matchPartnership && matchSearch;
  });

  return (
    <div className="container partnership-page gx-0">
      <aside className="partner-side-links" aria-label="CSO categories">
        <div className="side-links">
          {CATEGORIES.map((cat) => {
            const isActive = selectedContent === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedContent(cat.id)}
                className={`side-link-btn ${isActive ? "side-link-active" : "side-link"}`}
              >
                <span>{cat.label}</span>
                {isActive && <MdOutlineKeyboardDoubleArrowRight />}
              </button>
            );
          })}
        </div>
      </aside>

      <main className="partner-content">
        <div className="content-column">
          {/* Header & Search */}
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
            <h2 className="sectionHeader mb-0">{activeCategory.label}</h2>
            <div className="partner-search-box">
              <input
                type="search"
                className="form-control form-control-sm"
                placeholder="Search by organisation name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search organisations"
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="buttons-row">
            <button
              type="button"
              onClick={() => setPartnershipStatus("all")}
              className={partnershipStatus === "all" ? "active-button" : ""}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setPartnershipStatus("in partnership")}
              className={partnershipStatus === "in partnership" ? "active-button" : ""}
            >
              In Partnership
            </button>
            <button
              type="button"
              onClick={() => setPartnershipStatus("not in partnership")}
              className={partnershipStatus === "not in partnership" ? "active-button" : ""}
            >
              Not In Partnership
            </button>
          </div>

          {/* Content Area */}
          <div className="content-row">
            {loading ? (
              <div className="py-5 text-center w-100">
                <div className="spinner-border text-success" role="status">
                  <span className="visually-hidden">Loading organisations...</span>
                </div>
                <p className="mt-2 text-muted">Loading partner organisations...</p>
              </div>
            ) : filteredOrganisations.length > 0 ? (
              <div className="schools-grid">
                {filteredOrganisations.map((org) => (
                  <OrganisationCard key={org.id} organisation={org} />
                ))}
              </div>
            ) : (
              <div className="py-4 text-center w-100 bg-light rounded p-4">
                <p className="text-muted mb-0">
                  {searchTerm
                    ? `No organisations matching "${searchTerm}" found in this category.`
                    : "No organisations found in this category."}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PartnerCSO;
