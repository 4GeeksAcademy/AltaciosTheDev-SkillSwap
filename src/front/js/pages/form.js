import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Register } from "./register";
import { Register2 } from "./register2";
import { Register3 } from "./register3";
import { Register4 } from "./register4";
import "../../styles/loginst.css";
import sergey from "../../img/sergey.jpg";
import skillswapDark from "../../img/brand/SKILLSWAP-DARK.png";
import skillswapLight from "../../img/brand/SKILLSWAP-LIGHT.png";

import backs from "../../img/back2.png";
import "../../styles/home.css";
import "../../styles/loginst.css";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export const Form = () => {
    const [page, setPage] = useState(1);
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
    const steps = ['General information', 'Gender and Location', 'Skills to Tutor', 'Skills to Learn'];

////////////////////////

const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };


///////////

    //register function that will send all values to the back end 
    const registerUser = async () => {
        return await actions.register(name, email, number, password, gender, country, city);
    }

    // Function to handle moving to the next registration step
    const nextPage = () => {
        console.log({
            "password": password,
            "email": email,
            "number": number,
            "name": name,
            "gender": gender,
            "country": country,
            "city": city
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
            case 1:
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
                    setPage={setPage}

                />;
            case 2:
                return <Register2
                    gender={gender}
                    setGender={setGender}
                    country={country}
                    setCountry={setCountry}
                    city={city}
                    setCity={setCity}
                    nextPage={nextPage}
                    prevPage={prevPage}
                    registerUser={registerUser}
                    setPage={setPage}
                />;
            case 3:
                return <Register3
                    nextPage={nextPage}
                    prevPage={prevPage}
                />;
            case 4:
                return <Register4
                    prevPage={prevPage}
                />;
            default:
                return null;
        }
    };





    return (
        <div class="container-login">
        <div class="left-login">
            <img src={skillswapDark} alt="Logo" class="logo-login"/>


       


            <form class="login-form">
                <div className="signup-btn-container">
                    <h1 class="title-login">Sign up</h1> 
                    <h5 className="title-login">Step: {page}/4</h5>
                </div>

                            {/* ------------------------------- */}
{/* 
                            <Box sx={{ width: '100%', color: 'white'}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box> */}

            {/* ------------------------------- */}

                {renderRegisterStep()}
            </form>
        </div>
    </div>
    );
    //     <div className="backimage">

    //         <div className="col-5">
    //             <div className="backcard">
    //                 <div className="cardregister">
    //                     <div>
    //                         <h1>Register</h1>
    //                     </div>
    //                     <div>
    //                         {renderRegisterStep()}
    //                     </div>
    //                 </div>
    //             </div>

    //         </div>

    //     </div>


    // );
};