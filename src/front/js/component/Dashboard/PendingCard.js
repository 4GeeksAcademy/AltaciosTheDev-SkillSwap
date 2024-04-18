import React from 'react'

function PendingCard() {
    return (
        <div className="pending-card">
            <div>
                <h5>Details:</h5>
            </div>
            <div className="pending-text-container">
                <p className="pending-text"><strong>User:</strong> Enzo Altamirano</p>
                <p className="pending-text"><strong>Skill:</strong> Javascript</p>
                <p className="pending-text"><strong>Date:</strong> 04/03/2024</p>
                <p className="pending-text"><strong>Time:</strong> 10:30</p>
                <p className="pending-text"><strong>Status:</strong> Pending</p>
            </div>
            
            <div className="pending-card-inner">
                <button type="button" className="btn btn-danger pending-btn">Reject</button>
                <button type="button" className="btn btn-success pending-btn">Accept</button>
            </div>
        </div>
    )
}

export default PendingCard