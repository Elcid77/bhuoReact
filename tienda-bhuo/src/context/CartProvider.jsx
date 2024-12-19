import { useState } from 'react';
import { cartContext } from './cartContext';

export default function cartProvider({ children }) {
    const [cart, setCart] = useState([])
    const addToCart = product => {
        //Se matiene lo que estaban y se agrega al final un nuevo producto
        setCart([...cart, product])
    }
    
    const getQuantity = () => {
        const qtyOnly = cart.map(prod => prod.qty)
        //Reduce el arreglo al cantidad total
        const total = qtyOnly.reduce((acc, current) => acc + current, 0)
        return total
    }

    
    const getTotal = () => {
        const priceOnly = cart.map(prod => prod.qty * prod.precio)
        //Reduce el arreglo al cantidad total
        const total = priceOnly.reduce((acc, current) => acc + current, 0)
        return total
    }
    return (
        <cartContext.Provider value={{ cart, addToCart, getQuantity, getTotal }}>
            {children}
        </cartContext.Provider>
    )
}
