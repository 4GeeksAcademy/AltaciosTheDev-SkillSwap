import React, { useEffect, useContext } from 'react'
import { TutorCard } from "../Dashboard/TutorCard";
import skillsData from "./skills-mock-data.json.json"
import { Context } from "../../store/appContext";


function Main() {
  const { store, actions } = useContext(Context)

  useEffect(() => {
    actions.getAssociations()
  }, [])

  // Declare userSkillElements variable
  let userSkillElements = null;

  // Check if store.userSkillsAssociations is available
  if (store.userSkillsAssociations) {
    userSkillElements = store.userSkillsAssociations.map((association) => (
      <TutorCard
        key={association.id}
        name={association.user}
        skill={association.skill}
        role={association.role}
        level={association.level}
        gender={association.user_gender}
        getTutorProfile={() => actions.getTutorProfile(association.user_id)}
      />
    ));
  }

  return (
    <div className="learn-container">
      <h4 className="learn-title">What are you looking for?</h4>
      <div className="learn-input-container">
        <input className="learn-search" placeholder='Search Student' />
        <input className="learn-search" placeholder='Search Tutor' />
        <input className="learn-search" placeholder='Search Skill' />
        <input className="learn-search" placeholder='Search Date' />
        <input className="learn-search" placeholder='Search Time' />
        <input className="learn-search" placeholder='Search Status' />
      </div>
      <div className="learn-tutor-cards-container container">
        {userSkillElements}
      </div>
    </div>
  )
}

export default Main
