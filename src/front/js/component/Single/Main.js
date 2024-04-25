import React,{useContext} from 'react'
// import singleData from "./skills-mock-data.json.json"
import { Link} from "react-router-dom";
import facePhoto from "../../../img/facePhoto.jpg"
import personLogo from "../../../img/personLogo.png"
import femaleLogo from "../../../img/femaleLogo.png"

import DateTime from "./DateTime.js"
import { Context } from "../../store/appContext";
function Main() {
  const { store, actions } = useContext(Context);

  const tutorSkills = store.tutorProfile.skills.filter((skill) => {
    return skill.role == "Tutor"
  })
  const learnerSkills = store.tutorProfile.skills.filter((skill) => {
    return skill.role == "Learner"
  })
  console.log(tutorSkills)
  console.log(learnerSkills)

  return (
    <div className="single-container">
      <h4 className="single-title">Skill Swapper Information</h4>
      <div className="container single-data-container">
        <div className='left-column'>
          <img className="single-data-image" src={store.tutorProfile.gender == "Male"? personLogo : femaleLogo} />
        </div>
        <div className="right-column">
          <h3>{store.tutorProfile && store.tutorProfile.name}</h3>
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
                <p>{store.tutorProfile && store.tutorProfile.country}</p>
                <p>{store.tutorProfile && store.tutorProfile.city}</p>
                <p>{store.tutorProfile && store.tutorProfile.email}</p>
                <p>{store.tutorProfile && store.tutorProfile.number}</p>
                <p>{store.tutorProfile && store.tutorProfile.gender}</p>
                <p>{store.tutorProfile && store.tutorProfile.bio ? store.tutorProfile.bio : "Pending for user to write bio."}</p>
              </div>
            </div>
            <div className="tab-pane fade skills-tab" id="nav-skills" role="tabpanel" aria-labelledby="nav-skills-tab" tabindex="0">
              <div className="skills">
                <div className="learning">
                  <h5 className="learning-title">Learning</h5>
                  <div className="learning-skills">
                    <h6>Skills</h6>
                    {learnerSkills.map(learnerSkill => <p key={learnerSkill.id}>{`${learnerSkill.skill}:`}</p>)}
                  </div>
                  <div className="learning-levels">
                    <h6>Level</h6>
                    {learnerSkills.map(learnerSkill => <p key={learnerSkill.id}>{`${learnerSkill.level}`}</p>)}
                  </div>
                </div>
                <div className='tutoring'>
                  <h5 className="tutoring-title">Tutoring</h5>
                  <div className="tutoring-skills">
                    <h6>Skills</h6>
                    {tutorSkills.map(tutorSkill => <p key={tutorSkill.id}>{`${tutorSkill.skill}:`}</p>)}
                  </div>
                  <div className="tutoring-levels">
                    <h6>Level</h6>
                    {tutorSkills.map(tutorSkill => <p key={tutorSkill.id}>{`${tutorSkill.level}`}</p>)}
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade schedule-tab" id="nav-schedule" role="tabpanel" aria-labelledby="nav-schedule-tab" tabindex="0">
              <DateTime tutorSkills={tutorSkills}/> 
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