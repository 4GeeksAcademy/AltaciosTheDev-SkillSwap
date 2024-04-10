import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid hero-navbar p-3">    
        <div className="container ">
          <div className="fade-in">
        
          <div className=" mt-5">
            <h4><strong> <span className="barra">/</span> Learn, Teach, Connect, One Skill at a Time</strong></h4>
            <p>Exchange Skills and Knowledge 
			with a Global Community of Learners and Mentors</p>

            <button className="boton">Join Now!</button>
          </div>

          <div className="col d-sx-block d-sm-block d-md-block d-lg-block ">
          
          </div>
          


          </div>
        </div>

    </div>
	);
};
