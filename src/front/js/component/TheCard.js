import personLogo from "../../img/personLogo.png"
import { Link } from 'react-router-dom';

function TheCard( {title, text} ) {
  return <>
  
    
    <div className="card  shadow" style={{maxWidth: "20rem"}}>
      <div className="rounded-2 p-2">
      <img src={personLogo} className="card-img-top rounded-2  border-2 "style={{maxWidth: "100%"}}  />
        <div className="card-body">
          <h5 className="card-title">Cooking</h5>
          <div className="d-flex justify-content-between">
            <p className="card-text"><i className="fa-solid fa-book"></i> Skills: 5</p>
            <p className="card-text"><i className="fa-regular fa-user"></i> Users teaching: 205</p>
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