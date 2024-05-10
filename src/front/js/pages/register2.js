import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/loginst.css";



export const Register2 = ({nextPage,prevPage,gender,setGender,country,setCountry,city,setCity,}) => {

    const navigate = useNavigate();
    const { actions } = useContext(Context);


    



    return (

        <div className="text-center">
            
               
                    
                        <h1>Complete your profile</h1>
                        <form >
                            <div>

                                <a>Select your gender </a>
                                <select className="loginput" name="gender" id="gender">
                                    <option value=" ">Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <a>Select your contry </a>
                                <select className="loginput text-center" name="contry" id="country">
                                    <option value=" ">Contry</option>
                                    <option value="Venezula">Venezuela</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="USA">United States of America</option>
                                    <option value="Spain">Spain</option>
                                </select>
                            </div>
                            <div>

                                <a>Type your city <input
                                    className="loginput text-center"
                                    type="text"
                                    placeholder="City"
                                //value={City}
                                //onChange={(e) => { setUsername(e.target.value); handleInputChange(); }}
                                //required
                                /></a>
                            </div>
                            
                            <div>
                                <button type="button" className="nextbutton" onClick={prevPage}>Previous</button>
                                <button type="button" className="nextbutton" onClick={nextPage}>Next</button>
                            </div>
                        </form>

    
                
            
        </div>



    );
};
