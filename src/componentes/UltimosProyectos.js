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
                    <div className='filtros-contain'>
                        <h3>Ilustraciones</h3>
                    </div>
                    <div className='filtros-contain'>
                        <h3>General</h3>
                    </div>
                    <div className='filtros-contain'>
                        <h3>Identidad de marca</h3>
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