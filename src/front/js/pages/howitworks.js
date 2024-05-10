import React, { useContext } from "react";
import { Context } from "../store/appContext";
import connect from "../../img/connect.jpg";
import signup from "../../img/signup.png";
import browse from "../../img/browse.gif";
import match from "../../img/match.jpeg";
import learnAndTeach from "../../img/teachAndLearn.png";
import feedback from "../../img/feedback.jpg";


import "../../styles/howit.css";

export const Howitworks = () => {
    const { store, actions } = useContext(Context);
    return (

        <div className="instructions">
            <div className="container text-center">

                <div className="hero">
                    
                    <h1><i className="fa-solid fa-grip-lines "></i>This is Skillswap Way<i className="fa-solid fa-grip-lines rosa"></i></h1>
                    <p>Discover the simple steps to joining our Community of leearners and mentors</p>
                
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div>
                                <img src={signup} className="marco " alt="..." />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="text">
                                <h3 className="amarillo">1) Sign Up <i className="fa-solid fa-right-to-bracket rosa "></i></h3>
                                <a>Create your Skillswap account in just a few simple steps. Provide basic information ans set up your profile to showcase your skills an interests.</a>
                            </div>
                        </div>
                        <div className="container pt-4">
                            <div className="row">
                                <div className="col-6">
                                    <div className="text">
                                        <h3 className="amarillo">2) Browse Skills <i className="fa-solid fa-list rosa"></i></h3>
                                        <a>Explore a diverse range of skills offered by other users on SkillSwap. Use filters and search functionality to find skills that match your interests and learning goals.</a>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div>
                                        <img src={browse} className="marco" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container pt-4">
                            <div className="row">
                                <div className="col-6">
                                    <div>
                                        <img src={match} className="marco" alt="..." />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="text">
                                        <h3 className="amarillo">3) Find a Match <i className="fa-solid fa-magnifying-glass rosa"></i></h3>
                                        <a>Our smart matching algorithm pairs you with compatible mentors or learners based on your preferences and expertise. Connect with your marched partner and shedule a skill-sharing session that works for both of you.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container pt-4">
                            <div className="row">
                                <div className="col-6">
                                    <div className="text">
                                        <h3 className="amarillo">4) Learn and teach <i className="fa-solid fa-graduation-cap rosa"></i></h3>
                                        <a>Engage in 1-on-1 learning sessions
                                            with your mentor or mentee
                                            via video conferencing.
                                            Share your knowledge and expertise,
                                            and learn from others in a supportive
                                            and collaborative environment.</a>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div>
                                        <img src={learnAndTeach} className="marco" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container pt-4">
                            <div className="row">
                                <div className="col-6">
                                    <div>
                                        <img src={feedback} className="marco" alt="..." />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="text">
                                        <h3 className="amarillo">5) Give and Receive Feedback <i className="fa-solid fa-comment rosa"></i></h3>
                                        <a>After each session, leave feedback and
                                            ratings to help maintain the quality of interactions.
                                            Use feedback from others to improve
                                            your teaching skills and enhance
                                            your learning experience.</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container pt-4 pb-4">
                            <div className="row">
                                 <div className="col-6">
                            <div className="text">
                                <h3 className="amarillo">6) Grow and Connect <i className="fa-solid fa-people-group rosa"></i></h3>
                                <a>Continue to expand your skills and knowledge
                                    through ongoing exchanges with
                                    members of the SkillSwap community.
                                    Build meaningful connections and contribute
                                    to a supportive learning network.</a>
                            </div>
                        </div>
                        <div className="col-6">
                            <div>
                                <img src={connect} className="marco" alt="..." />
                            </div>
                        </div>
                            </div>
                        </div>


                       
                    </div>
                </div>
            </div>
        </div>
    );
};