import React from "react"
import personLogo from "../../../img/personLogo.png"
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const TutorCard = ({ name, skill, level, role }) => {
    return (
        <div className="dashboard-card">
            <div className="tutor-card-header">
                <h5 className="tutor-card-title">{name}</h5>
                <BsStarFill className="tutor-card-icon icon-favorite" />
            </div>
            <div className="dashboard-card-inner">
                <img src={personLogo} className="tutor-img" />
                <div className="tutor-text-container">
                    <p className="tutor-text"><strong>Skill:</strong> {skill}</p>
                    <p className="tutor-text"><strong>Level:</strong> {level}</p>
                    <p className="tutor-text"><strong>Role:</strong> {role}</p>
                </div>
            </div>
            <Link to="/single/1">
                <button type="button" className="btn btn-primary tutor-btn">Contact</button>
            </Link>
        </div>
    )
}

