import React from 'react'
;

function AchievementCard({title, icon, count}) {
    return (
        <div className="dashboard-card">
            <div className="dashboard-card-inner">
                <h5 className="card-title">{title}:</h5>
                {icon}
            </div>
            <h4>{count}</h4>
        </div>
    )
}

export default AchievementCard