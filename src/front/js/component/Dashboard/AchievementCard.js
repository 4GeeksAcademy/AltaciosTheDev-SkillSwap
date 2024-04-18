import React from 'react'
;

function AchievementCard({title, icon}) {
    return (
        <div className="dashboard-card">
            <div className="dashboard-card-inner">
                <h5 className="card-title">{title}:</h5>
                {icon}
            </div>
            <h5>300</h5>
        </div>
    )
}

export default AchievementCard