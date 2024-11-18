import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function ItemCount({ stock = 10, initial = 0, onAdd }) {
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleSubtract = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div
            className="d-flex flex-column align-items-center border p-3"
            style={{ width: 300, backgroundColor: "#f8f9fa", borderRadius: "8px" }}
        >
            <p className="text-center">{count}</p>
            <div className="d-flex justify-content-between w-100 mb-2">
                <Button
                    variant="danger"
                    className="w-50 me-2"
                    onClick={handleSubtract}
                >
                    -
                </Button>
                <Button
                    variant="success"
                    className="w-50 ms-2"
                    onClick={handleAdd}
                >
                    +
                </Button>
            </div>
            <Button
                variant="primary"
                onClick={() => onAdd(count)}
            >
                Agregar al carrito
            </Button>
        </div>
    );
}

export default ItemCount;
