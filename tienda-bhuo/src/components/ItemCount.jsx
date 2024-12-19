import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';

function ItemCount({detail}) {


    const [count, setCount] = useState(0)
    const {addToCart}=useContext(cartContext)
    
    const handleAdd = () => setCount(count + 1)
    const handleSub = () => setCount(count - 1)
    const handleAddToCart=()=>{
        addToCart({...detail, qty: count})
    }
    return (
        <div
            className='d-flex flex-column'
            style={{ width: 300 }}
        >
            <p className='text-center border'>{count}</p>
            <div>
                <Button
                    variant='danger'
                    className='w-50'
                    onClick={handleSub}
                >
                    -
                </Button>
                <Button
                    variant=' success'
                    className='w-50'
                    onClick={handleAdd}
                >
                    +
                </Button>
            </div>
            <Button onClick={handleAddToCart}>Agregar al Carrito</Button>
            </div>
            )

}
            export default ItemCount;
