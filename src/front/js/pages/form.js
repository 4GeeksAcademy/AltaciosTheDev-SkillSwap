import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Register } from "./register";
import { Register2 } from "./register2";
import { Register3 } from "./register3";
import { Register4 } from "./register4";
import "../../styles/loginst.css";





export const Form = () => {
    const [page, setPage] = useState(0);
    // const navigate = useNavigate();
    const { actions } = useContext(Context);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [number, setNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [name, setUsername] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [bio, setBio] = useState('');


    // Function to handle moving to the next registration step
    const nextPage = () => {
          console.log({
            "password":password,
            "email":email,
            "number":number,
            "name":name,
            "gender":gender,
            "country":country,
            "city":city
        });
        
        setPage(page + 1);

      
    };

    // Function to handle moving to the previous registration step
    const prevPage = () => {
        setPage(page - 1);
        console.log(page - 1);

    };

    // Render the appropriate register component based on the current step
    const renderRegisterStep = () => {
        switch (page) {
            case 0:
                return <Register
                    nextPage={nextPage}
                    password={password}
                    setPassword={setPassword}
                    email={email}
                    setEmail={setEmail}
                    confirmpassword={confirmpassword}
                    setConfirmpassword={setConfirmpassword}
                    number={number}
                    setNumber={setNumber}
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                    name={name}
                    setUsername={setUsername}

                />;
            case 1:
                return <Register2
                    gender={gender}
                    setGender={setGender}
                    country={country}
                    setCountry={setCountry}
                    city={city}
                    setCity={setCity}
                    nextPage={nextPage}
                    prevPage={prevPage}
                />;
            case 2:
                return <Register3 nextPage={nextPage} prevPage={prevPage}
                />;
            case 3:
                return <Register4 prevPage={prevPage}/>;
            default:
                return null;
        }
    };





    return (
        <div className="backimage">

            <div className="col-5">
                <div className="backcard">
                    <div className="cardregister">
                        <div>
                            <h1>Register</h1>
                        </div>
                        <div>
                            {renderRegisterStep()}
                        </div>
                    </div>
                </div>

            </div>

        </div>


    );
};