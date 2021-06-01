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
                    id: 1
                },
                {
                    titulo: 'Nuestras Promos',
                    imagenUrl: 'https://i.ibb.co/QKt436R/Inkednuestraspizzas-LI.jpg',
                    id: 2
                },
                {
                    titulo: 'Mas opciones',
                    imagenUrl: 'https://i.ibb.co/1vm4pYz/empanadas-y-cerveza-2.png',
                    id: 3

                }]
        };
    }

    render() {
        return (
            <div className='menu-directorio'>
                {
                    this.state.secciones.map( ({titulo, imagenUrl, id}) => (
                        <MenuItem key={ id } titulo={ titulo } imagenUrl={ imagenUrl } />
                ))}            
            </div> 
        );        
    }
}

export default Directorio;