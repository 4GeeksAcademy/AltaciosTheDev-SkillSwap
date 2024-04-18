import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import {BsCart3,BsFillPersonVcardFill,BsStarFill,BsClockHistory ,BsGrid1X2Fill, BsFillArchiveFill,BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsBoxArrowRight,BsArrowsAngleContract   } from "react-icons/bs"
import { Context } from "../../store/appContext";
import SKILLSWAP from "../../../img/brand/SKILLSWAP-DARK.png"

export function Sidebar() {
    const { store, actions } = useContext(Context);

  return (
    <aside className={`sidebar ${store.openSidebar ? "sidebar-responsive":""}`}>
        <div className='sidebar-title'>
            <div className="sidebar-brand">
                <img className="brand-logo" src={SKILLSWAP}/>
                {/* <BsArrowsAngleContract  className="icon-header"/>SKILLSWAP */}
            </div>
            <span className="icon close_icon" onClick={actions.openSidebarToggle}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/dashboard" className='sidebar-link'>
                    <BsGrid1X2Fill className='icon'/>Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item' >
                <Link to="/learn" className='sidebar-link'>
                    <BsFillArchiveFill className='icon'/>Learn
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/favorites" className='sidebar-link'>
                    <BsStarFill  className='icon'/>Favorites
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/history" className='sidebar-link'>
                    <BsClockHistory  className='icon'/>History
                </Link>
            </li>

            {/* <li className='sidebar-list-item'>
                <Link to="/report" className='sidebar-link'>
                    <BsMenuButtonWideFill className='icon'/>Report
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/settings" className='sidebar-link'>
                    <BsFillGearFill className='icon'/>Settings
                </Link>
            </li> */}
            <li className='sidebar-list-item'>
                <Link to="/profile" className='sidebar-link'>
                    <BsFillPersonVcardFill className='icon'/>Profile
                </Link>
            </li>
            <li className='logout sidebar-list-item'>
                <Link to="/" className="sidebar-link">
                    <BsBoxArrowRight className='icon'/>Logout
                </Link>		        
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar