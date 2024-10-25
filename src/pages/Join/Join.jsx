import React from "react";
import { FaFilePdf } from "react-icons/fa";
import './Join.css'
import axios from "axios";

const Join = () => {
  const [templates, setTemplates] = React.useState([]);

  const fetchTemplates = () => {
    axios
      .get(
        `https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/profile-templates`
      )
      .then((response) => {
        setTemplates(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    fetchTemplates();
  }, []);

  return (
    <>
      <section className="joinContainer container-fluid">
        <div className="joinWrapper container"></div>
      </section>

      <section className="onlineTemplateSection container-fluid">
        <div className="container onlineTemplateWrapper">
          <h6 className="sectionHeader">Participate</h6>
          <p className="sectionParaText">
            We are pleased that you are interested in a partnership with a
            Saxony partner. In order to identify a suitable partner, we ask you
            to download and fill the profile template. The answers are intended
            to give your prospective school/organisation partner a first
            impression. A similar questionnaire will be filled by your
            prospective school partner. This will ease future communication
            exchanges and enable us to identify and match partners with similar
            interests and goals.
          </p>
        </div>
      </section>

      <section className="container-fluid">
        <div className="container">
          <h6 className="sectionHeader">Participant Profile Templates</h6>
          <hr></hr>

          <div>
            {templates.map((template, index) => (
              <div className="fileDownloadRow" key={template.id}>
                <div className="fileIconWrapper">
                  <FaFilePdf color="#f40f02" size={24}/>
                  <span className="sectionParaText">{template.acf.template_lable}</span>
                </div>

                <div className="fileDownloadButtonWrapper">
                  <a
                    href={template.acf.profile_template}
                    download="profile_template"
                    target="_blank"
                  >
                    <button className="fileDownloadButton">Download</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="paddingSpace"></section>

      {/* <section className="container-fluid onlineSubmissionSection">
        <div className="container">
          <h6 className="tableSectionsHead">Submit Profile</h6>
          <hr></hr>

          <div className="fileUploadSection">
            <div class="mb-3">
              <label for="formFile" class="form-label fileUploadLabel">
                Profile Submission Section(PDF format Only)
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>

            <div className="d-flex flex-row justify-content-end fileUploadButtonWrapper">
              <button type="button" className="btn btn-secondary fileUploadButton">Submit</button>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Join;
