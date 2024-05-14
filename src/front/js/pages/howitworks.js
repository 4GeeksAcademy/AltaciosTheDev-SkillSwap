import React, { useContext } from "react";
import { Context } from "../store/appContext";
import connect from "../../img/connect.jpg";
import signup from "../../img/signup.png";
import browse from "../../img/browse.gif";
import match from "../../img/match.jpeg";
import learnAndTeach from "../../img/teachAndLearn.png";
import feedback from "../../img/feedback.jpg";

import { RiUser3Fill } from "react-icons/ri";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { TbBooks } from "react-icons/tb";
import { FaConnectdevelop } from "react-icons/fa";

import howitworkss from "../../img/howitworkss.gif";


import "../../styles/howit.css";

export const Howitworks = () => {
    const { store, actions } = useContext(Context);
    return (

        <div className="bg-azul-oscuro ">

            <div className="container container-card-howitwork d-flex flex-column justify-content-sm-center flex-lg-row justify-content-md-evenly p-4">

                <div className="py-5 ">
                    <h1 className="m-0 white">How it Works</h1>
                    <p className="white">learn how to use the platform in easy steps</p>
                    <button className="boton">Get Started</button>
                </div>

                <div>
                    <img className="rounded img-fluid" style={{height: "20rem", width: "30rem"}} src={howitworkss} />
                </div>
            </div>


            <div className="bg-azul-claro ">
                    {/* <h1 className="white text-center my-3 pt-4">Steps</h1> */}
              <div className="container d-flex flex-column flex-lg-row justify-content-md-between  p-4">

                <div className="row d-flex justify-content-center text-center">

                    <div className="d-flex align-items-center col-12 col-lg-3 col-md-6 justify-content-center flex-column rounded-1">
                        <h1 className=" my-5  my-md-3 my-md-3  text-center">1</h1>
                        <div className='bg-azul-oscuro p-3 text-center step-card shadow'>

                            <RiUser3Fill className="white icon-howi"/>
                            <h2 className='rosa my-3'>Sign up</h2>
                            <p className='p-info white'>Create your Skillswap account in just a few simple steps. Provide basic information ans set up your profile to showcase your skills</p>

                        </div>
                    </div>

                    <div className="d-flex align-items-center  col-12 col-lg-3 col-md-6 justify-content-center flex-column rounded-1">
                        <h1 className=" my-5  my-md-3 text-center">2</h1>
                        <div className='bg-azul-oscuro p-3 text-center step-card shadow'>

                            <HiMagnifyingGlass className="white icon-howi" />
                            <h2 className='rosa my-3'>Browse Skills</h2>
                            <p className='p-info white'>Explore a diverse range of skills  offered by other users on SkillSwap. Use filters and search functionality to find skills that match your interests and learning goals.</p>

                        </div>
                    </div>
                    <div className="d-flex align-items-center col-12 col-lg-3 col-md-6 justify-content-center flex-column rounded-1">
                        <h1 className=" my-5  my-md-3 text-center">3</h1>
                        <div className='bg-azul-oscuro p-3 text-center step-card shadow'>

                            <TbBooks className="white icon-howi" />
                            <h2 className='rosa my-3'>Learn and Teach</h2>
                            <p className='p-info white'>Engage in 1-on-1 learning sessions with your mentor or mentee via video conferencing. Share your knowledge and expertise, and learn from others in a supportive and collaborative environment.</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center col-12 col-lg-3 col-md-6 justify-content-center flex-column rounded-1">
                        <h1 className=" my-5  my-md-3 text-center">4</h1>
                        <div className='bg-azul-oscuro p-3 text-center step-card shadow'>

                            <FaConnectdevelop className="white icon-howi"/>
                            <h2 className='rosa my-3'>Connect</h2>
                            <p className='p-info white'>Continue to expand your skills and knowledge through ongoing exchanges with members of the SkillSwap community.Build meaningful connections and contribute to a supportive learning network.</p>
                        </div>
                    </div>
                </div>
                

                    

                </div>
            </div>
        </div>   
        




















        // <div className="instructions">
        //     <div className="container text-center">

        //         <div className="hero">
                    
        //             <h1><i className="fa-solid fa-grip-lines "></i>This is Skillswap Way<i className="fa-solid fa-grip-lines rosa"></i></h1>
        //             <p>Discover the simple steps to joining our Community of leearners and mentors</p>
                
        //         </div>
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-6">
        //                     <div>
        //                         <img src={signup} className="marco " alt="..." />
        //                     </div>
        //                 </div>
        //                 <div className="col-6">
        //                     <div className="text">
        //                         <h3 className="amarillo">1 Sign Up <i className="fa-solid fa-right-to-bracket rosa "></i></h3>
        //                         <a>Create your Skillswap account in just a few simple steps. Provide basic information ans set up your profile to showcase your skills an interests.</a>
        //                     </div>
        //                 </div>
        //                 <div className="container pt-4">
        //                     <div className="row">
        //                         <div className="col-6">
        //                             <div className="text">
        //                                 <h3 className="amarillo">2 Browse Skills <i className="fa-solid fa-list rosa"></i></h3>
        //                                 <a>Explore a diverse range of skills offered by other users on SkillSwap. Use filters and search functionality to find skills that match your interests and learning goals.</a>
        //                             </div>
        //                         </div>
        //                         <div className="col-6">
        //                             <div>
        //                                 <img src={browse} className="marco" alt="..." />
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>

        //                 <div className="container pt-4">
        //                     <div className="row">
        //                         <div className="col-6">
        //                             <div>
        //                                 <img src={match} className="marco" alt="..." />
        //                             </div>
        //                         </div>
        //                         <div className="col-6">
        //                             <div className="text">
        //                                 <h3 className="amarillo">3 Find a Match <i className="fa-solid fa-magnifying-glass rosa"></i></h3>
        //                                 <a>Our smart matching algorithm pairs you with compatible mentors or learners based on your preferences and expertise. Connect with your marched partner and shedule a skill-sharing session that works for both of you.</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="container pt-4">
        //                     <div className="row">
        //                         <div className="col-6">
        //                             <div className="text">
        //                                 <h3 className="amarillo">4 Learn and teach <i className="fa-solid fa-graduation-cap rosa"></i></h3>
        //                                 <a>Engage in 1-on-1 learning sessions
        //                                     with your mentor or mentee
        //                                     via video conferencing.
        //                                     Share your knowledge and expertise,
        //                                     and learn from others in a supportive
        //                                     and collaborative environment.</a>
        //                             </div>
        //                         </div>
        //                         <div className="col-6">
        //                             <div>
        //                                 <img src={learnAndTeach} className="marco" alt="..." />
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="container pt-4">
        //                     <div className="row">
        //                         <div className="col-6">
        //                             <div>
        //                                 <img src={feedback} className="marco" alt="..." />
        //                             </div>
        //                         </div>
        //                         <div className="col-6">
        //                             <div className="text">
        //                                 <h3 className="amarillo">5 Give and Receive Feedback <i className="fa-solid fa-comment rosa"></i></h3>
        //                                 <a>After each session, leave feedback and
        //                                     ratings to help maintain the quality of interactions.
        //                                     Use feedback from others to improve
        //                                     your teaching skills and enhance
        //                                     your learning experience.</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>

        //                 <div className="container pt-4 pb-4">
        //                     <div className="row">
        //                          <div className="col-6">
        //                     <div className="text">
        //                         <h3 className="amarillo">6 Grow and Connect <i className="fa-solid fa-people-group rosa"></i></h3>
        //                         <a>Continue to expand your skills and knowledge
        //                             through ongoing exchanges with
        //                             members of the SkillSwap community.
        //                             Build meaningful connections and contribute
        //                             to a supportive learning network.</a>
        //                     </div>
        //                 </div>
        //                 <div className="col-6">
        //                     <div>
        //                         <img src={connect} className="marco" alt="..." />
        //                     </div>
        //                 </div>
        //                     </div>
        //                 </div>


                       
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};