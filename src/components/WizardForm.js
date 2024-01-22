import React from 'react'
import './header/componentStyles.css';
import FormWizard from "react-form-wizard-component";
import 'react-form-wizard-component/dist/style.css';

const WizardForm = () => {

    const [firstTabInput, setFirstTabInput] = React.useState("");
    const [firstTabInput1, setFirstTabInput1] = React.useState("");
    const handleComplete = () => {
        console.log("Form completed!");
        // Handle form completion logic here
    };
    // check validate tab
    const checkValidateTab = () => {
        console.log(firstTabInput);
        if (firstTabInput === "") {
            return false;
        }
        return true;
    };
    // error messages
    const errorMessages = () => {
        // you can add alert or console.log or any thing you want
        alert("Please fill in the required fields");
    };
    return (
        <>
            <FormWizard
                onComplete={handleComplete}
                layout="vertical"
                stepSize="xs"
                title="Participant Profile Form"
            >
                <FormWizard.TabContent
                    title="Background Information"
                >
                    <div className="row">
                        <div className="col">
                            <label className="profileForm-label form-label">School Name
                                <span style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}>*</span>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                value={firstTabInput}
                                onChange={(e) => setFirstTabInput(e.target.value)}
                            />
                        </div>

                        <div className="col">
                            <label className="profileForm-label form-label">School Type
                                <span style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}>*</span>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                value={firstTabInput}
                                onChange={(e) => setFirstTabInput1(e.target.value)}
                            />
                        </div>
                    </div>

                </FormWizard.TabContent>


                <FormWizard.TabContent
                    title="Brief Description of the school"
                    isValid={checkValidateTab()}
                    validationError={errorMessages}
                >
                    <h3>Second Tab</h3>
                    <p>Some content for the second tab</p>
                </FormWizard.TabContent>

                <FormWizard.TabContent title="School Registration Status">
                    <h3>Last Tab</h3>
                    <p>Some content for the last tab</p>
                </FormWizard.TabContent>

                <FormWizard.TabContent title="School Population">
                    <h3>Last Tab</h3>
                    <p>Some content for the last tab</p>
                </FormWizard.TabContent>

                <FormWizard.TabContent title="Acadmic Programs">
                    <h3>Last Tab</h3>
                    <p>Some content for the last tab</p>
                </FormWizard.TabContent>

                <FormWizard.TabContent title="Extracurricular Activities">
                    <h3>Last Tab</h3>
                    <p>Some content for the last tab</p>
                </FormWizard.TabContent>


                <FormWizard.TabContent title="Student Support Services">
                    <h3>Last Tab</h3>
                    <p>Some content for the last tab</p>
                </FormWizard.TabContent>
            </FormWizard>

        </>
    )
}

export default WizardForm