//Extra
import React from 'react';
import '../App.css';
import Estrella from '../img/estrella.png'
import Nube from '../img/brand.png'

function Extra() {

    return (
        <div className='extra'>
        
            <div className='extra-contenido'>

                <div className='extra-descripcion'>
                    <h2>¡Servicio extra!</h2>
                    <h3>¿Necesitas potenciar tu marca?</h3>
                    <p>Realizamos cartelería y papelería institucional,
                        Merchandising y ploteos. También, realizamos
                        tu identidad de marca y el packaging de tu empresa!</p>
                </div>
                <img className='estrella' src={Estrella} alt="Ilustracion de una estrella. Decoracion" />
                <img className='nube' src={Nube} alt="Ilustración que dice brand. Decoracion" />

            </div>

        </div>
    );
}

export default Extra;