import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const Register3=()=>{
    return(
        <div className="text-center">
        <div className="pt-3">
            <p><input type="text" placeholder="Country" /></p>
            <p><input type="text" placeholder="City" /></p>
            <p><input type="text" placeholder="ZIP Code" /></p>
        </div>
    </div>
    );
};