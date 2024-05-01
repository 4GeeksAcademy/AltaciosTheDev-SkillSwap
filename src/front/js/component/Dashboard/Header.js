import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from "react-icons/bs"
import personLogo from "../../../img/personLogo.png"
import { Context } from "../../store/appContext";
import femaleLogo from "../../../img/femaleLogo.png"

export function Header() {
  const { store, actions } = useContext(Context);

  return (
    <div className="header">
        <div className="menu-icon">
            <BsJustify className='icon' onClick={actions.openSidebarToggle}/>
        </div>

        <div className="header-right">
            <BsFillBellFill className="icon"/>
            <BsFillEnvelopeFill className="icon"/>
            <div className="user-badge">
              {/* <img src={store.profile.gender == "Male" ? personLogo : femaleLogo} className="user-badge-image"/>  lo quito de momento porque me da problemas al iniciar*/}
              <div className="user-details">
                <h6>{store.profile && store.profile.name}</h6>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header