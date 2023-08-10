import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/cardModel.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="bg-light p-5 rounded">

				<div>
					<h1> Tu taller de confianza, con una trayectoria de mas de 15 anos.</h1>
					<p> Ofrecemos una amplia gama de servicios de reparación automotriz, incluyendo cambio de aceite, mecánica general, alineación y balanceo, frenos, suspensión, y más.</p>
				</div>

				<div className="">
					<div className="card--model w-100">
						<div className="card--image--service">
							<h1>Servicios</h1>
						</div>
						<div className="card--model--body">
							<p>Te invitamos a ver todo lo que tenemos para ofrecerte.</p>
							<ul>
								<li>Escaneo computarizado</li>
								<li>Entonacion</li>
								<li>Reparacion de cableado</li>
								<li>...</li>
							</ul>
							<Link to="/" className="button--navbar">
								Ver mas...
							</Link>
						</div>
					</div>

				</div>
			</div>

		</div>
	);
};
