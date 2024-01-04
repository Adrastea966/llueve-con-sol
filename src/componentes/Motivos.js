//Motivos.js
import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

function Motivos() {

    const [clientesCount, setClientesCount] = useState(0);
    const [proyectosCount, setProyectosCount] = useState(0);
    const [creativaCount, setCreativaCount] = useState(0);
    const puntosSectionRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const clientesInterval = setInterval(() => {
                        setClientesCount(prevCount => (prevCount < 20 ? prevCount + 1 : prevCount));
                    }, 50);

                    const proyectosInterval = setInterval(() => {
                        setProyectosCount(prevCount => (prevCount < 50 ? prevCount + 1 : prevCount));
                    }, 75);

                    const creativaInterval = setInterval(() => {
                        setCreativaCount(prevCount => (prevCount < 100 ? prevCount + 1 : prevCount));
                    }, 45);

                    return () => {
                        clearInterval(clientesInterval);
                        clearInterval(proyectosInterval);
                        clearInterval(creativaInterval);
                    };
                }
            });
        }, options);

        if (puntosSectionRef.current) {
            observer.observe(puntosSectionRef.current);
        }

        return () => {
            if (puntosSectionRef.current) {
                observer.unobserve(puntosSectionRef.current);
            }
        };
    }, []);

    return (
        <div className='motivos'  ref={puntosSectionRef}>
            <div className='motivos-container'>
                <div className='contador-1'>
                    <h4>+{clientesCount}</h4>
                    <p>Clientes satisfechos</p>
                </div>
                <div className='contador-2'>
                    <h4>+{proyectosCount}</h4>
                    <p>Proyectos realizados</p>
                </div>
                <div className='contador-3'>
                    <h4>+{creativaCount}</h4>
                    <p>De creatividad y pasión</p>
                </div>
            </div>
        </div>
    );
}

export default Motivos;