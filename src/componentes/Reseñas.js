//Reseñas
import React, { useEffect, useRef } from 'react';
import '../App.css';
import DialogoUno from '../img/dialogo1.png'
import DialogoDos from '../img/dialogo2.png'
import DialogoTres from '../img/dialogo3.png'
import EstrellaUno from '../img/estrella1.png'
import EstrellaDos from '../img/estrella2.png'
import Circulo from '../img/circulo.png'
import Triangulo from '../img/triangulo.png'
import CuadradoTres from '../img/cuadrado2.png'

function Reseñas() {

    const estrella1Ref = useRef(null);
    const estrella2Ref = useRef(null);
    const trianguloRef = useRef(null);
    const circuloRef = useRef(null);
    const cuadradoRef = useRef(null);

    useEffect(() => {
        const initialEstrella1Position = {
            left: 9,
            bottom: 20,
        };

        const initialEstrella2Position = {
            right: 28,
            top: 3,
        };

        const initialTrianguloPosition = {
            left: 26,
            top: 0,
        };

        const initialCirculoPosition = {
            left: 42,
            bottom: 25,
        };

        const initialCuadradoPosition = {
            right: 10,
            bottom: 35,
        };

        const handleMouseMove = (event) => {
            const amplitude = 2;

            // Estrella1
            const estrella1DeltaX = amplitude * (event.clientX / window.innerWidth - 0.5);
            const estrella1DeltaY = amplitude * (event.clientY / window.innerHeight - 0.5);
            const estrella1Left = initialEstrella1Position.left + estrella1DeltaX;
            const estrella1Bottom = initialEstrella1Position.bottom + estrella1DeltaY;

            estrella1Ref.current.style.left = `${estrella1Left}%`;
            estrella1Ref.current.style.bottom = `${estrella1Bottom}%`;

            // Estrella2
            const estrella2DeltaX = amplitude * (event.clientX / window.innerWidth - 0.5);
            const estrella2DeltaY = amplitude * (event.clientY / window.innerHeight - 0.5);
            const estrella2Right = initialEstrella2Position.right + estrella2DeltaX;
            const estrella2Top = initialEstrella2Position.top + estrella2DeltaY;

            estrella2Ref.current.style.right = `${estrella2Right}%`;
            estrella2Ref.current.style.top = `${estrella2Top}%`;

            // Triangulo
            const trianguloDeltaX = amplitude * (event.clientX / window.innerWidth - 0.5);
            const trianguloDeltaY = amplitude * (event.clientY / window.innerHeight - 0.5);
            const trianguloLeft = initialTrianguloPosition.left + trianguloDeltaX;
            const trianguloTop = initialTrianguloPosition.top + trianguloDeltaY;

            trianguloRef.current.style.left = `${trianguloLeft}%`;
            trianguloRef.current.style.top = `${trianguloTop}%`;

            // Circulo
            const circuloDeltaX = amplitude * (event.clientX / window.innerWidth - 0.5);
            const circuloDeltaY = amplitude * (event.clientY / window.innerHeight - 0.5);
            const circuloLeft = initialCirculoPosition.left + circuloDeltaX;
            const circuloBottom = initialCirculoPosition.bottom + circuloDeltaY;

            circuloRef.current.style.left = `${circuloLeft}%`;
            circuloRef.current.style.bottom = `${circuloBottom}%`;

            // Cuadrado
            const cuadradoDeltaX = amplitude * (event.clientX / window.innerWidth - 0.5);
            const cuadradoDeltaY = amplitude * (event.clientY / window.innerHeight - 0.5);
            const cuadradoLeft = initialCuadradoPosition.right + cuadradoDeltaX;
            const cuadradoBottom = initialCuadradoPosition.bottom + cuadradoDeltaY;

            cuadradoRef.current.style.right = `${cuadradoLeft}%`;
            cuadradoRef.current.style.bottom = `${cuadradoBottom}%`;
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className='reseñas'>
            <div className='reseñas-container'>

                <img ref={estrella1Ref} className='estrella1' src={EstrellaUno} alt="Ilustracion decorativa estrella, siguen el movimiento del cursor " />
                <img ref={estrella2Ref} className='estrella2' src={EstrellaDos} alt="Ilustracion decorativa estrella, siguen el movimiento del cursor " />
                <img ref={trianguloRef} className='triangulo' src={Triangulo} alt="Ilustracion decorativa triangulo, siguen el movimiento del cursor" />
                <img ref={circuloRef} className='circulo' src={Circulo} alt="Ilustracion decorativa circulo, siguen el movimiento del cursor" />
                <img ref={cuadradoRef} className='cuadrado-3' src={CuadradoTres} alt="Ilustracion decorativa cuadrado rosa, siguen el movimiento del cursor" />

                <div className='dialogo1' data-aos="fade-up">
                    <img src={DialogoUno} alt="Reseña uno de la empresa" />
                </div>
                <div className='dialogo2 diag2' data-aos="fade-up" data-aos-delay='100'>
                    <img src={DialogoDos} alt="Reseña dos sobre la empresa" />
                </div>
                <div className='dialogo3' data-aos="fade-up" data-aos-delay='200'>
                    <img src={DialogoTres} alt="Reseña tres sobre la empresa" />
                </div>

            </div>
        </div>
    );
}

export default Reseñas;