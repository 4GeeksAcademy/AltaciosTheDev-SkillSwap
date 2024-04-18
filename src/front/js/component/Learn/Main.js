import React from 'react'
import {TutorCard} from "../Dashboard/TutorCard";
import skillsData from "./skills-mock-data.json.json"

function Main() {
 const userSkillElements = skillsData.map((userSkill) => {
  return <TutorCard key={userSkill.id} name={userSkill.Name} skill={userSkill.Skill} role={userSkill.Role} level={userSkill.Level}/>
 })

  return (
    <div className="learn-container">
      <h4 className="learn-title">Learn Main</h4>
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
