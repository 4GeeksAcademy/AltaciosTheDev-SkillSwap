import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import "../../styles/loginst.css";




export const Register3=(nextPage,prevPage)=>{
    return(
        <div className="text-center">
            <div>
                <h1>hola</h1>
                <a>Select your gender </a>
                                <select className="loginput" name="gender" id="gender" value={gender}>
                                    <option value=" ">Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
            </div>
            <button type="button" className="nextbutton" onClick={prevPage}>Previous</button>
            <button type="button" className="nextbutton" onClick={nextPage}>Next</button>
        </div>
    
    );
};