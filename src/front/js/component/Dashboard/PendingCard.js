import React, { useEffect, useContext, useState } from 'react'
import { Context } from "../../store/appContext";

function PendingCard({ learner_name, skill_name, date, time, status, id }) {
    const { store, actions } = useContext(Context)

    return (
        <div className="pending-card">
            <div>
                <h5>Details:</h5>
            </div>
            <div className="pending-text-container upcomming">
                <div>
                    <p className="pending-text"><strong>User:</strong> {learner_name}</p>
                    <p className="pending-text"><strong>Skill:</strong> {skill_name}</p>
                </div>
                <div>
                    <p className="pending-text"><strong>Date:</strong> {date}</p>
                    <p className="pending-text"><strong>Time:</strong> {time}</p>
                </div>
            </div>
            <div className="pending-card-inner">
                <button type="button" className="edit-btn pending-btn" onClick={() => actions.editSession("Rejected", id)}>Reject</button>
                <button type="button" className="pending-btn positivePending-btn" onClick={() => actions.editSession("Accepted", id)}>Accept</button>
            </div>
        </div>
    )
}

export default PendingCard