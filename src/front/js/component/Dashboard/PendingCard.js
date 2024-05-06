import React from 'react'

function PendingCard({learner_name, skill_name, date, time, status}) {
    return (
        <div className="pending-card">
            <div>
                <h5>Details:</h5>
            </div>
            <div className="pending-text-container">
                <p className="pending-text"><strong>User:</strong> {learner_name}</p>
                <p className="pending-text"><strong>Skill:</strong> {skill_name}</p>
                <p className="pending-text"><strong>Date:</strong> {date}</p>
                <p className="pending-text"><strong>Time:</strong> {time}</p>
                <p className="pending-text"><strong>Status:</strong> {status}</p>
            </div>
            
            <div className="pending-card-inner">
                <button type="button" className="btn btn-danger pending-btn">Reject</button>
                <button type="button" className="btn btn-success pending-btn">Accept</button>
            </div>
        </div>
    )
}

export default PendingCard