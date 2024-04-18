import React from "react"
import personLogo from "../../../img/personLogo.png"

export const TutorCard = () => {
    return (
        <div className="dashboard-card">
            <h5>Enzo Altamirano</h5>
            <div className="dashboard-card-inner">
                <img src={personLogo} className="tutor-img" />
                <div className="tutor-text-container">
                    <p className="tutor-text"><strong>Skill:</strong> Javascript</p>
                    <p className="tutor-text"><strong>Level:</strong> Intermediate</p>
                    <p className="tutor-text"><strong>Role:</strong> Tutor</p>
                    <button type="button" className="btn btn-primary tutor-btn">Contact</button>
                </div>
            </div>
        </div>
    )
}

