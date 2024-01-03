//Header.js
import React from 'react';
import '../App.css';

function Servicios() {
    return (
        <div className='servicios'>
            <div className='servicios-container'>
                <h1>01.NUESTROS SERVICIOS</h1>
                <div className='card-container'>
                    <div className='card'>
                        <h2>Marketing Digital</h2>
                        <p>es simplemente el texto de relleno de las imprentas y archivos de texto.
                            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                        <div className='btn-card-contain' >
                            <button className='btn-card'>Adquirir</button>
                        </div>
                    </div>
                    <div className='contenido'></div>
                    <div className='card'>
                        <h2>Diseño Gráfico</h2>
                        <p>es simplemente el texto de relleno de las imprentas y archivos de texto.
                            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                        <div className='btn-card-contain' >
                            <button className='btn-card'>Adquirir</button>
                        </div>
                    </div>
                    <div className='contenido'></div>
                    <div className='card'>
                        <h2>Branding packaging</h2>
                        <p>es simplemente el texto de relleno de las imprentas y archivos de texto.
                            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                        <div className='btn-card-contain' >
                            <button className='btn-card'>Adquirir</button>
                        </div>
                    </div>
                    <div className='contenido'></div>

                </div>

            </div>
        </div>
    );
}

export default Servicios;