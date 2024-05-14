import React, { useContext,useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link , Navigate, useNavigate} from "react-router-dom";

export const Register= ({nextPage,password,setPassword,email,setEmail,confirmpassword,setConfirmpassword,number,setNumber,errorMessage,setErrorMessage,name,setUsername})=> {

    const navigate=useNavigate();
    const{actions}=useContext(Context);
   


    const handleInputChange=()=>{
        setErrorMessage('');
    };

    const handleSingUp=async(e)=>{
        e.preventDefault();

        if(password!==confirmpassword)
        {
            setErrorMessage("Las contraseñas no coinciden");
            return;
        }


        try{
            const data= await actions.register(name,email,password,number);
            console.log("Usuario registrado con exito:",data);

            navigate("/dashboard");
        }catch(error){
            console.error('Error en la creacion de usuario', error.message);
            setErrorMessage(error.message);
            setEmail("");
            setPassword("");
            setConfirmpassword("");
            setUsername("");

        }
    };


    return (
        <div className="text-center">
            <div>
                <a>Have already an account?</a>
                <a href="/login" className="links"> Login</a>
            </div>
            <div className="pt-2">
                {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}
                {/* onSubmit={handleSingUp} */}
                <form> 
                <p><input 
                className="loginput" 
                type="text" 
                placeholder="Your name" 
                value={name} 
                onChange={(e)=>{setUsername(e.target.value); handleInputChange();}}
                required
                /></p>
                    <p><input 
                className="loginput" 
                type="email" 
                placeholder="Your e-mail" 
                value={email} 
                onChange={(e)=>{setEmail(e.target.value); handleInputChange();}}
                required
                /></p>
                <p><input 
                className="loginput" 
                type="password" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e)=>{setPassword(e.target.value); handleInputChange();}}
                /></p>
                <p><input 
                className="loginput" 
                type="password" 
                placeholder="Confirm your password"
                value={confirmpassword}
                onChange={(e)=>{setConfirmpassword(e.target.value); handleInputChange();}}
                required
                 /></p>
                <p><input 
                className="loginput" 
                type="text" 
                placeholder="Your phone"
                value={number}
                onChange={(e)=>{setNumber(e.target.value); handleInputChange();}}
                 /></p> 
                 <button type="button"  className="nextbutton" onClick={nextPage}>Next</button>
                </form>
            </div>
        </div>

    );

};
