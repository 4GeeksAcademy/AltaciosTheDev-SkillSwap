import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import backs from "../../img/back2.png";
import "../../styles/home.css";
import "../../styles/loginst.css";



export const Login = () => {
    const { store, actions } = useContext(Context);
    const [ email, setEmail ] = useState("");
    const  [password, setPassword]  = useState("");
    const navigate = useNavigate();



    console.log("this is ur token", store.token);
    const handleCLick = async () => {
        const isLoged = await actions.login(email, password)
        if(isLoged) {
            navigate("/dashboard")
        }
    };


    return (
        <div className="backimage">
            <div className="col-4">
                <div className="backcard">
                    <div className="cardlogin">
                        <div>
                            <h2>Welcome to SkillSwap</h2>
                            <a>Don't have an account? </a>
                            <a href="/form" className="link-underline-primary">Create an account</a>
                        </div>
                        <div className="pt-3">
                            <p>
                            <input 
                                type="email" placeholder="Your e-mail" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}/>
                            </p>

                            <p>
                            <input 
                                type="password" placeholder="Password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                
                                />
                            </p>
                        </div>
                        <div>
                            <input className="form-check-input" type="checkbox" value=" " id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault"> Remember me</label>
                        </div>
                        <div className="pt-2">
                            <button onClick={handleCLick} type="button" className="btn btn-danger">Login</button>
                        </div>
                    </div>
                </div>

            </div>



        </div>

    );
};