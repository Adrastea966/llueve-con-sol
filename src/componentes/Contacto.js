import React from 'react';
import '../App.css';

function Contacto() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para manejar el envío del formulario
    };

    return (
        <div className='contacto'>
            <div className="contacto-formulario">
                <form id="form" action="" className="form" onSubmit={handleSubmit}>
                    <h3>Contactanos</h3>
                    <label htmlFor="name">Nombre Completo <span>*</span></label>
                    <input name="name" required type="text" id="name" placeholder="Tu nombre" />
                    <label htmlFor="email">Correo electrónico <span>*</span></label>
                    <input name="email" type="email" id="email" className="input" required placeholder="tuemail@gmail.com" />
                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" name="message" cols="30" rows="10"></textarea>
                    <div className="btn-submit">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
                <a href="mailto:liu_creations@outlook.com" id="mail-to">mail</a>
            </div>
        </div>
    );
}

export default Contacto;
