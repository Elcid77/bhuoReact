// src/components/NavBar.jsx

import React from 'react';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <a className="navbar-brand font-weight-bold" href="#">El Bhuo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">Inicio</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="categoriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorías
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
                        <li><a className="dropdown-item" href="#">Novela histórica</a></li>
                        <li><a className="dropdown-item" href="#">Romántica</a></li>
                        <li><a className="dropdown-item" href="#">Ciencia ficción</a></li>
                        <li><a className="dropdown-item" href="#">Distopía</a></li>
                        <li><a className="dropdown-item" href="#">Aventuras</a></li>
                        <li><a className="dropdown-item" href="#">Fantasía</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                </li>
            </ul>
            <div className="cart-container">
                <CartWidget cantidad={5} />
            </div>
        </div>
    </nav>
);

export default NavBar;
