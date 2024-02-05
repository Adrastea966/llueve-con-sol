//Footer
import React from 'react';
import '../App.css';
import LogoBlanco from '../img/logo-blanco.svg';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

function Footer() {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='footer'>

            <div className='container-footer-top'>
                <div className='footer-logo'  onClick={() => scrollToSection('main')}>
                    <img className='logo-blanco' src={LogoBlanco} alt="Logo de la empresa, en version blanco." />
                </div>
                <div className='footer-nav-container'>
                    <nav className='footer-nav'>
                        <ul>
                            <li>
                                <a>Acerca de</a>
                            </li>
                            <li>
                                <a>Servicios</a>
                            </li>
                            <li>
                                <a>Galería</a>
                            </li>
                            <li>
                                <a>Contacto</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='footer-redes'>
                    <a href='#'> <FaInstagram /> </a>
                    <a href='#'> <FaWhatsapp /> </a>
                    <a href='#'> <FiMail /> </a>
                    <a href='#'> <FaBehance /> </a>
                </div>
            </div>

            <div className='container-footer-bottom'>
                <div className='footer-derechos'> <h4>©copyright Llueve con sol 2024 | Sitio desarrollado por Liu</h4> </div>
                <div className='up' onClick={() => scrollToSection('main')}><FaArrowUp /></div>
            </div>

        </div>
    );
}

export default Footer;