import personLogo from "../../img/personLogo.png"
import { Link } from 'react-router-dom';

function TheCard( {skill, text, img} ) {
  return <>
  
    
    <div className="card bg-card p-info  shadow" style={{maxWidth: "360px",}}>
      <div className="rounded-2 p-2">
      <img src={img} className="card-img-top rounded-2 img-fluid  border-2 "style={{minWidth: "240px", minHeight: "250px"}}  />
        <div className="card-body">
          <h5 className="card-title">{skill}</h5>
          <div className="d-flex justify-content-between">
            <p className="card-text"><i className="fa-solid fa-book"></i> Skills: <strong className="amarillo"> 5</strong></p>
            <p className="card-text"><i className="fa-regular fa-user"></i> Users teaching: <strong className="amarillo">205</strong></p>
          </div>


          <div className="d-flex justify-content-between align-items-center">
            <Link to="/" className="btn boton">Start <span>{">"}</span> </Link>
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

export default TheCard;