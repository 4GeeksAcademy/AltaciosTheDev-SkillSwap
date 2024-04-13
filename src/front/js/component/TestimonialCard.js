import React from 'react'
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Link } from 'react-router-dom';

const TestimonialCard = () => {
    return <>

        <div className="card  shadow" style={{ maxWidth: "45rem" }}>
            <div className="rounded-2 p-3">

                <div className='d-flex gap-3 align-items-center'>
                    <img src={rigoImageUrl} className="card-img-top rounded-circle w-25  border-2 " />
                    <h5 className="card-title">Juancito</h5>
                </div>
                <div className="card-body">
                    <p className='mb-4'>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do </p>

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