import React from 'react'
import { useNavigate } from "react-router-dom";


const InfoCards = ({ title, description, img, }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/howitworks")
    }


    return <>




        <div onClick={() => handleClick()} className='text-center card-info shadow'>
            <img className='mb-2  info-card-img' src={img}  alt=""/>
            <h2 className='rosa my-3'>{title}</h2>
            <p className='p-info white'>{description}</p>
        </div>






        {/* <div className='text-center'>
            <img className='mb-2' src={img} style={{maxWidth: "20rem", minHeight: "8rem"}} alt=""/>
            <h1>{title}</h1>
            <p className='p-info'>{description}</p>
        </div> */}


       
    </>
}

export default InfoCards

