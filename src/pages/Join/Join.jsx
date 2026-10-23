import { useState, useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";
import "./Join.css";
import axios from "axios";
import schoolTemplatePdf from "../../assets/Template for School Partnership Profile.pdf";
import partnershipProfilePdf from "../../assets/Uganda-Saxony Partnership Profile.pdf";

const fallbackTemplates = [
  {
    id: "fb-1",
    acf: {
      template_lable: "School Partnership Profile Template (PDF)",
      profile_template: schoolTemplatePdf,
    },
  },
  {
    id: "fb-2",
    acf: {
      template_lable: "Civil Society & Organisation Profile Template (PDF)",
      profile_template: partnershipProfilePdf,
    },
  },
];

const Join = () => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchTemplates = async () => {
      try {
        const response = await axios.get(
          "https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/profile-templates"
        );
        if (isMounted && response.data && response.data.length > 0) {
          setTemplates(response.data);
        } else if (isMounted) {
          setTemplates(fallbackTemplates);
        }
      } catch (error) {
        console.warn("Using offline fallback templates", error);
        if (isMounted) setTemplates(fallbackTemplates);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchTemplates();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <section className="joinContainer container-fluid">
        <div className="joinWrapper container"></div>
      </section>

      <section className="onlineTemplateSection container-fluid py-4">
        <div className="container onlineTemplateWrapper">
          <h1 className="sectionHeader">Participate in the Partnership</h1>
          <p className="sectionParaText">
            We are pleased that you are interested in establishing a partnership with a
            Saxony or Ugandan counterpart. In order to identify a suitable partner, we ask you
            to download and fill out the appropriate profile template below.
          </p>
          <p className="sectionParaText">
            The answers provide your prospective school or organisation partner with an essential first
            impression. A reciprocal questionnaire is completed by candidate partners in Germany and Uganda.
            This facilitates meaningful communication, mutual alignment, and matching based on shared
            goals and thematic focus areas.
          </p>
          <p className="sectionParaText">
            Completed questionnaires should be sent to:{" "}
            <strong><a href="mailto:info@uganda-saxonypartnership.org">info@uganda-saxonypartnership.org</a></strong>.
          </p>
        </div>
      </section>

      <section className="container-fluid mb-5">
        <div className="container">
          <h2 className="sectionSubHeader mb-3">Participant Profile Templates</h2>
          <hr />

          {loading ? (
            <div className="py-4 text-center">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading templates...</span>
              </div>
            </div>
          ) : (
            <div className="templates-list">
              {templates.map((template) => {
                const label = template.acf?.template_lable || template.acf?.template_label || "Partnership Profile Template";
                const downloadUrl = template.acf?.profile_template || "#";

                return (
                  <div className="fileDownloadRow" key={template.id}>
                    <div className="fileIconWrapper">
                      <FaFilePdf color="#f40f02" size={26} />
                      <span className="sectionParaText fw-medium">{label}</span>
                    </div>

                    <div className="fileDownloadButtonWrapper">
                      <a
                        href={downloadUrl}
                        download
                        target="_blank"
                        rel="noreferrer noopener"
                        className="fileDownloadButton text-decoration-none"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Join;
