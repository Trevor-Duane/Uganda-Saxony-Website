import React from "react";
import Footer from "../components/Footer";
import { organisations } from "../components/OrganisaationData";
import "./resourceStyles.css";
import { useParams } from "react-router-dom";

const ResourceDetailsPage = () => {
  const [organisation_name, setOrganisation_name] = React.useState("");
  const [organisation_image, setOrganisation_image] = React.useState("");
  const [organisation_type, setOrganisation_type] = React.useState("");
  const [actor_type, setActor_type] = React.useState("");
  const [organisation_bio, setOrganisation_bio] = React.useState("");

  const { id } = useParams();

  React.useEffect(() => {
    const fetchOrganisation = () => {
      const result = organisations.filter(
        (organisation) => organisation.id === id
      );
      setOrganisation_name(result[0].organisation_name);
      setOrganisation_image(result[0].image);
      setOrganisation_type(result[0].organisation_type);
      setActor_type(result[0].actor_type);
      setOrganisation_bio(result[0].bio);
    };

    fetchOrganisation();
  }, [id]);
  return (
    <>
      <section className="resourcesContainerDetail container-fluid">
        <div className="resourcesWrapperDetail container">
          <h6 className="resourceTitleDetail">RESOURCE CENTER</h6>
        </div>
      </section>

      <section className="resourceContentSectionDetail container-fluid">
        <div className="container resourceContentWrapperDetail">
          <div className="participantTitle">
            <h6>Participating Organisation in Uganda</h6>
          </div>

          <div className="organisationDetailsLevel">
            <div className="organisationDetailsImage">
              <img className="img-fluid" alt="" src={organisation_image} />
            </div>
            <div className="organisationDetailsName">
              <h6>{organisation_name}</h6>
            </div>
            <div className="organisationDeailsType">
              <h6>
                {actor_type} {organisation_type}
              </h6>
            </div>
            <div className="organisationDetailsBio">
              <p>{organisation_bio}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid footerContainer">
        <Footer />
      </section>
    </>
  );
};

export default ResourceDetailsPage;
