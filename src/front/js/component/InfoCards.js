import React from 'react'

const InfoCards = ({ title, description, btn, info }) => {
    return <>
        <div style={{ width: "600px" }} className='rounded-1'>
            <h3  className='text-center '>{title}</h3>
            <p className='text-center'>{description}</p>

            <div className=''>

            <p className='d-flex justify-content-center'>
                <button className="boton " type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                    {btn}
                </button>
            </p>
            <div style={{ minHeight: "120px" }} className='d-flex justify-content-center'>
                <div class="collapse collapse-horizontal" id="collapseWidthExample">
                    <div class="card card-body bg-amarillo mb-4" style={{ width: "300px" }}>
                        {info}
                    </div>
                </div>
            </div>
            </div>

        </div>
    </>
}

export default InfoCards

