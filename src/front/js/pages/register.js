import React, { useContext,useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link , Navigate, useNavigate} from "react-router-dom";
import Swal from 'sweetalert2'

import backs from "../../img/back2.png";
import "../../styles/home.css";
import "../../styles/loginst.css";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
export const Register= ({nextPage,password,setPassword,email,setEmail,confirmpassword,setConfirmpassword,number,setNumber,errorMessage,setErrorMessage,name,setUsername, setPage})=> {

    const navigate=useNavigate();
    const { store, actions } = useContext(Context);
   
    


    const handleInputChange=()=>{
        setErrorMessage('');
    };

   const handleFirstStep = () => {
        if(store.token){
          console.log(store.token)
          nextPage()
        }

        else if (name === '' || email === '' || password === '' || confirmpassword === '' || number === '') {
          Swal.fire({
            position: "center",
            icon: "error",
            title: 'All fields are required',
            background: "#263043",
            color: "#FFFFFF",
            showConfirmButton: false,
            timer: 1500
          });
        } else if (!email.includes("@") || !email.includes(".")) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: 'Email format incorrect',
            background: "#263043",
            color: "#FFFFFF",
            showConfirmButton: false,
            timer: 1500
          });

        }else if (password !== confirmpassword) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: 'Passwords do not match',
            background: "#263043",
            color: "#FFFFFF",
            showConfirmButton: false,
            timer: 1500
          });

        } 
        else if (!password.length >= 8) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: 'Passwords must be at least 8 characters long',
            background: "#263043",
            color: "#FFFFFF",
            showConfirmButton: false,
            timer: 1500
          });
          
        }
          else {
            nextPage()
          }
      } 
  


    return (
        <>
            <Box
                component="form"
                sx={{
                  '& > :not(style)': { mt: 0, mb: 2, width: '100%' },
                }}
                noValidate
                autoComplete="off"
              >
                <p class="text-login">Already have an account? 
                    <Link to="/login" >
                        <span className="signup-button">Sign in</span>
                    </Link>
                </p>
                <TextField id="Name" label="Name" variant="outlined"
                  type="text" placeholder="Your name"
                  value={name}
                  onChange={(e)=>{setUsername(e.target.value)}}
                />
                <TextField id="email" label="Email" variant="outlined"
                  type="email" placeholder="Your e-mail"
                  value={email} 
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
                <TextField id="password" label="Password" variant="outlined"
                  type="password" placeholder="Your password"
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
                <TextField id="confirmPassword" label="Confirm password" variant="outlined"
                  type="password" placeholder="Your password confirmed"
                  value={confirmpassword}
                  onChange={(e)=>{setConfirmpassword(e.target.value)}}
                />
                <TextField id="phoneNumber" label="Phone number" variant="outlined"
                  type="text" placeholder="Your phone number"
                  value={number}
                  onChange={(e)=>{setNumber(e.target.value)}}
                />
              </Box>
                <button type="button" class="button-login" onClick={ handleFirstStep}>Next</button>
                <p class="text-login back-home">Want to go back?
                    <Link to="/" >
                        <span className="signup-button">Return home</span>
                    </Link>
                </p>
        </>
    );

};
