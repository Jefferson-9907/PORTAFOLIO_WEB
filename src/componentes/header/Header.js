import React from "react";
import logo_jc from '../../images/logo_jc.jpg'
import {Link, Route, Router} from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
        <header className="header" id="header">
            <a href="/" className="logo">
                <img src={logo_jc} alt="/" width="75"/>
            </a>
            <ul>
                <li>
                    <a href="#about">Acerca</a>
                </li>
                <li>
                    <a href="#service">Servicios</a>
                </li>
                <li>
                    <a href="#proyects">Portafolio</a>
                </li>
                <li>
                    <a href="#opinions">Testimonios</a>
                </li>
                <li>
                    <a href="#contact">Contacto</a>
                </li>
                <li>
                    <Link to="/Configuracion">{'Configuración'}</Link>
                </li>
            </ul>
        </header>
    )
}