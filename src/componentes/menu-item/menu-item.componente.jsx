import React from 'react';

import './menu-item.estilos.scss';

const MenuItem = ({ titulo, imagenUrl }) => (
    <div 
        className='menu-item'>
        <div 
            className='imagen-fondo' style={{
                backgroundImage: `url(${imagenUrl})`
            }} 
        />
        <div className='contenido'>
            <h1 className='titulo'>{titulo.toUpperCase()}</h1>
            <span className='subtitulo'>COMPRE AHORA</span>
        </div>
    </div>
);

export default MenuItem;