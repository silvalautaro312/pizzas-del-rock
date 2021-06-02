import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.estilos.scss';

const MenuItem = ({ titulo, imagenUrl, history, linkUrl, match }) => (
    <div 
        className='menu-item' onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);