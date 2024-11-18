import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <Link className="navbar-brand font-weight-bold" to="/">El Bhuo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="categoriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorías
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
                        <li><Link className="dropdown-item" to="/category/novela-historica">Novela histórica</Link></li>
                        <li><Link className="dropdown-item" to="/category/romantica">Romántica</Link></li>
                        <li><Link className="dropdown-item" to="/category/ciencia-ficcion">Ciencia ficción</Link></li>
                        <li><Link className="dropdown-item" to="/category/distopia">Distopía</Link></li>
                        <li><Link className="dropdown-item" to="/category/aventuras">Aventuras</Link></li>
                        <li><Link className="dropdown-item" to="/category/fantasia">Fantasía</Link></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contacto">Contacto</Link>
                </li>
            </ul>
            <div className="cart-container">
                <CartWidget cantidad={5} />
            </div>
        </div>
    </nav>
);

export default NavBar;
