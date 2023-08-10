import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="bg-light p-5 rounded">
				<h1> Tu taller de confianza, con una trayectoria de mas de 15 anos.</h1>
				<p> Ofrecemos una amplia gama de servicios de reparación automotriz, incluyendo cambio de aceite, mecánica general, alineación y balanceo, frenos, suspensión, y más.</p>

				<div class="card">
					<div class="card-header">
						<h2>Cambio de aceite</h2>
					</div>
					<div class="card-body">
						<p>Cambiemos el aceite y los filtros de tu auto al mejor precio del mercado. Nuestro personal altamente calificado y experimentado hará el trabajo rápido y correctamente, para que puedas volver a la carretera en poco tiempo.</p>
					</div>
					<div class="card-footer">
						<a href="#">Solicitar una cita</a>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<h2>Alineación y balanceo</h2>
					</div>
					<div class="card-body">
						<p>Mantén tu auto en buen estado con una alineación y balanceo regulares. Nuestros mecánicos expertos alinearán tus ruedas y balancearán tus neumáticos para que tu auto se conduzca mejor y tenga un desgaste uniforme de los neumáticos.</p>
					</div>
					<div class="card-footer">
						<a href="#">Solicitar una cita</a>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<h2>Frenos</h2>
					</div>
					<div class="card-body">
						<p>Obtén tus frenos reemplazados o reparados por nuestros mecánicos certificados. Usamos solo piezas OEM para garantizar que tus frenos funcionen correctamente durante años.</p>
					</div>
					<div class="card-footer">
						<a href="#">Solicitar una cita</a>
					</div>
				</div>
			</div>

		</div>
	);
};
