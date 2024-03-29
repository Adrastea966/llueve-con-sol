//Principal.js
import React, { useEffect, useRef } from 'react';
import { GoLinkExternal } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import ImgMain from '../img/inicio.png';
import Cohete from '../img/cohete 1.png';
import Altavoz from '../img/altavoz 1.png';
import '../App.css';

function Main() {

    //Movimiento de la imagen cohete y altavoz
    const altavozRef = useRef(null);
    const coheteRef = useRef(null);

    useEffect(() => {
        const initialAltavozPosition = {
            x: -10,
            y: -10,
        };

        const initialCohetePosition = {
            x: -10,
            y: -30,
        };

        const handleMouseMove = (event) => {
            const amplitude = 4;

            // Altavoz
            const altavozDeltaX = amplitude * (event.clientX / window.innerWidth - 0.5);
            const altavozDeltaY = amplitude * (event.clientY / window.innerHeight - 0.5);
            const altavozX = initialAltavozPosition.x + altavozDeltaX;
            const altavozY = initialAltavozPosition.y + altavozDeltaY;

            altavozRef.current.style.left = `${altavozX}%`;
            altavozRef.current.style.bottom = `${altavozY}%`;

            // Cohete
            const coheteDeltaX = amplitude * (event.clientX / window.innerWidth - 0.5);
            const coheteDeltaY = amplitude * (event.clientY / window.innerHeight - 0.5);
            const coheteX = initialCohetePosition.x + coheteDeltaX;
            const coheteY = initialCohetePosition.y + coheteDeltaY;

            coheteRef.current.style.right = `${coheteX}%`;
            coheteRef.current.style.top = `${coheteY}%`;
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className='container-main' id="main">
            <div className='main'>
                <div className='img-main'>
                    <img data-aos="fade-up" className='img-principal' src={ImgMain} alt="Imagen principal que muestra una foto del equipo" />
                    <img className='altavoz' ref={altavozRef} src={Altavoz} alt="Ilustración de un altavoz" />
                </div>
                <div className='texto-main'>
                    <div className='contenido-principal'>
                        <img className='cohete' ref={coheteRef} src={Cohete} alt="Ilustracion de un cohete" />
                        <h1 data-aos="fade-right"> Hacemos que tu marca brille ✨</h1>
                        <p data-aos="fade-right" data-aos-delay='100'>Brindamos servicios de diseño gráfico, desde ilustraciones, contenido para redes, braning y
                            más!, ¿Comenzamos? </p>
                        <button> <a href='https://api.whatsapp.com/send/?phone=5493512505250&text&type=phone_number&app_absent=0' target="_blank">Comenzar</a> <GoLinkExternal /> </button>
                    </div>
                    <div className='redes'>
                        <a href='https://www.instagram.com/llueve.con.sol/'  target="_blank"> <FaInstagram /> </a>
                        <a href='https://api.whatsapp.com/send/?phone=5493512505250&text&type=phone_number&app_absent=0'  target="_blank"> <FaWhatsapp /> </a>
                        <a href='#'> <FiMail /> </a>
                        <a href='https://www.behance.net/CamilaYoung' target="_blank"> <FaBehance /> </a>
                    </div>
                </div>
            </div>

            <div className='waves-container'>
                <svg className='waves' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="#FF490F" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="#FF794F" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="#FF490F" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#FF490F" />
                    </g>
                </svg>
            </div>

        </div>
    );
}

export default Main;