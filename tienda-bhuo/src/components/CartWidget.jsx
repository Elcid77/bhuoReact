// src/components/CartWidget.jsx
import React from 'react';

const CartWidget = ({ cantidad }) => (
    <div className="ml-auto position-relative">
        <button className="btn btn-outline-success" type="button">
            🛒 Carrito
            {cantidad > 0 && <span className="badge bg-danger position-absolute translate-middle badge rounded-pill">{cantidad}</span>}
        </button>
    </div>
);

export default CartWidget;
