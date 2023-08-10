import React from "react";
import { Link } from "react-router-dom";
import '../../styles/index.css'
import '../../styles/navbar.css'

export const NavbarSecondary = () => {
    return (
        <nav className="navbar navbar--secondary">
            <div className="container-fluid">
                <Link to="/" className="button--navbar">
                    Servicios
                </Link>
                <Link to="/" className="button--navbar">
                    Testimonios
                </Link>
                <Link to="/" className="button--navbar">
                    Contactanos
                </Link>
                <Link to="/" className="button--navbar">
                    Ubicacion
                </Link>
                <Link to="/" className="button--navbar">
                    Galeria
                </Link>
            </div>
        </nav>
    );
};
