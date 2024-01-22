import React from "react";
import "./joinStyles.css";
import Footer from "../components/Footer";
import { FaFilePdf } from "react-icons/fa";
import template from "../assets/files/profile_template.pdf";
import WizardForm from "../components/WizardForm";
import SchoolForm from "../components/SchoolForm";

const JoinProject = () => {
  return (
    <>
      <section className="joinContainer container-fluid">
        <div className="joinWrapper container"></div>
      </section>

      <section className="onlineTemplateSection container-fluid">
        <div className="container onlineTemplateWrapper">
          <h6>Become a participant</h6>
          <p>
            We are pleased that you are interested in a partnership with a Saxon
            partner. In order to identify a suitable partner, we ask you to
            answer the following questions. The answers are intended to give
            your prospective school/organisation partner a first impression. A
            similar questionnaire will be filled by your prospective school
            partner. This will ease future communication exchanges and enable us
            to identify and match partners with similar interests and goals
          </p>
        </div>
      </section>

      <section className="container-fluid">
        <div className="container">
          <h6 className="tableSectionsHead">Participant Registration Form</h6>
          <hr></hr>
          <SchoolForm />
          <hr></hr>
        </div>
      </section>

      <section className="templateDownloadSection container-fluid">
        <div className="container templateDownloadWrapper">
          <h6>Download template and create profile</h6>

          <div className="fileDownloadRow">
            <div className="fileIconWrapper">
              <FaFilePdf color="#f40f02" />
              <span>Uganda - Saxony School Profile Template</span>
            </div>

            <div className="fileDownloadButtonWrapper">
              <a href={template} download="profile_template" target="_blank">
                <button className="fileDownloadButton">Download</button>
              </a>
            </div>
          </div>

          <div className="fileDownloadRow">
            <div className="fileIconWrapper">
              <FaFilePdf color="#f40f02" />
              <span>Uganda - Saxony Organisations Profile Template</span>
            </div>

            <div className="fileDownloadButtonWrapper">
              <a href={template} download="profile_template" target="_blank">
                <button className="fileDownloadButton">Download</button>
              </a>
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

export default JoinProject;
