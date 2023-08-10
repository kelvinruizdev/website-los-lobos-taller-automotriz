import React from "react";
import { Link } from "react-router-dom";
import '../../styles/index.css'
import '../../styles/navbar.css'
import lobosLogo from "../../img/lobos-logo.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar--primary">
			<div className="container">
				<div className="col-10">
					<Link to="/" className="">
						<img src={lobosLogo} className="w-25" />
					</Link>
				</div>

				<Link to="/" className="button--agendar col-2">
					Agendar una cita
				</Link>
			</div>
		</nav>
	);
};
