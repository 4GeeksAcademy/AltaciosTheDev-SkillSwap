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

    const TitleRegister = ["General Infomation", "Region", "Interestes Skills"];

    const Pageregister = () => {
        if (page === 0) {
            return <Register />
        } else if (page === 1) {
            return <Register2 />
        } else {
            return <Register3 />
        }
    };
    return (
        <div className="backimage">
            
                    <div className="col-4">
                        <div className="backcard">
                            <div className="cardregister">
                            <div>
                                <h1>{TitleRegister[page]}</h1>
                            </div>
                            <div>
                                {Pageregister()}
                            </div>
                            <div className="footer">
                                <button disabled={page == 0} onClick={() => {

                                    setpage((currpage) => currpage - 1);
                                }}>Previous</button>
                                <button className="btn bnt-succes" onClick={() => {
                                    if (page === TitleRegister.length - 1) {
                                        alert("Register Succes");
                                    } else {
                                        setpage((currpage) => currpage + 1);
                                    }
                                }}>{page === TitleRegister.length - 1 ? "Submit Register" : "Next"}
                                </button>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                
        </div>


    );
};