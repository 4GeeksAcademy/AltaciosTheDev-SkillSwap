import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark p-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 text-light">Logo 🦈</span>
				</Link>
				<div className="d-flex gap-3">
					<Link to="/demo">
						<button className="btn btn-primary">Blog/News</button>
					</Link>
					<Link to="/demo">
						<button className="btn btn-primary">How it Works?</button>
					</Link>
					<Link to="/demo">
						<button className="btn btn-primary">Pricing</button>
					</Link>
					<Link to="/demo">
						<button className="btn btn-primary">Testimonials</button>
					</Link>
					
				</div>
				<div className="ms-5 d-flex gap-2">
						<Link to="/demo">
							<button className="btn btn-danger">Login</button>
						</Link>
						<Link to="/demo">
							<button className="btn btn-danger">Signup</button>
						</Link>
					</div>
			</div>
		</nav>
	);
};
