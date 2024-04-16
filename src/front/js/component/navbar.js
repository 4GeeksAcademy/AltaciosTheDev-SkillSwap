import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
	const location = useLocation();
    const excludePaths = ["/dashboard","/learn","/history","/profile","/favorites"]; //insert in this array other paths where navbar is not wanted.
    const shouldExcludeNavbar = excludePaths.includes(location.pathname);

    if (shouldExcludeNavbar) {
        return null; // Don't render anything if the current path is included in excludePaths
    }

	return (
		<nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
			<div className="container-fluid">
				<Link to="/">
					<span className="navbar-brand">SkillSwap</span>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/dashboard">	
								<span className="nav-link" aria-current="page">Dashboard</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/howitworks">
								<span className="nav-link">How it works</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/pricing">	
								<span className="nav-link" aria-current="page">Prices</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/testimonials">	
								<span className="nav-link" aria-current="page">Testimonials</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/login">	
								<span className="nav-link" aria-current="page">Sign in</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/form">	
								<span className="nav-link" aria-current="page">Sign up</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};