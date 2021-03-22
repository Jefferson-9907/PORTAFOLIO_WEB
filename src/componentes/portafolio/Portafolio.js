import React from 'react';
import proyecto2 from '../../images/proyecto_2.png'
import proyecto1 from '../../images/proyecto_1.png'
import './Portafolio.css';

export const Portafolio = () => {
    return (
        <section className="proyects" id="proyects">
            <div className="proyects max-width">
                <h2 className="subt">PROYECTOS REALIZADOS</h2>
                <div className="proyects-content">
                    <div className="column left"> 
                        <img src={proyecto2} alt="" />
                    </div>
                    <div className="column right">
                        <div className="text text-4">SIST_VENT</div>
                            <p>Inicié por primera vez realizando una interfaz sencilla pero muy llamativa, este programa 
                            trata de tomar como referencias a algunos sistemas para ventas de locales comerciales, 
                            los módulos  realizados por mi parte son muy intuitivos y de gran alcance, este proyecto 
                            fué una meta que me propuse al iniciar esta carrera y luego de cuatro semestre vi que ya 
                            era el momento para poner en práctica mis conociminetos en programación en python y SQL 
                            SERVER, al leer múltiples libros y algunos blogs de programación pude entender un poco 
                            más y fue así que lo estuve realizando durante las vacaciones luego de finalizar el 4°to 
                            semestre aunque aún se encuentra en etapa de desarrollo puedo decir que en sí es una 
                            propuesta muy buena.</p>
                    </div>

                    <div className="column left"> 
                        <img src={proyecto1} alt="" />
                    </div>
                    <div className="column right">
                        <div className="text text-4">SIST_CONTROL (IFAP)</div>
                        <p>Formo parte de un grupo de trabajo tres integrantes, los cuales son compañeros de curso 
                            en la Univesidad, este proyecto se está realizando de manera colaborativa para una empresa
                            privada que realiza capacitaciones certificadas de cursos muy interesantes y es muy 
                            conocida el cantón Durán, tiene como finalidad la reestruccturación de un sistema antiguo 
                            que se estaba utilizando y a partir de aquello se le está realizando muchas mejoras y 
                            resolviendo algunas fallas que tenía, desde luego se lo está desarrollando en el lenguaje 
                            Python con el módulo de interfáz de Tkinter y enlazado al gestor de base de datos SQL 
                            SERVER, el cual es el encragado de almacenar los datos requeridos.</p>
                    </div>
                </div>
            </div>
    </section>
        
    )
}