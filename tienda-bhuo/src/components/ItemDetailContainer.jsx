import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Importar useParams correctamente
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function ItemDetailContainer() {
    const { id } = useParams(); // Recibe el id limpio de la ruta
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(1);
    const [error, setError] = useState(null); // Estado para manejar errores

    useEffect(() => {
        const fetchBookDetail = async () => {
            setLoading(true);
            setError(null); // Restablece el error en cada solicitud
            try {
                const formattedId = `OLID:${id}`;
                const response = await fetch(`https://openlibrary.org/api/books?bibkeys=${formattedId}&format=json&jscmd=data`);
                if (!response.ok) throw new Error('Error al obtener datos del libro.');
        
                const data = await response.json();
                console.log(data);  // Verifica lo que devuelve la API
        
                const book = data[formattedId];
                if (!book) throw new Error('No se encontró el libro solicitado.');
        
                const bookDetail = {
                    title: book.title,
                    subtitle: book.subtitle || 'Sin subtítulo',
                    authors: book.authors?.map(author => author.name) || ['Autor desconocido'],
                    cover: book.cover?.large || 'https://via.placeholder.com/150',
                };
        
                setItem(bookDetail);
            } catch (error) {
                console.error('Error al cargar el detalle del libro:', error);
                setError(error.message); // Guarda el mensaje de error
                setItem(null); // Restablece el item
            } finally {
                setLoading(false);
            }
        };
        

        if (id) {
            fetchBookDetail();
        }
    }, [id]);

    if (loading) {
        return <p>Cargando detalles del libro...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>; // Muestra el mensaje de error
    }

    if (!item) {
        return <p>No se pudo cargar el detalle del libro.</p>;
    }

    return (
        <Container className="mt-4">
            <Row>
                <Col md={6}>
                    <img
                        src={item.cover}
                        alt={item.title}
                        style={{ width: '100%', borderRadius: '8px' }}
                    />
                </Col>
                <Col md={6}>
                    <h1>{item.title}</h1>
                    <h3>{item.subtitle}</h3>
                    <p><strong>Autores:</strong> {item.authors.join(', ')}</p>

                    <div className="mt-4">
                        <div className="d-flex align-items-center">
                            <Button
                                variant="outline-primary"
                                onClick={() => setCount(count > 1 ? count - 1 : 1)}
                            >
                                -
                            </Button>
                            <span className="mx-3">{count}</span>
                            <Button
                                variant="outline-primary"
                                onClick={() => setCount(count + 1)}
                            >
                                +
                            </Button>
                        </div>
                        <Button variant="primary" className="mt-3">
                            Agregar {count} al carrito
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemDetailContainer;
