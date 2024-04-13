import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const Login = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container-fluid pt-3 pb-3">
            <div className="row">
                <div className="col-6">
                    <div className="text-center">
                        <div className="pb-2">
                            <h2>Welcome to SkillSwap</h2>
                            <a>Don't have an account? </a>
                            <a href="/register" class="link-underline-primary">Create an account</a>
                        </div>
                        <div>
                            <p><input type="email" placeholder="Your e-mail" /></p>
                            <p><input type="password" placeholder="Password" /></p>
                        </div>
                        <div>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Remember me
                                </label>
                        </div>
                        <div className="pt-2">
                        <button type="button" class="btn btn-danger">Login</button>
                        </div>
                    </div>
                </div>
                <div className="col-6 text-center">
                <img src={rigoImageUrl} alt="..." />
                </div>

            </div>
        </div>
    );
};