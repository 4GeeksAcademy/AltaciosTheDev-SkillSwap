import React from 'react'
import {
    BsPersonWorkspace,
    BsMortarboardFill,
    BsFillPeopleFill
} from "react-icons/bs";

function AchievementCard() {
    return (
        <div className="dashboard-card">
            <div className="dashboard-card-inner">
                <h5 className="card-title">Taught:</h5>
                <BsPersonWorkspace className="card_icon" />
            </div>
            <h5>300</h5>
        </div>
    )
}

export default AchievementCard