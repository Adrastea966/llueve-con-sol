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
                                <a onClick={() => scrollToSection('acerca-de')}>Acerca de</a>
                            </li>
                            <li>
                                <a onClick={() => scrollToSection('servicios')}>Servicios</a>
                            </li>
                            <li>
                                <a onClick={() => scrollToSection('galeria')}>Galería</a>
                            </li>
                            <li>
                                <a onClick={() => scrollToSection('contacto')}>Contacto</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='footer-redes'>
                    <a href='https://www.instagram.com/llueve.con.sol/' target="_blank"> <FaInstagram /> </a>
                    <a href='https://api.whatsapp.com/send/?phone=5493512505250&text&type=phone_number&app_absent=0' target="_blank"> <FaWhatsapp /> </a>
                    <a href='#'> <FiMail /> </a>
                    <a href='https://www.behance.net/CamilaYoung' target="_blank"> <FaBehance /> </a>
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