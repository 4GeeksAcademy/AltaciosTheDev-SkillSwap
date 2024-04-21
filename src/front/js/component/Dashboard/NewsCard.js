import React, {useEffect, useState}from 'react';
import {
    BsNewspaper
} from "react-icons/bs";
import aitakingover from "../../../img/aitakingover.jpg"






function NewsCard() {
    const [news, setNews] = useState();
    
    const newsApi = async () => {
        const res = await fetch( process.env.BACKEND_URL + '/api/news')
    
        const data = await res.json();
        const randomIndex = Math.floor(Math.random() * data.articles.length);
    
        setNews(data.articles[randomIndex]) 
        
       }

    useEffect(() => {
        newsApi()
    },[])

    return (
        <div className="news">
            <div>
                <h4>Trending</h4>
                <div className="dashboard-card news-card">
                    <div className="dashboard-card-inner">
                        <h5> {news && news.title}</h5>
                        <BsNewspaper className="card_icon" />
                    </div>
                    <img className="news-image" src={news && news.urlToImage} />
                    <button type="button" className="btn btn-primary"><a href={news && news.url}>Read More</a></button>
                </div>
            </div>
        </div>
    )
}

export default NewsCard