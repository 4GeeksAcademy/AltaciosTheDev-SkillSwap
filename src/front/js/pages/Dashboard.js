import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/dashboard.css";
import Header from "../component/Dashboard/Header";
import Sidebar from "../component/Dashboard/Sidebar";
import Main from "../component/Dashboard/Main";



import { Context } from "../store/appContext";

export const Dashboard = () => {
	const { store, actions } = useContext(Context);

	const [openSidebar, setOpenSidebar] = useState(false)

	const openSidebarToggle = () => {
		setOpenSidebar(!openSidebar)
	}

	return (
		<div className="dashboard">
			<div className="grid-container">
				<Header openSidebarToggle={openSidebarToggle}/>
				<Sidebar openSidebar={openSidebar} openSidebarToggle={openSidebarToggle}/>
				<Main/>
			</div>
		</div>
		
	);
};
