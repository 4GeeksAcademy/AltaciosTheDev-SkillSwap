import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Footer = () => {

	const location = useLocation();
	const excludePaths = ["/dashboard", "/learn", "/history", "/profile", "/favorites","/login", "/form"]; //insert in this array other paths where navbar is not wanted.
	const shouldExcludeFooter = excludePaths.includes(location.pathname);
	const isSinglePage = location.pathname.startsWith("/single/");

	if (shouldExcludeFooter || isSinglePage) {
		return null; // Don't render anything if the current path is included in excludePaths
	}

	return <>
		<footer className="d-none d-md-block footer footer-shadow borde-top bg-azul-claro">

			<div className=" p-5 d-flex justify-content-between flex-column flex-md-row justify-content-between">

				<div className="text-light d-flex flex-column">
					
					<Link to="/">
						<button className="bg-azul-claro text-light border-0">Home</button>
					</Link>
					<Link to="/howitworks	">
						<button className="bg-azul-claro text-light border-0">How it Works?</button>
					</Link>
					<Link to="/pricing	">
						<button className="bg-azul-claro text-light border-0">Pricing</button>
					</Link>
					<Link to="/testimonials	">
						<button className="bg-azul-claro text-light border-0">Testimonials</button>
					</Link>
				</div>
				<div className="vertical-line ms-4"></div>

				<div className="my-auto">
					<Link to="/login	">
						<button className="bg-azul-claro text-light border-0 ">Login</button>
					</Link>

					<Link to="/form	">
						<button className="bg-azul-claro text-light border-0">Register</button>
					</Link>
					<Link to="/pricing	">
						<button className="bg-azul-claro text-light border-0">Pricing</button>
					</Link>
				</div>
				<div className="vertical-line ms-4"></div>

				<div className="text-light d-flex flex-column">
					<h6>Find Us!</h6>
					<span><i className="fa-brands fa-instagram"></i> SkillSwap</span>
					<span><i className="fa-brands fa-facebook"></i> SkillSwap</span>
					<span><i className="fa-brands fa-x-twitter"></i> SkillSwap</span>
				</div>
			</div>
		</footer>

		<div className="d-block d-md-none footer footer-shadow borde-top bg-azul-claro">

			<div className="p-5 d-flex justify-content-between flex-column flex-md-row justify-content-between">

				<div className="d-flex justify-content-between">
					<div className="text-light d-flex flex-column">
						
						<Link to="/">
							<button className="bg-azul-claro text-light border-0">Home</button>
						</Link>
						<Link to="/howitworks	">
							<button className="bg-azul-claro text-light border-0">How it Works?</button>
						</Link>
						<Link to="/pricing	">
							<button className="bg-azul-claro text-light border-0">Pricing</button>
						</Link>
						<Link to="/testimonials	">
							<button className="bg-azul-claro text-light border-0">Testimonials</button>
						</Link>
					</div>
					<div className="vertical-line ms-4"></div>

					<div className="my-auto d-flex flex-column">
						<Link to="/login	">
							<button className="bg-azul-claro text-light border-0 ">Login</button>
						</Link>

						<Link to="/form	">
							<button className="bg-azul-claro text-light border-0">Register</button>
						</Link>
						<Link to="/pricing	">
							<button className="bg-azul-claro text-light border-0">Pricing</button>
						</Link>
					</div>
				</div>
				
				<div className="vertical-line ms-4"></div>

				<div className="text-light d-flex justify-content-center flex-column  my-4">
					<h6 className="text-center mb-4">Find Us!</h6>
					<div className="d-flex justify-content-around align-items-center">
						<span><i className="text-center fa-brands fa-instagram"></i> </span>
						<span><i className="text-center fa-brands fa-facebook"></i> </span>
						<span><i className="text-center fa-brands fa-x-twitter"></i> </span>
					</div>
				</div>
			</div>
		</div>
	</>

};
