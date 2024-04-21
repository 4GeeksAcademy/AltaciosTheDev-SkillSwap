import React, {useEffect, useState}from 'react';
import {
    BsNewspaper
} from "react-icons/bs";
import aitakingover from "../../../img/aitakingover.jpg"



const newsApi = async () => {
    const res = await fetch('https://newsapi.org/v2/everything?q=technology&from=2024-03-25&sortBy=publishedAt&apiKey=' + process.env.NEWS_API_KEY)

    const data = await res.json();
    const randomIndex = Math.floor(Math.random() * data.articles.length);

    setNews(data.articles[randomIndex]) 
    
   }
  


function NewsCard() {
    const [news, setNews] = useState();

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
                    <img className="news-image" src={aitakingover} /> {/* REEMPLAZAR SRC DE IMAGE CON SRC DE API */}
                    <button type="button" className="btn btn-primary">Read more</button>{/* REEMPLAZAR LINK CON LINK DE API */}
                </div>
            </div>
        </div>
    )
}

export default NewsCard