import React from "react";
import Footer from "../components/Footer";
import "./resourceStyles.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const ResourceDetailsPage = () => {
  const [organisations, setOrganisations] = React.useState([]);

  const { id } = useParams();

  console.log("id id", id)

  const fetchOrganisations = () => {
    axios.get(`https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/organisations`)
    .then((response) => {
      console.log("All organisations", response.data)
      setOrganisations(response.data)
    })
    .catch((error) => {
      console.log(error)
    })

  };

  React.useEffect(() => {
    fetchOrganisations();
  }, []);

  const filtered = organisations.filter(organisation => {
    return organisation.id == id ;
  });

  console.log("filtered filtered", filtered)



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

          <div>
            {filtered.map((item, index) => (
              <div className="organisationDetailsLevel" key={item.id}>
              <div className="organisationDetailsImage">
                <img className="img-fluid" alt="" src={item.acf.organisation_logo} />
              </div>
              <div className="organisationDetailsName">
                <h6>{item.acf.orgainsation_name}</h6>
              </div>
              <hr></hr>
              <div className="organisationDeailsType">
                <h6>
                  {item.acf.organisation_type}
                </h6>
              </div>
              <div className="organisationDetailsBio" dangerouslySetInnerHTML={{__html: item.acf.organisation_details}}>
              </div>
            </div>
            ))}
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
