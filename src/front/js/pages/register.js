import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";



export const Register= ()=> {

    return (
        <div className="text-center">
            <div>
                <a>Have already an account?</a>
                <a href="/login" class="link-underline-primary">Login</a>
            </div>
            <div className="pt-3">
                <p><input type="email" placeholder="Your e-mail" /></p>
                <p><input type="email" placeholder="Confirm your e-mail" /></p>
                <p><input type="password" placeholder="Enter your password" /></p>
                <p><input type="password" placeholder="Confirm your password" /></p>
                <p><input type="text" placeholder="Your phone" /></p>
            </div>
        </div>

    );

};
