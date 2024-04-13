import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Link } from 'react-router-dom';

function TheCard( {title, text} ) {
  return <>
  
    
    <div className="card shadow" style={{minWidth: "20rem"}}>
      <img src={rigoImageUrl} className="card-img-top p-2 border-2 "  />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="d-flex justify-content-between">
            <p className="card-text"><i class="fa-solid fa-book"></i> Lesson: 5</p>
            <p className="card-text"><i class="fa-regular fa-user"></i> Student: 205</p>
            <p className="card-text"><i class="fa-solid fa-trophy"></i> Averge</p>
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
  
  </>
}

export default TheCard;