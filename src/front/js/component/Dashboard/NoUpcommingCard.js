import React, { useEffect, useContext, useState } from 'react'
import { Context } from "../../store/appContext";

function NoPendingCard({ learner_name, skill_name, date, time, status, id }) {
    const { store, actions } = useContext(Context)

    return (
        <div className="pending-card">
            <div>
                <h5 >Nothing to show</h5>
            </div>
            <div className="pending-text-container upcomming">
                <div>
                    <p className="pending-text"></p>
                    <lh></lh>
                    <p className="pending-text">Sessions you requested to other users that were accepted & sessions you accepted with date and time yet to pass, will appear here.</p>
                </div>

            </div>
        </div>
    )
}

export default NoPendingCard