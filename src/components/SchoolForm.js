import React from 'react'

const SchoolForm = () => {
    return (
        <form>
            <h6 className="tableSectionsHead">Background Information about your school</h6>
            <div className="row mb-4">
                <div className="col-md-6 col-sm-12 mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="School name"
                    />
                </div>
                <div className="col-md-6 col-sm-12 mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="School location"
                    />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-6 col-sm-12 mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="School founder"
                    />
                </div>
                <div className="col-md-6 col-sm-12 mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="School head"
                    />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-6 col-sm-12 mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Year established"
                    />
                </div>
                <div className="col-md-6 col-sm-12 mt-2">
                    <select id="inputState" className="form-select custom-select">
                        <option selected>School type</option>
                        <option>Vocational Institute</option>
                        <option>Secondary School</option>
                        <option>Primary School</option>
                    </select>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-6 col-sm-12 mt-2">
                    <select id="inputState" className="form-select custom-select">
                        <option selected>Academic Curriculum</option>
                        <option>Vocational Institute</option>
                        <option>Secondary School</option>
                        <option>Primary School</option>
                    </select>
                </div>
                <div className="col-md-6 col-sm-12 mt-2">
                    <div class="input-group custom-file">
                        <label class="input-group-text" for="inputGroupFile">
                            Badge Image
                        </label>
                        <input
                            type="file"
                            className="custom-file-input form-control"
                            id="customFile"
                        />
                    </div>
                </div>
            </div>

            {/* school resgistration status */}
            <h6 className="tableSectionsHead">School registration status</h6>
            <div className="formSeperator mb-4"></div>


            <div className="row mb-4">
                <legend className="col-form-label col-sm-2 pt-0">
                    School Description
                </legend>
                <div className="col-md-4 col-sm-12 mb-4">
                    <div class="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                        />
                        <label className="form-check-label" for="defaultCheck1">
                            Boarding School
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                        />
                        <label className="form-check-label" for="defaultCheck1">
                            Day School
                        </label>
                    </div>
                </div>
                <legend className="col-form-label col-sm-2 pt-0">
                    Registration Status
                </legend>

                <div className="col-md-4 col-sm-12">
                    <div class="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                        />
                        <label className="form-check-label" for="defaultCheck1">
                            Public School
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                        />
                        <label className="form-check-label" for="defaultCheck1">
                            Private School
                        </label>
                    </div>
                </div>
            </div>
            <h6 className="tableSectionsHead">School population</h6>
            <div className="formSeperator mb-4"></div>

            <div className="row mb-4">
                <div className="col-md-4 col-sm-12 mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Students Age(Range)"
                    />
                </div>

                <div className="col-md-4 col-sm-12 mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Number of female"
                    />
                </div>

                <div className="col-md-4 col-sm-12 mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Number of male"
                    />
                </div>
            </div>

            {/* school free time and support services */}
            <h6 className="tableSectionsHead">Free time & support services</h6>
            <div className="formSeperator mb-4"></div>
            <div className="mb-2">
                <em className="text-success">Seperate the different options with commas</em>

            </div>

            <div className="row mb-4">
                <div className="col-md-4 col-sm-12 mt-2">
                    <label for="exampleFormControlTextarea1" className="form-label">
                        Extracurricular Activities
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="Enter activities..."
                        rows="3"
                    ></textarea>
                </div>

                <div className="col-md-4 col-sm-12 mt-2">
                    <label for="exampleFormControlTextarea1" className="form-label">
                        Main School Sport/s
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="Enter sports..."
                        rows="3"
                    ></textarea>
                </div>

                <div className="col-md-4 col-sm-12 mt-2">
                    <label for="exampleFormControlTextarea1" className="form-label">
                        Achievements and Awards
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="Enter awards..."
                        rows="3"
                    ></textarea>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-4 col-sm-12 mt-2">
                    <label for="exampleFormControlTextarea1" className="form-label">
                        Counselling & Guidance Programs <em>(optional)</em>
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="Enter programs..."
                        rows="3"
                    ></textarea>
                </div>

                <div className="col-md-4 col-sm-12 mt-2">
                    <label for="exampleFormControlTextarea1" className="form-label">
                        Reigious Programs/Activities<em>(optional)</em>
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="Enter programs..."
                        rows="3"
                    ></textarea>
                </div>

                <div className="col-md-4 col-sm-12 mt-2">
                    <label for="exampleFormControlTextarea1" className="form-label">
                        Number of Computers in School
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="Enter Number..."
                        rows="3"
                    ></textarea>
                </div>
            </div>

            {/* Partnership porjects and collaborations */}
            <h6 className="tableSectionsHead">Partnership porjects and collaborations</h6>
            <div className="formSeperator mb-4"></div>

            <div className="row mb-4">
                <div className="col">
                    <label for="exampleFormControlTextarea1" className="form-label">
                        Why would you like to engage in a school partnership and how do you interprete partnership?
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col">
                    <label for="exampleFormControlTextarea1" className="form-label">
                        Clearly state the areas of interest/objectives for the partnership. (What does the school want to achieve or areas where the school needs support in?)
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                </div>
            </div>


            <div className="row mb-4">
                <div className="col">
                    <label for="exampleFormControlTextarea1" className="form-label">
                        What values or interest are important to build the foundation of your school identity?
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                </div>
            </div>


            <div className="row mb-4">
                <div className="col">
                    <label for="exampleFormControlTextarea1" className="form-label">
                        Specific resources or contributions of the school to the project.
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col">
                    <label for="exampleFormControlTextarea1" className="form-label">
                        Names of the key teacher(s) responsible for this partnership
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col">
                    <label for="exampleFormControlTextarea1" className="form-label">
                        Is there something else you would like to tell us or your  potential partner school?
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="4"
                    ></textarea>
                </div>
            </div>

            {/* other contact Information section */}
            <h6 className="tableSectionsHead">Contact information for further information and inquiries</h6>
            <div className="formSeperator mb-4"></div>

            <div className="row mb-4">
                <div className="col-md-4 col-sm-12 mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="School Website Link"
                    />
                </div>

                <div className="col-md-4 col-sm-12 mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Email Address"
                    />
                </div>

                <div className="col-md-4 col-sm-12 mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Phone number"
                    />
                </div>


            </div>


            <div className="row mb-4">
                <div className="col-md-6 col-sm-12 mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Facebook profile"
                    />
                </div>

                <div className="col-md-6 col-sm-12 mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Instagram profile"
                    />
                </div>

                <div className="col-md-6 col-sm-12 mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Linkedin profile"
                    />
                </div>

                <div className="col-md-6 col-sm-12 mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Twitter profile"
                    />
                </div>
            </div>



        </form>
    )
}

export default SchoolForm