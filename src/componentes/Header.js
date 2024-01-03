//Header.js
import React from 'react';
import '../App.css';
import Logo from '../img/logo.jpg';

function Header() {
  return (
    <div className='header'>
      <nav>
        <ul>
            <li>
                <a>Acerca de</a>
            </li>
            <li>
                <a>Servicios</a>
            </li>
            <li>
            <a>
              <img className='logo' src={Logo} alt="Logo de la empresa" />
            </a>
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
  );
}

export default Header;