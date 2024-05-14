import React, { useContext} from "react"
import personLogo from "../../../img/personLogo.png"
import femaleLogo from "../../../img/femaleLogo.png"
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";

import { CiStar }  from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../../store/appContext";

export const SkillCard = ({ user_name, skill_name, role, level, user_gender,category_name,category_image, getTutorProfile, addFavorite, id }) => {
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

    const { store, actions } = useContext(Context)
    //  console.log(store.userSkillsAssociations.map(x => x.user_id))
    //  console.log( store.profile.favorites.map(x => x.favorite_user_id))

     const currentFavorite =  store.profile?.favorites?.map(x => x.favorite_user_id).includes(id)

    return (
        <div className="dashboard-card">
            <div className="tutor-card-header">
                <h5 className="tutor-card-title">{skill_name}</h5>
                 {currentFavorite && <BsStarFill onClick={addFavorite}  className="tutor-card-icon icon-favorite" />}
                 {!currentFavorite && <BsStar onClick={addFavorite} className="tutor-card-icon icon-favorite"/>}
                
            </div>
            <div className="dashboard-card-inner">
                <img src={category_image} className="skill-img" />
                <div className="tutor-text-container">
                    <p className="tutor-text"><strong className="gris">Category:</strong> {category_name}</p>
                    <p className="tutor-text"><strong className="gris">Level:</strong> {level}</p>
                    <p className="tutor-text"><strong className="gris">Role:</strong> {role}</p>
                    <p className="tutor-text"><strong className="gris">User:</strong> {user_name} </p>
                </div>
            </div>
            <button type="button" className="tutor-btn learn-more-btn" onClick={goToTutorProfile}>Connect</button>
        </div>
    )
}

