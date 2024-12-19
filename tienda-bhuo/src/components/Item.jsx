import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Item({ item }) {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={item.imagen} alt={item.nombre} />
        <Card.Body>
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>{item.autor}</Card.Text>
          <Card.Text>{item.genero}</Card.Text>
          <Card.Text>{item.precio}</Card.Text>
          <Card.Text>{item.descripcion}</Card.Text>

          <Button as={Link} to={`/item/${item.id}`} variant="primary">
            Ver más
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
