import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import backs from "../../img/back2.png";
import "../../styles/home.css";
import "../../styles/loginst.css";
import { Link } from "react-router-dom";


export const Login = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="backimage">
            <div className="col-4">
                <div className="backcard">
                    <div className="cardlogin">
                        <div>
                            <h2>Welcome to SkillSwap</h2>
                            <a>Don't have an account? </a>
                            <a href="/form" class="link-underline-primary">Create an account</a>
                        </div>
                        <div className="pt-3">
                            <p><input type="email" placeholder="Your e-mail" /></p>
                            <p><input type="password" placeholder="Password" /></p>
                        </div>
                        <div>
                            <input class="form-check-input" type="checkbox" value=" " id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault"> Remember me</label>
                        </div>
                        <div className="pt-2">
                            <button type="button" class="btn btn-danger">Login</button>
                        </div>
                    </div>
                </div>

            </div>



        </div>

    );
};