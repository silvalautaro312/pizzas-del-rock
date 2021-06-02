import React from 'react';

import MenuItem from '../menu-item/menu-item.componente';

import './directorio.estilos.scss';

class Directorio extends React.Component {
    constructor() {
        super();

        this.state = {
            secciones: [
                {
                    titulo: 'Nuestras Pizzas',
                    imagenUrl: 'https://i.ibb.co/JQGpzSC/pizzas.jpg',
                    id: 1,
                    linkUrl: 'pizzas'
                },
                {
                    titulo: 'Mas opciones',
                    imagenUrl: 'https://i.ibb.co/6F65ZGc/empanadas-y-cerveza-2.png',
                    id: 2,
                    linkUrl: 'masopciones'
                    

                },
                {
                    titulo: 'Nuestras Promos',
                    imagenUrl: 'https://i.ibb.co/XkTdwqn/promocionesydescuentos.jpg',
                    id: 3,
                    linkUrl: 'promos'
                }
                ]
        };
    }

    render() {
        return (
            <div className='menu-directorio'>
                {
                    this.state.secciones.map(({id, ...otrasSeccionesProps}) => (
                        <MenuItem key={id} {...otrasSeccionesProps} />
                ))}            
            </div> 
        );        
    };
}

export default Directorio;