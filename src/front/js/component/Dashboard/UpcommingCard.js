import React from 'react'

function UpcommingCard({learner_name, skill_name, date, time, status, id }) {
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