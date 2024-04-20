import React from 'react'
// import singleData from "./skills-mock-data.json.json"
import { Link, useParams } from "react-router-dom";
import facePhoto from "../../../img/facePhoto.jpg"

function Main() {
  // const { store, actions } = useContext(Context);
  const params = useParams();


  return (


    <div className="single-container">
      <h4 className="single-title">Skill Swapper Information</h4>
      <div className="container single-data-container">
        <div className='left-column'>
          <img className="single-data-image" src={facePhoto} />
        </div>
        <div className="right-column">
          <h4>Enzo Altamirano</h4>
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className="nav-link-single" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
              <button className="nav-link-single" id="nav-skills-tab" data-bs-toggle="tab" data-bs-target="#nav-skills" type="button" role="tab" aria-controls="nav-skills" aria-selected="true">Skills</button>
              <button className="nav-link-single" id="nav-schedule-tab" data-bs-toggle="tab" data-bs-target="#nav-schedule" type="button" role="tab" aria-controls="nav-schedule" aria-selected="true">Schedule</button>
              <button className="nav-link-single" id="nav-reviews-tab" data-bs-toggle="tab" data-bs-target="#nav-reviews" type="button" role="tab" aria-controls="nav-reviews" aria-selected="true">Reviews</button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade profile-tab " id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
              <div className="profile-properties">
                <p>Country:</p>
                <p>City:</p>
                <p>Email:</p>
                <p>Phone</p>
                <p>Gender:</p>
                <p>Bio:</p>
              </div>
              <div className="profile-values">
                <p>Honduras</p>
                <p>San Pedro Sula</p>
                <p>enzo.altamirano@gmail.com</p>
                <p>+504-3355-5344</p>
                <p>Male</p>
                <p>Innovative Software Developer and Mechatronics Engineer with a commitment for crafting elegant solutions and enhancing user experiences. Leveraging a solid foundation in both frontend and backend development, combined with 2 years of experience in automotive engineering, hardware systems and electronics.</p>
              </div>
            </div>
            <div className="tab-pane fade skills-tab" id="nav-skills" role="tabpanel" aria-labelledby="nav-skills-tab" tabindex="0">
              <div className="skills">
                <div className="learning">
                  <h5 className="learning-title">Learning</h5>
                  <div className="learning-skills">
                    <h6>Skills</h6>
                    <p>Javascript:</p>
                    <p>Python:</p>
                    <p>Java:</p>
                    <p>React:</p>
                    <p>Data bases:</p>
                  </div>
                  <div className="learning-levels">
                    <h6>Level</h6>
                    <p>Basic</p>
                    <p>Intermediate</p>
                    <p>Advanced</p>
                    <p>Intermediate</p>
                    <p>Advanced</p>
                  </div>
                </div>
                <div className='tutoring'>
                  <h5 className="tutoring-title">Tutoring</h5>
                  <div className="tutoring-skills">
                    <h6>Skills</h6>
                    <p>Javascript:</p>
                    <p>Python:</p>
                    <p>Java:</p>
                    <p>React:</p>
                    <p>Data bases:</p>
                  </div>
                  <div className="tutoring-levels">
                    <h6>Level</h6>
                    <p>Basic</p>
                    <p>Intermediate</p>
                    <p>Advanced</p>
                    <p>Intermediate</p>
                    <p>Advanced</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade schedule-tab" id="nav-schedule" role="tabpanel" aria-labelledby="nav-schedule-tab" tabindex="0">
              <h4>Calendar feature in maintenance</h4>
            </div>
            <div className="tab-pane fade reviews-tab" id="nav-reviews" role="tabpanel" aria-labelledby="nav-reviews-tab" tabindex="0">
              <h4>Reviews feature in maintenance</h4>
            </div>
          </div>
        </div>
      </div>
      <Link to="/dashboard">
        <button type="button" className="nav-link-single fullborder">Return</button>
      </Link>
    </div>
  )
}

export default Main