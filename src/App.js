import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import PaginaHome from './paginas/paginahome/paginahome.componente';


const PizzaPagina = () => (
  <div>
    <h1>Pizzas</h1>
  </div>
);

const PromosPagina = () => (
  <div>
    <h1>Nuestras Promos</h1>
  </div>
);

const OpcionesPagina = () => (
  <div>
    <h1>Mas Opciones</h1>
  </div>
);


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={PaginaHome} />
        <Route path='/pizzas' component={PizzaPagina} />
        <Route path='/masopciones' component= {OpcionesPagina} />
        <Route path='/promos' component={PromosPagina} />
        
      </Switch>
    </div>
  );
}

export default App;
