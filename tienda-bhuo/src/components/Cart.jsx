import ListGroup from "react-bootstrap/ListGroup"
import { useCart } from '../context/useCart';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { serverTimestamp } from "firebase/firestore";
import {createOrder} from '../firebase/db'
//import { getProducts } from "../firebase/db";

function Cart() {
    const { cart, getTotal } = useCart()
    const handleSubmit =(e) => {
        e.preventDefault()
        const email= e.target[0].value
        const nombre= e.target[1].value
        const telefono= e.target[2].value
        const order={
            bayer: {nombre, email, telefono},
            total: getTotal(),
            Items: cart,
            date: serverTimestamp()

        }
        createOrder(order)

    }
    return (
        <div className="'d-flex">
            <ListGroup className='w-50'>
                {cart.map(prod => (
                    <ListGroup.Item key={prod.id}>{prod.nombre} x {prod.qty}</ListGroup.Item>

                ))}

            </ListGroup>
            <Form className="w-50" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" placeholder="teléfono" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>

    )
}

export default Cart