import React from 'react'
import { Link } from "react-router-dom";
import {BsCart3,BsFillPersonVcardFill,BsStarFill,BsClockHistory ,BsGrid1X2Fill, BsFillArchiveFill,BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsBoxArrowRight,BsArrowsAngleContract   } from "react-icons/bs"
export function Sidebar({openSidebar, openSidebarToggle}) {
  return (
    <aside className={`sidebar ${openSidebar ? "sidebar-responsive":""}`}>
        <div className='sidebar-title'>
            <div className="sidebar-brand">
                <BsArrowsAngleContract  className="icon-header"/>
                <Link to="/" className="sidebar-link">
					<span>SKILLSWAP</span>
		        </Link>
            </div>
            <span className="icon close_icon" onClick={openSidebarToggle}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href='' className='sidebar-link'>
                    <BsGrid1X2Fill className='icon'/>Dashboard
                </a>
            </li>
            <li className='sidebar-list-item' >
                <a href='' className='sidebar-link'>
                    <BsFillArchiveFill className='icon'/>Learn
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href='' className='sidebar-link'>
                    <BsStarFill  className='icon'/>Favorites
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href='' className='sidebar-link'>
                    <BsClockHistory  className='icon'/>History
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href='' className='sidebar-link'>
                    <BsMenuButtonWideFill className='icon'/>Report
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href='' className='sidebar-link'>
                    <BsFillGearFill className='icon'/>Settings
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href='' className='sidebar-link'>
                    <BsFillPersonVcardFill className='icon'/>Profile
                </a>
            </li>
            <li className='logout sidebar-list-item'>
                <a href='' className='sidebar-link'>
                    <BsBoxArrowRight className='icon'/>Logout
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar