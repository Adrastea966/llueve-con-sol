//Ultimos proyectos
import React from 'react';
import '../App.css';
import Pluma from '../img/pluma.png'
import { IoIosArrowRoundForward } from "react-icons/io";

function UltimosProyectos() {

    return (
        <div className='proyectos'>

            <img className='pluma' src={Pluma} alt="Imagen decorativa de una pluma" />

            <div className='titulo-filtros'>
                <h2>03.ÚLTIMOS PROYECTOS</h2>

                <div className='filtros'>

                    <div className='btn-filtros-contain'>
                        <div className='btn-wrapper-filtros'>
                            <div className='btn-filtros'>
                                Ilustraciones
                            </div>
                            <div className='btn-filtros-bg'></div>
                        </div>
                    </div>

                    <div className='btn-filtros-contain'>
                        <div className='btn-wrapper-filtros'>
                            <div className='btn-filtros'>
                                General
                            </div>
                            <div className='btn-filtros-bg'></div>
                        </div>
                    </div>

                    <div className='btn-filtros-contain'>
                        <div className='btn-wrapper-filtros'>
                            <div className='btn-filtros'>
                                Identidad de marca
                            </div>
                            <div className='btn-filtros-bg'></div>
                        </div>
                    </div>


                </div>

            </div>

            <div className='galeria'>

                <div className='galeria-img'>

                    <div className='diseño-redes'>

                    </div>
                    <div className='patron' >

                    </div>
                    <div className='ilus'  >

                    </div>
                    <div className='marca' >

                    </div>

                </div>

                <h4>GALERÍA DE IMAGENES</h4>

                <div className='ver-mas-proyectos'>
                    <a href='#'>Ver más proyectos <IoIosArrowRoundForward /> </a>
                </div>
            </div>

        </div>
    );
}

export default UltimosProyectos;