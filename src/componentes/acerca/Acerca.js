import React from 'react';
import profile_jefferson1  from "../../images/profile_jefferson1.png";
import './Acerca.css';


export const Acerca = () => {
    return (
        <section className="about" id="about">
            <div className="max-width">
                <h2 className="subt">SOBRE MÍ</h2>
                <div className="about-content">
                    <div className="column left">
                    <img src={profile_jefferson1} alt="" />
                    </div>
                    <div className="column right">
                        <div className="text">Hola, mi nombre es Jefferson Gregorio Cagua Figueroa.</div>
                        <p>Soy estudiante de Ingeniería de Software de la Universidad Estatal de Milagro (UNEMI), 
                            tengo 21 años de edad, nací en la provincia de Manabí un 07 de abril del año 1999, 
                            soy el quinto de 6 hermanos, tres mujeres y tres varones, siempre ne ha llamado la 
                            atención el mundo de las computadoras y aparatos electrónicos y fué allí que me dí 
                            cuenta que realmente me apasiona completamente es ésto, es que para uno hacer algo 
                            tiene que gustarle mucho y así realizar todo lo que se propone.</p>
                        <a href="#contact">Contacto</a>
                    </div>
                </div>
            </div>
        </section>
    )
}