import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Item from './Item';

function ItemList({ items = [] }) {
    if (items.length === 0) {
        return <p>No se encontraron productos.</p>;
    }

    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                {items.map(item => (
                    <Item item={item} key={item.id} />
                ))}
            </Row>
        </Container>
    );
}

export default ItemList;
