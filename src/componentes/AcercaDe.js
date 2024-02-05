import React, { useState } from 'react';
import '../App.css';
import PersonaUno from '../img/persona1.jpg';
import PersonaDos from '../img/persona2.jpg';
import PersonaTres from '../img/persona3.jpg';
import PersonaCuatro from '../img/persona4.jpg';
import PersonaUnoCard from '../img/persona1-removebg-preview.png';
import PersonaDosCard from '../img/persona2-removebg-preview.png';
import PersonaTresCard from '../img/persona3-removebg-preview.png';
import PersonaCuatroCard from '../img/persona4-removebg-preview.png';

function Acerca() {
  const [displayClasses, setDisplayClasses] = useState(['display', 'display', 'display', 'display']);
  const [aosClasses, setAosClasses] = useState(['flip-right', 'flip-right', 'flip-right', 'flip-right']);

  const handleEquipoClick = (index) => {
    const updatedDisplayClasses = displayClasses.map((_, i) => (i === index ? '' : 'display'));
    const updatedAosClasses = aosClasses.map((_, i) => (i === index ? 'flip-right' : ''));
    setDisplayClasses(updatedDisplayClasses);
    setAosClasses(updatedAosClasses);
  };

  return (
    <div className='acerca-de' id="acerca-de">
      <div className='acerca-de-container'>
        <h2 data-aos="fade-right">02.SOBRE NOSOTROS</h2>

        <div className='card-informacion'>

          <div className='card-informacion-primer-bloque'>
            <div className='card-titulos'>
              <h2>Somos llueve con sol ✨</h2>
              <h3>Conocé a nuestro equipo</h3>
            </div>
            <div className='descripcion'>
              <p>Somos un equipo de diseño gráfico apasionado y altamente dedicado, especializado en
                proporcionar soluciones creativas y personalizadas. Nos destacamos por nuestra capacidad para
                comprender tus necesidades y ofrecer las mejores soluciones gráficas que no solo cumplen, sino
                que superan tus expectativas.</p>
            </div>
            <div className='container-equipo'>
              <div className={`equipo1 ${aosClasses[0]}`} onClick={() => handleEquipoClick(0)}>
                <img className='equipo' src={PersonaUno} alt="Imagen de integrante del grupo" />
              </div>
              <div className={`equipo2 ${aosClasses[1]}`} onClick={() => handleEquipoClick(1)}>
                <img className='equipo' src={PersonaDos} alt="Imagen de integrante del grupo" />
              </div>
              <div className={`equipo3 ${aosClasses[2]}`} onClick={() => handleEquipoClick(2)}>
                <img className='equipo' src={PersonaTres} alt="Imagen de integrante del grupo" />
              </div>
              <div className={`equipo4 ${aosClasses[3]}`} onClick={() => handleEquipoClick(3)}>
                <img className='equipo' src={PersonaCuatro} alt="Imagen de integrante del grupo" />
              </div>
            </div>
          </div>

          <div className='card-informacion-segundo-bloque'>
            <div className={`card-personal ${displayClasses[0]} ${aosClasses[0]} card-personal-1`}>
              <h2>Hola! Soy Cami</h2>
              <h3>Fundadora de LLCS</h3>
              <p className='p-card'>Hasta el más mínimo detalle de la vida me fascina. No dejo de maravillarme de la naturaleza. En ella encuentro paz e inspiración.
                Amo los colores, la ilustración y las artes marciales. Me apasiona conocer distintas culturas.</p>
              <img className='card-img' src={PersonaUnoCard} alt="Imagen de integrante del grupo" />
            </div>
            <div className={`card-personal ${displayClasses[1]} ${aosClasses[1]} card-personal-2`}>
              <h2>Hola! Soy Dani</h2>
              <h3>Copywriter</h3>
              <p className='p-card'>Disfruto de los placeres mundanos: comer y tomar rico. Soy fotógrafa y escribo lo que se me ocurre
                en diferentes lugares. Me gustan las plantas y Racing Club de Avellaneda. Más me gustan mis amigxs,
                con quienes creo que podemos cambiar el mundo.
              </p>
              <img className='card-img' src={PersonaDosCard} alt="Imagen de integrante del grupo" />
            </div>
            <div className={`card-personal ${displayClasses[2]} ${aosClasses[2]} card-personal-3`}>
              <h2>Hola! Soy Josefina</h2>
              <h3>Diseñadora Gráfica</h3>
              <p className='p-card'>Soy diseñadora gráfica amante de los libros y entusiasta del vermut. Creo en la astrología
                solo cuando me conviene.
              </p>
              <img className='card-img' src={PersonaTresCard} alt="Imagen de integrante del grupo" />
            </div>
            <div className={`card-personal ${displayClasses[3]} ${aosClasses[3]} card-personal-4`}>
              <h2>Hola! Soy Jere</h2>
              <h3>Ilustrador</h3>
              <p className='p-card-jere'>Desde que tengo uso de razón me gusta dibujar. Soy futbolista profesional, toco la guitarra y la
                batería. También soy vegano y me encanta experimentar con la cocina. Desde que ilustro digitalmente,
                me fascinan y vuelan la cabeza las infinitas posibilidades que ofrece el arte digital.
              </p>
              <img className='card-img' src={PersonaCuatroCard} alt="Imagen de integrante del grupo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acerca;
