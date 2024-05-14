import React, { useContext, useState } from "react";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import sergey from "../../img/sergey.jpg";
import skillswapDark from "../../img/brand/SKILLSWAP-DARK.png";
import skillswapLight from "../../img/brand/SKILLSWAP-LIGHT.png";

import backs from "../../img/back2.png";
import "../../styles/home.css";
import "../../styles/loginst.css";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';



export const Login = () => {
    const { store, actions } = useContext(Context);
    const [ email, setEmail ] = useState("");
    const [password, setPassword]  = useState("");
    const navigate = useNavigate();



    console.log("this is your token", store.token);
    const handleCLick = async () => {
        if(email === "" || password === "") {
          Swal.fire({
            position: "center",
            icon: "error",
            title: 'All fields are required',
            background: "#263043",
            color: "#FFFFFF",
            showConfirmButton: false,
            timer: 1500
          });            
          return
        }

        else{
          console.log(email)
          console.log(password)
          const isLoged = await actions.login(email, password)
          console.log(isLoged)
          if(isLoged) {
              navigate("/dashboard")
          }
        }

    };


    return (
        <div class="container-login">
        <div class="left-login">
            <img src={skillswapDark} alt="Logo" class="logo-login"/>

            <form class="login-form">
                <h1 class="title-login">Sign in</h1> 
                <p class="text-login">Don't have an account? 
                    <Link to="/form" >
                        <span className="signup-button">Sign up</span>
                    </Link>
                </p>
                <Box
                component="form"
                sx={{
                  '& > :not(style)': { mt: 0, mb: 2, width: '100%' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="email" label="Email" variant="outlined"
                  type="email" placeholder="Your e-mail"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField id="password" label="Password" variant="outlined"
                  type="password" placeholder="Your e-mail"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>

                {/* <input type="email" placeholder="Your e-mail" class="input-login"/>
                <input type="password" placeholder="Password" class="input-login"/> */}
                <button type="button" class="button-login" onClick={handleCLick}>Login</button>
                <p class="text-login back-home">Want to go back?
                    <Link to="/" >
                        <span className="signup-button">Return home</span>
                    </Link>
                </p>
            </form>
        </div>
    </div>
    );
};