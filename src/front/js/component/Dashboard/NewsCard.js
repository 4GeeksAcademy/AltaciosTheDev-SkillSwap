import React from 'react';
import {
    BsNewspaper
} from "react-icons/bs";
import aitakingover from "../../../img/aitakingover.jpg"

function NewsCard() {
    return (
        <div className="news">
            <div>
                <h4>Trending</h4>
                <div className="dashboard-card news-card">
                    <div className="dashboard-card-inner">
                        <h5>AI is taking over:</h5>
                        <BsNewspaper className="card_icon" />
                    </div>
                    <img className="news-image" src={aitakingover} />
                    <button type="button" className="btn btn-primary">Read more</button>
                </div>
            </div>
        </div>
    )
}

export default NewsCard