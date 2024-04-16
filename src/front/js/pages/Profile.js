import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/dashboard.css";
import Header from "../component/Dashboard/Header";
import Sidebar from "../component/Dashboard/Sidebar";
import Main from "../component/Profile/Main";

import { Context } from "../store/appContext";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="dashboard">
			<div className="grid-container">
				<Header/>
				<Sidebar />
				<Main/>
			</div>
		</div>
		
	);
};
