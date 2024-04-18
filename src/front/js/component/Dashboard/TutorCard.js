import React from "react"
import personLogo from "../../../img/personLogo.png"

export const TutorCard = () => {
    return (
        <div className="dashboard-card">
            <h5>Enzo Altamirano</h5>
            <div className="dashboard-card-inner">
                <img src={personLogo} className="tutor-img" />
                <div className="tutor-skill">
                    <p>Teaches: Javascript</p>
                    <p>Level: Intermediate</p>
                </div>
            </div>
            <button type="button" className="btn btn-primary tutor-btn">Contact</button>
        </div>
    )
}

