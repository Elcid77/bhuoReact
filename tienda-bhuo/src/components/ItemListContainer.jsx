import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const categoryMap = {
    'novela-historica': 'historical_fiction',
    'romantica': 'romance',
    'ciencia-ficcion': 'science_fiction',
    'distopia': 'dystopian',
    'aventuras': 'adventure',
    'fantasia': 'fantasy',
};

function ItemListContainer() {
    const { id: categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            try {
                const categoryKey = categoryMap[categoryId] || 'fiction';
                const response = await fetch(`https://openlibrary.org/subjects/${categoryKey}.json?limit=10`);
                if (!response.ok) throw new Error('Error al obtener datos');
                const data = await response.json();

                const books = data.works.map(book => ({
                    id: book.key,
                    title: book.title,
                    description: book.description || 'Sin descripción disponible',
                    cover: book.cover_id
                        ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                        : '/placeholder.jpg',
                }));

                setItems(books);
            } catch (error) {
                console.error('Error al cargar libros:', error);
                setItems([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, [categoryId]);

    return (
        <div>
            {loading ? <p>Cargando productos...</p> : <ItemList items={items} />}
        </div>
    );
}

export default ItemListContainer;
