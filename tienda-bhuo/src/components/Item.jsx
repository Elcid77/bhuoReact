import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'; // Asegúrate de que esto esté presente
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Item({ item }) {
  // Remover `/works/` inicial si está presente
  const cleanId = item.id.startsWith('/works/') ? item.id.replace('/works/', '') : item.id;

  return (
      <Col>
          <Card>
              <Card.Img variant="top" src={item.cover} alt={item.title} />
              <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button as={Link} to={`/item/${cleanId}`} variant="primary">
                      Ver más
                  </Button>
              </Card.Body>
          </Card>
      </Col>
  );
}

export default Item;
