import React, { useEffect, useContext, useState } from 'react'
import { Context } from "../../store/appContext";

function UpcommingCard({learner_name,tutor_name, skill_name, date, time, status, id }) {
    const { store, actions } = useContext(Context)
    
    return (
        <div className="pending-card">
            <div>
                {store.profile.name && <h5>{learner_name == store.profile.name ? "Learning:" : "Tutoring:"}</h5>}
                
            </div>
            <div className="pending-text-container upcomming">
                <div>
                {store.profile.name && <p className="pending-text"><strong>User:</strong> {learner_name == store.profile.name ? tutor_name : learner_name}</p>}
                    
                    <p className="pending-text"><strong>Skill:</strong> {skill_name}</p>
                </div>
                <div>
                    <p className="pending-text"><strong>Date:</strong> {date}</p>
                    <p className="pending-text"><strong>Time:</strong> {time}</p>
                </div>

                {/* <p className="pending-text"><strong>Status:</strong> Accepted</p> */}
            </div>

            {/* <div className="pending-card-inner">
                <button type="button" className="btn btn-danger pending-btn">Reject</button>
                <button type="button" className="btn btn-success pending-btn">Accept</button>
            </div> */}
        </div>
    )
}

export default UpcommingCard