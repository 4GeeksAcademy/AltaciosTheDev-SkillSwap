import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Register2 = ({ nextPage, prevPage, gender, setGender, country, setCountry, city, setCity, registerUser }) => {
    const navigate = useNavigate();
    const { actions } = useContext(Context);

    async function confirmUserRegister() {
        // Call your register action here
        const isUserRegistered = await registerUser()
        // Assuming isUserRegistered is properly defined and returned
        if (isUserRegistered) {
            nextPage(); // Call nextPage as a function
        }
    }

    return (
        <div className="text-center">
            <h1>Complete your profile</h1>
            <form>
                <div>
                    <a>Select your gender </a>
                    <select className="loginput" name="gender" id="gender" onChange={(e) => setGender(e.target.value)}>
                        <option value="">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <a>Select your country </a>
                    <select className="loginput text-center" name="country" id="country" onChange={(e) => setCountry(e.target.value)}>
                        <option value="">Country</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Mexico">Mexico</option>
                        <option value="USA">United States of America</option>
                        <option value="Spain">Spain</option>
                    </select>
                </div>
                <div>
                    <a>Type your city</a>
                    <input
                        className="loginput text-center"
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div>
                    <button type="button" className="nextbutton" onClick={prevPage}>
                        Previous
                    </button>
                    <button type="button" className="nextbutton" onClick={confirmUserRegister}>
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};