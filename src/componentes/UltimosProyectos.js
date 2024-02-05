import React, { useState } from 'react';
import '../App.css';
import Pluma from '../img/pluma.png';
import { IoIosArrowRoundForward } from 'react-icons/io';

function UltimosProyectos() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('general');

    const handleFiltroClick = (categoria) => {
        setCategoriaSeleccionada(categoria);
    };

    return (
        <div className='proyectos' id='galeria'>
            <img className='pluma' src={Pluma} alt='Imagen decorativa de una pluma' />

            <div className='titulo-filtros'>
                <h2 data-aos='fade-right'>03.ÚLTIMOS PROYECTOS</h2>

                <div className='filtros'>
                    <div className='btn-filtros-contain'>
                        <div
                            className={`btn-wrapper-filtros ${categoriaSeleccionada === 'ilustraciones' ? 'seleccionado' : ''
                                }`}
                            onClick={() => handleFiltroClick('ilustraciones')}
                        >
                            <div className='btn-filtros ilustraciones'>Ilustraciones</div>
                            <div className='btn-filtros-bg'></div>
                        </div>
                    </div>

                    <div className='btn-filtros-contain'>
                        <div
                            className={`btn-wrapper-filtros ${categoriaSeleccionada === 'general' ? 'seleccionado' : ''
                                }`}
                            onClick={() => handleFiltroClick('general')}
                        >
                            <div className='btn-filtros general'>General</div>
                            <div className='btn-filtros-bg'></div>
                        </div>
                    </div>

                    <div className='btn-filtros-contain'>
                        <div
                            className={`btn-wrapper-filtros ${categoriaSeleccionada === 'identidad' ? 'seleccionado' : ''
                                }`}
                            onClick={() => handleFiltroClick('identidad')}
                        >
                            <div className='btn-filtros identidad'>Identidad de marca</div>
                            <div className='btn-filtros-bg'></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='galeria'>
                <div className='galeria-img'>
                    {categoriaSeleccionada === 'general' && (
                        <>
                            <div className='diseño-redes' data-aos='fade-up'>
                                <button>Ver trabajo <IoIosArrowRoundForward /> </button>
                            </div>
                            <div className='patron' data-aos='fade-up' data-aos-delay='100'>
                                <button>Ver trabajo <IoIosArrowRoundForward /> </button>
                            </div>
                            <div className='ilus' data-aos='fade-up' data-aos-delay='200'>
                                <button>Ver trabajo <IoIosArrowRoundForward /> </button>
                            </div>
                            <div className='marca' data-aos='fade-up' data-aos-delay='300'>
                                <button>Ver trabajo <IoIosArrowRoundForward /> </button>
                            </div>
                        </>
                    )}

                    {categoriaSeleccionada === 'ilustraciones' && (
                        <>
                            <div className='ilus' data-aos='fade-up' data-aos-delay='200'>
                                <button>Ver trabajo <IoIosArrowRoundForward /> </button>
                            </div>
                            <div className='patron' data-aos='fade-up' data-aos-delay='100'>
                                <button>Ver trabajo <IoIosArrowRoundForward /> </button>
                            </div>
                        </>
                    )}

                    {categoriaSeleccionada === 'identidad' && (
                        <>
                            <div className='diseño-redes' data-aos='fade-up'>
                                 <button>Ver trabajo <IoIosArrowRoundForward /> </button>
                            </div>
                            <div className='marca' data-aos='fade-up' data-aos-delay='300'>
                                 <button>Ver trabajo <IoIosArrowRoundForward /> </button>
                            </div>
                        </>
                    )}
                </div>

                <div className='ver-mas-proyectos'>
                    <a href='https://www.instagram.com/llueve.con.sol/' target="_blank">
                        Ver más proyectos <IoIosArrowRoundForward />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default UltimosProyectos;