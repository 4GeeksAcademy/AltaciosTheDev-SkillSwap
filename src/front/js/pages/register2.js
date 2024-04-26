import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";



export const Register2=()=> {

    return (
        
                    <div className="text-center">
                        <div className="pt-3">
                            <p><input 
                            className="loginput" 
                            type="text" 
                            placeholder="Country" 
                            va
                            /></p>
                            <p><input className="loginput" type="text" placeholder="City" /></p>
                        </div>
                    </div>

                
    );
};
