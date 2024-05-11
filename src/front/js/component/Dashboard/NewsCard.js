import React, { useEffect, useState } from 'react';
import {
    BsNewspaper
} from "react-icons/bs";
import aitakingover from "../../../img/aitakingover.jpg"

function NewsCard() {
    const [news, setNews] = useState("");
    const [newsError, setNewsError ] = useState("")

    const newsApi = async () => {
        try {
            const res = await fetch(process.env.BACKEND_URL + '/api/news')
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data)
            }
            if (data.articles && data.articles.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.articles.length);
                setNews(data.articles[randomIndex]);
            } 
        }
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        newsApi()
    }, [])

    return (
        <div className="news">
            <div>
                <h4>Trending</h4>
                <div className="dashboard-card news-card">
                    <div className="dashboard-card-inner">
                        <h5> {news ? news.title : "Loading title:"}</h5>
                        <BsNewspaper className="card_icon new-icon" />
                    </div>
                    <img className="news-image" src={news ? news.urlToImage : aitakingover} />
                    <button type="button" className="learn-more-btn news-btn"><a href={news && news.url} target="_blank">Read More</a></button>
                </div>
            </div>
        </div>
    )
}

export default NewsCard