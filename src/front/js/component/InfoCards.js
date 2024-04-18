import React from 'react'


const InfoCards = ({ title, description, btn, info, id }) => {
    return <>

        <div class="accordion accordion-flush mb-5 pb-5" id="accordionFlushExample" style={{minWidth: "25rem"}}>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapse">
                    {title}
                </button>  
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                 <div class="accordion-body"><h3>Your only commitment?</h3>{description}</div>
                </div>
            </div>
        </div>

        {/* <div className='rounded-1 infocard'>
            <h3  className='text-center '>{title}</h3>
            <p className='text-center'>{description}</p>

            <div className=''>

            <p className='d-flex justify-content-center'>
                <button className="boton " type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                    {btn}
                </button>
            </p>
            <div style={{ minHeight: "120px" }} className='d-flex justify-content-center'>
                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                    <div className="card card-body bg-carne mb-4" style={{ width: "300px" }}>
                        {info}
                    </div>
                </div>
            </div>
            </div>

        </div> */}
    </>
}

export default InfoCards

