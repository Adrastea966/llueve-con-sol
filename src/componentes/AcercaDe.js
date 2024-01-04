//Acerca de
import React from 'react';
import '../App.css';
import Sol from '../img/sol.png';
import Diseño from '../img/foto-presentacion.jpg';
import IlustracionPicos from '../img/picos.png';
import PersonaUno from '../img/persona1.jpg';
import PersonaDos from '../img/persona2.jpg';
import PersonaTres from '../img/persona3.jpg';
import PersonaCuatro from '../img/persona4.jpg';

function Acerca() {

    return (
        <div className='acerca-de'>
            <div className='acerca-de-container'>
                <h2>02.SOBRE NOSOTROS</h2>
                <div className='card-presentacion-container'>
                    <div className='card-presentacion'>

                        <div className='card-imagen'>
                            <img className='tableta' src={Diseño} alt="Imagen de mujer ilustrando en su tableta gráfica" />
                        </div>
                        <img className='picos' src={IlustracionPicos} alt="Decoracion ilustrada sobre la imagen, picos." />

                        <div className='card-informacion'>
                            <img className='sol' src={Sol} alt="Ilustracion del sol" />
                            <div className='card-titulos'>
                                <h2>Somos llueve con sol ✨</h2>
                                <h3>Conocé a nuestro equipo</h3>
                            </div>
                            <div className='container-equipo'>
                                <div>
                                    <img className='equipo' src={PersonaUno} alt="Imagen de integrante del grupo" />
                                </div>
                                <div>
                                    <img className='equipo' src={PersonaDos} alt="Imagen de integrante del grupo" />
                                </div>
                                <div>
                                    <img className='equipo' src={PersonaTres} alt="Imagen de integrante del grupo" />
                                </div>
                                <div>
                                    <img className='equipo' src={PersonaCuatro} alt="Imagen de integrante del grupo" />
                                </div>
                            </div>
                            <div className='descripcion'>
                                <p>Somos un equipo de diseño gráfico apasionado y altamente dedicado, especializado en
                                    proporcionar soluciones creativas y personalizadas. Nosdestacamos pornuestra capacidad para
                                    comprender tus necesidades y ofrecer las mejores soluciones gráficas que no solo cumplen, sino
                                    que superan tus expectativas.</p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Acerca;