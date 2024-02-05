//Contacto
import React from 'react';
import '../App.css';
import { LuSend } from "react-icons/lu";

function Contacto() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className='contacto' id="contacto">

            <div className="contacto-formulario">

                <div className='charlemos'> <h2>CHARLEMOS 👀</h2></div>
                <form id="form" action="" className="form" onSubmit={handleSubmit}>

                    <div className='nombre-correo-container'>
                        
                        <div className='nombre' data-aos="fade-up">
                            <label htmlFor="name">Nombre Completo <span>*</span></label>
                            <input name="name" required type="text" id="name" placeholder="Tu nombre" />
                        </div>

                        <div className='correo' data-aos="fade-up" data-aos-delay='100'>
                            <label htmlFor="email">Correo electrónico <span>*</span></label>
                            <input name="email" type="email" id="email" className="input" required placeholder="tuemail@gmail.com" />
                        </div>

                    </div>

                    <label htmlFor="message" data-aos="fade-up" data-aos-delay='200'>Mensaje</label>
                    <textarea data-aos="fade-up" data-aos-delay='200' id="message" name="message" cols="30" rows="10"></textarea>
                    <div className="btn-submit">
                        <button type="submit">Enviar <LuSend /> </button>
                    </div>

                </form>
                <a href="mailto:liu_creations@outlook.com" id="mail-to">mail</a>
            </div>

            <div className="container">
                <div className="rain">
                    <div className="drop"></div>
                    <div className="waves">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="splash"></div>
                    <div className="particles">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div className="rain">
                    <div className="drop"></div>
                    <div className="waves">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="splash"></div>
                    <div className="particles">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div className="rain">
                    <div className="drop"></div>
                    <div className="waves">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="splash"></div>
                    <div className="particles">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div className="rain">
                    <div className="drop"></div>
                    <div className="waves">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="splash"></div>
                    <div className="particles">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div className="rain">
                    <div className="drop"></div>
                    <div className="waves">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="splash"></div>
                    <div className="particles">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div className="rain">
                    <div className="drop"></div>
                    <div className="waves">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="splash"></div>
                    <div className="particles">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div className="rain">
                    <div className="drop"></div>
                    <div className="waves">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="splash"></div>
                    <div className="particles">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div className="rain">
                    <div className="drop"></div>
                    <div className="waves">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="splash"></div>
                    <div className="particles">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div className="rain">
                    <div className="drop"></div>
                    <div className="waves">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="splash"></div>
                    <div className="particles">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacto;
