// Header.js
import React, { useState, useEffect } from 'react';
import '../App.css';
import Logo from '../img/logo.jpg';
import { IoCloseCircleOutline } from "react-icons/io5";


function Header() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    setScrollHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyle = {
    height: scrollHeight > 100 ? '9vh' : '12vh',
    transition: 'height 0.4s ease',
  };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  //Cerrar menu hamburguesa
  const handleCloseClick = () => {
    setShowMenu(false);
  };

  //Cerrar el menú al hacer clic en los li
  const handleLiClick = (sectionId) => {
    scrollToSection(sectionId);
    setShowMenu(false); 
  };

  return (
    <div className='header' style={headerStyle}>
      <div className='logo-container-hamburguesa'>
        <img className='logo' src={Logo} alt="Logo de la empresa"  onClick={() => scrollToSection('main')}/>
      </div>
      <div className='menu-icon' onClick={toggleMenu}>
        ☰
      </div>
      <nav>
        <ul className={showMenu ? 'show' : ''}>
          <div className='close' onClick={handleCloseClick}>
            <IoCloseCircleOutline />
          </div>
          <li class='li'  onClick={() => handleLiClick('acerca-de')}>
            <a>Acerca de</a>
            <div class="ball"></div>
          </li>
          <li class='li'  onClick={() => handleLiClick('servicios')}>
            <a>Servicios</a>
            <div class="ball"></div>
          </li>
          <div className='logo-container'  onClick={() => scrollToSection('main')}>
            <img className='logo' src={Logo} alt="Logo de la empresa" />
          </div>
          <li class='li'  onClick={() => handleLiClick('galeria')}>
            <a>Galería</a>
            <div class="ball"></div>
          </li>
          <li class='li'  onClick={() => handleLiClick('contacto')}>
            <a>Contacto</a>
            <div class="ball"></div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;