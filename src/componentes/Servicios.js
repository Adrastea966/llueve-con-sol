//Servicios.js
import React from 'react';
import '../App.css';
import Corazones from '../img/corazones.svg';
import CuadradoUno from '../img/cuadrado1.svg';
import CuadradoDos from '../img/cuadrado2.svg';
import Lineas from '../img/lineas.svg'

function Servicios() {
    return (
        <div className='servicios'>
            <div className='servicios-container'>
                <h2>01.NUESTROS SERVICIOS</h2>
                <div className='card-container'>

                    <div className='card'>
                    <img className='corazones' src={Corazones} alt="Ilustraciones de corazones" />
                        <h3>Marketing Digital</h3>
                        <p>es simplemente el texto de relleno de las imprentas y archivos de texto.
                            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                        <div className='btn-card-contain' >
                            <button className='btn-card'>Adquirir</button>
                        </div>
                    </div>
               
                    <div className='card'>
                    <img className='lineas' src={Lineas} alt="Ilustraciones de lineas" />
                        <h3>Diseño Gráfico</h3>
                        <p>es simplemente el texto de relleno de las imprentas y archivos de texto.
                            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                        <div className='btn-card-contain' >
                            <button className='btn-card'>Adquirir</button>
                        </div>
                    </div>
            
                    <div className='card'>
                    <img className='cuadrado-1' src={CuadradoUno} alt="Ilustraciones de cuadrados" />
                    <img className='cuadrado-2' src={CuadradoDos} alt="Ilustraciones de cuadrados" />
                        <h3>Branding packaging</h3>
                        <p>es simplemente el texto de relleno de las imprentas y archivos de texto.
                            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                        <div className='btn-card-contain' >
                            <button className='btn-card'>Adquirir</button>
                        </div>
                    </div>
            
                </div>

            </div>  
        </div>
    );
}

export default Servicios;