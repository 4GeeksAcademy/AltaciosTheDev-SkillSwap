import React from 'react'
// import singleData from "./skills-mock-data.json.json"
import { Link, useParams } from "react-router-dom";

function Main() {
  // const { store, actions } = useContext(Context);
	const params = useParams();


  return (
    <div className="single-container">
      <h4 className="single-title">Individual Page {params.id}</h4>
      
    </div>
  )
}

export default Main