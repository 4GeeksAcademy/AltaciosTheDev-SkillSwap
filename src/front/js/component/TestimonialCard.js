import React from 'react'
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Link } from 'react-router-dom';

const TestimonialCard = ({name , description}) => {
    return <>

        <div className="card  shadow" style={{ maxWidth: "45rem", height: "auto" }}>
            <div className="rounded-2 p-3">

                <div className='d-flex gap-3 align-items-center'>
                    <img src={rigoImageUrl} className="card-img-top rounded-circle w-25  border-2 " />
                    <h5 className="card-title">{name}</h5>
                </div>
                <div className="card-body">
                    <p className='mb-4'>{description}</p>

                    <div className="d-flex justify-content-between align-items-center">
                        <span className="amarillo">
                            <i className="fa-solid fa-star zoom"></i>
                            <i className="fa-solid fa-star zoom"></i>
                            <i className="fa-solid fa-star zoom"></i>
                            <i className="fa-solid fa-star zoom"></i>
                            <i className="fa-regular fa-star zoom"></i>
                        </span>
                    </div>

                </div>

            </div>
        </div>

    </>
}

export default TestimonialCard