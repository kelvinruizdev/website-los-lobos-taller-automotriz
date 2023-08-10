import React from "react";
import { Link } from "react-router-dom";
import '../../styles/index.css'
import '../../styles/navbar.css'
import lobosLogo from "../../img/lobos-logo.png"

export const CardModel = () => {
    return (
        <div className="card--model">
            <div className="card--image--service">
                <h1>Servicios</h1>
            </div>
            <div className="">
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
    );
};
