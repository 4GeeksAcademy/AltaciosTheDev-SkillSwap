import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Howitworks = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container text-center mb-2">
            <div className="instructions">

                <div className="hero">
                    
                    <h1><i class="fa-solid fa-grip-lines"></i>This is Skillswap Way<i class="fa-solid fa-grip-lines"></i></h1>
                    <p>Discover the simple steps to joining our Community of leearners and mentors</p>
                
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div>
                                <img src={rigoImageUrl} className="marco" alt="..." />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="text">
                                <h3>1) Sign Up <i class="fa-solid fa-right-to-bracket"></i></h3>
                                <a>Create your Skillswap account in just a few simple steps. Provide basic information ans set up your profile to showcase your skills an interests.</a>
                            </div>
                        </div>
                        <div className="container pt-4">
                            <div className="row">
                                <div className="col-6">
                                    <div className="text">
                                        <h3>2) Browse Skills <i class="fa-solid fa-list"></i></h3>
                                        <a>Explore a diverse range of skills offered by other users on SkillSwap. Use filters and search functionality to find skills that match your interests and learning goals.</a>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div>
                                        <img src={rigoImageUrl} className="marco" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container pt-4">
                            <div className="row">
                                <div className="col-6">
                                    <div>
                                        <img src={rigoImageUrl} className="marco" alt="..." />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="text">
                                        <h3>3) Find a Match <i class="fa-solid fa-magnifying-glass"></i></h3>
                                        <a>Our smart matching algorithm pairs you with compatible mentors or learners based on your preferences and expertise. Connect with your marched partner and shedule a skill-sharing session that works for both of you.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container pt-4">
                            <div className="row">
                                <div className="col-6">
                                    <div className="text">
                                        <h3>4) Learn and teach <i class="fa-solid fa-graduation-cap"></i></h3>
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
                                        <img src={rigoImageUrl} className="marco" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container pt-4">
                            <div className="row">
                                <div className="col-6">
                                    <div>
                                        <img src={rigoImageUrl} className="marco" alt="..." />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="text">
                                        <h3>5) Give and Receive Feedback <i class="fa-solid fa-comment"></i></h3>
                                        <a>After each session, leave feedback and
                                            ratings to help maintain the quality of interactions.
                                            Use feedback from others to improve
                                            your teaching skills and enhance
                                            your learning experience.</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container pt-4">
                            <div className="row">
                                 <div className="col-6">
                            <div className="text">
                                <h3>6) Grow and Connect <i class="fa-solid fa-people-group"></i></h3>
                                <a>Continue to expand your skills and knowledge
                                    through ongoing exchanges with
                                    members of the SkillSwap community.
                                    Build meaningful connections and contribute
                                    to a supportive learning network.</a>
                            </div>
                        </div>
                        <div className="col-6">
                            <div>
                                <img src={rigoImageUrl} className="marco" alt="..." />
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