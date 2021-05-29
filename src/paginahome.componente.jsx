import React from 'react';

import './paginahome.estilos.scss';

const PaginaHome = () => (
    <div className='paginaHome'>
        <div className='menu-directorio'>
            <div className='menu-item'>
                <div className='contenido'>
                    <h1 className='titulo'>NUESTRAS PIZZAS</h1>
                    <span className='subtitulo'>TIENDA</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='contenido'>
                    <h1 className='titulo'>NUESTRAS PROMOS</h1>
                    <span className='subtitulo'>TIENDA</span>
                </div>
            </div>
        </div>
    </div>
);

export default PaginaHome;