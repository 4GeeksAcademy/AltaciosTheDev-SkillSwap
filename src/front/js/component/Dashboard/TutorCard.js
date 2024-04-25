import React from "react"
import personLogo from "../../../img/personLogo.png"
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

export const TutorCard = ({ name, skill, level, role, getTutorProfile }) => {
    const navigate = useNavigate()
   // Define goToTutorProfile as async function
   const goToTutorProfile = async () => {
    try {
        // Call getTutorProfile to fetch the tutor's profile
        const tutorId = await getTutorProfile();

        // If tutorId is available, navigate to the tutor's profile
        if (tutorId) {
            navigate(`/single/${tutorId}`);
            console.log("made it into the tutor profile");
        }
    } catch (error) {
        console.error("Error while fetching tutor's profile:", error);
    }
}

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
            <button type="button" className="btn btn-primary tutor-btn" onClick={goToTutorProfile}>Contact</button>
        </div>
    )
}

