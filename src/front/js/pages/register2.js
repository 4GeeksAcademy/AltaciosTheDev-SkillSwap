import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link , Navigate, useNavigate} from "react-router-dom";
import backs from "../../img/back2.png";
import "../../styles/home.css";
import "../../styles/loginst.css";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Swal from 'sweetalert2'

export const Register2 = ({ nextPage, prevPage, gender, setGender, country, setCountry, city, setCity, registerUser,setPage }) => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    async function confirmUserRegister() {
        if(store.token){
            console.log(store.token)
            nextPage()
          }
        // Call your register action here
        else if (gender === '' || country === '' || city === ''){
            Swal.fire({
              position: "center",
              icon: "error",
              title: 'All fields are required',
              background: "#263043",
              color: "#FFFFFF",
              showConfirmButton: false,
              timer: 1500
            });
          } 
          else {
                const isUserRegistered = await registerUser()
                console.log('isUserRegistered:' ,isUserRegistered)
                if (isUserRegistered) {
                    nextPage(); // Call nextPage as a function
                }
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
            <FormControl fullWidth>
                <InputLabel id="level-select-label">Gender</InputLabel>
                <Select
                    labelId="level-select-label"
                    id="level-select"
                    value={gender}
                    label="Gender"
                    onChange={(e) => setGender(e.target.value)}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                </Select>
          </FormControl>
            <TextField id="country" label="Country" variant="outlined"
              type="text" placeholder="Your country"
              value={country} 
              onChange={(e) => setCountry(e.target.value)}
            />
            <TextField id="city" label="City" variant="outlined"
              type="text" placeholder="Your city"
              value={city} 
              onChange={(e) => setCity(e.target.value)}
              />
          </Box>
            <div className="signup-btn-container">
                <button type="button" class="button-login half-btn" onClick={prevPage}>Previous</button>
                <button type="button" class="button-login half-btn positive-btn" onClick={confirmUserRegister}>Next</button>
            </div>
            <p class="text-login back-home">Want to go back?
                <Link to="/" >
                    <span className="signup-button">Return home</span>
                </Link>
            </p>
    </>
               
    );
};