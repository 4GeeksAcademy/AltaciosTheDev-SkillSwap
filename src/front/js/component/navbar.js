import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SKILLSWAP from "../../img/brand/SKILLSWAP-DARK.png"


export const Navbar = () => {
	const location = useLocation();
    const excludePaths = ["/dashboard","/learn","/history","/profile","/favorites"]; //insert in this array other paths where navbar is not wanted.
    const shouldExcludeNavbar = excludePaths.includes(location.pathname);

    if (shouldExcludeNavbar) {
        return null; // Don't render anything if the current path is included in excludePaths
    }

	return (
		<nav className="header navbar navbar-expand-lg  bg-navbar border-bottom border-body" data-bs-theme="dark">
			<div className="container-fluid">
				<Link to="/" className="decoration" >
					<img src={SKILLSWAP} className="navbar-brand sidebar-link text-logo navbar-img"/>
					{/* <span className="navbar-brand sidebar-link text-logo">SkillSwap</span> */}
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse " id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/dashboard" className="decoration">	
								<span className="nav-link" aria-current="page">Dashboard</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/howitworks" className="decoration">
								<span className="nav-link">How it works</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/pricing" className="decoration">	
								<span className="nav-link" aria-current="page">Prices</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/testimonials" className="decoration">	
								<span className="nav-link" aria-current="page">Testimonials</span>
							</Link>
						</li>
						<li className="nav-item login-link">
							<Link to="/login" className="decoration">	
								<span className="nav-link text-success login-link" aria-current="page">Login <i class="fa-solid fa-user-plus login-link"></i></span>
							</Link>
						</li>
						{ 
						/* <li className="nav-item">
							<Link to="/form" className="decoration">	
								<span className="nav-link sidebar-link" aria-current="page">Sign up</span>
							</Link>
						</li> */}
					</ul>
				</div>
			</div>
		</nav>
	);
};