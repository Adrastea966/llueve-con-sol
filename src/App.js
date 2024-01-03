import React from 'react';
import './App.css';
import Header from './componentes/Header.js';
import Main from './componentes/Main.js'
import Servicios from './componentes/Servicios.js'

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Main */}
      <Main />
      {/* Servicios*/}
      <Servicios />
    </div>
  );
}

export default App;