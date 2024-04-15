import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from "react-icons/bs"
import personLogo from "../../../img/personLogo.png"

export function Header({openSidebarToggle}) {
  return (
    <div className="header">
        <div className="menu-icon">
            <BsJustify className='icon' onClick={openSidebarToggle}/>
        </div>
        <div className="header-right">
            <BsFillBellFill className="icon"/>
            <BsFillEnvelopeFill className="icon"/>
            <div className="user-badge">
              <img src={personLogo} className="user-badge-image"/>
              <div className="user-details">
                <h6>Enzo</h6>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header