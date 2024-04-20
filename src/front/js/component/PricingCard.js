import React from 'react'
import "../../styles/pricing.css";

const pricingCard = () => {
  return <>
  <div className='bg-gris'>
    
  
    <h1 className='text-center pt-3 pb-4'>The SkillSwap Plans</h1>
    <div className='pricing-group gap-xs-5 gap-md-5 gap-lg-0 pb-5'>
      
      {/* Free Card */}
      <div className='pricing-card-free mb-5 pb-1 mb-md-0'>
        <div className='header-card-free white text-center'>
          <h1 className='header-item white'>Free Member</h1>
          <h2 className='header-item white'>$0</h2>
        </div>

        <div className='body-card p-4'>
           <div className='d-flex flex-column gap-4'>
           <i class="fa-regular fa-circle-xmark">
            <span className='black'> Limited to 3 1 on 1 sessions per each 1 on 1 session that the user teached</span>
          </i>
           <i class="fa-regular fa-circle-xmark ">
            <span className='black'> minimum 1 teaching in 1 month </span>
           </i>
           <i class="fa-regular fa-circle-xmark"></i>
           </div>

            <div className='d-flex justify-content-center price-btn-margin'>
              <button className='boton price-btn'>Create Free Account</button>
            </div>

          </div>

      </div>
      {/* pro card */}
      <div className='pricing-card card-pro '>

        <div className='header-card-pro white text-center'>
          <h1 className='header-item white'>Monthly</h1>
          <h2 className='header-item white'>$9.99</h2>
        </div>

        
            
          <div className='body-card p-4'>
           <div className='d-flex flex-column gap-4'>

              <i className="fa-regular fa-circle-check ">
                <span className='black'>  All features of the free plan </span>
              </i>

              <i className="fa-regular fa-circle-check ">
                <span className='black' > No requirement to teach sessions to receive learning sessions </span>
              </i>
              <i className="fa-regular fa-circle-check "></i>
              <i className="fa-regular fa-circle-check "></i>
              
            </div>

            <div className='d-flex justify-content-center price-btn-margin'>
              <button className='boton price-btn mt-5'>$9.99/Monthly</button>
            </div>

         </div>
      </div>
    
    {/* life time card */}
      <div className='pricing-card-free mb-5 pb-1 mb-md-0'>
        <div className='header-card-free white text-center'>
          <h1 className='header-item white'>Life Time</h1>
          <h2 className='header-item white'></h2>
        </div>

        <div className='body-card p-4'>
           <div className='d-flex flex-column gap-4'>

            <i className="fa-regular fa-circle-check ">
              <span className='black'>   All features of the monthly  </span>
            </i>

            <i className="fa-regular fa-circle-check ">
              <span className='black' >  Keep access forever with only 1 payment at a discounted price. </span>
            </i>
            <i className="fa-regular fa-circle-check "></i>
            
           </div>

            <div className='d-flex justify-content-center price-btn-margin'>
              <button className='boton price-btn mt-4'>$199/One Time Only</button>
            </div>
          </div>

          
      </div>  
    </div>
    </div>
  </>
}

export default pricingCard

