import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <NavBar />
        <ItemListContainer mensaje="Bienvenido a El Bhuo" />
    </div>
);

export default App;
