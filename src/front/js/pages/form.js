import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Register } from "./register";
import { Register2 } from "./register2";
import { Register3 } from "./register3";





export const Form = () => {
    const [page, setpage] = useState(0);


    return (
        <div className="backimage">
            
                    <div className="col-4">
                        <div className="backcard">
                            <div className="cardregister">
                            <div>
                                <h1>General Infomation</h1>
                            </div>
                            <div>
                                <Register/>
                            </div>
        
                        </div>
                        </div>
                        
                    </div>
                
        </div>


    );
};