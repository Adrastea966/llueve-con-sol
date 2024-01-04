import React from 'react';
import './App.css';
import Header from './componentes/Header.js';
import Main from './componentes/Main.js'
import Servicios from './componentes/Servicios.js'
import Motivos from './componentes/Motivos.js'
import Acerca from './componentes/AcercaDe.js'
import Extra from './componentes/Extra.js'
import UltimosProyectos from './componentes/UltimosProyectos.js'

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Main */}
      <Main />
      {/* Servicios*/}
      <Servicios />
      {/* Motivos*/}
      <Motivos />
      {/* Acerca de*/}
      <Acerca />
      {/* Extra*/}
      <Extra />
      {/* Proyectos*/}
      <UltimosProyectos />
    </div>
  );
}

export default App;