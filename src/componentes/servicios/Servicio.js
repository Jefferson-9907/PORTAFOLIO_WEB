import React from 'react';
import desarr_sof  from "../../images/desarr_sof.png";
import anali_bd  from "../../images/anali_bd.png";
import './Servicio.css';

export const Servicio = () => {
    return (
        <section className="study" id="service">
            <div className="max-width">
                <h2 className="subt">SERVICIOS</h2>
                <div className="study-content">
                    <div className="card">
                        <div className="box">
                            <div className="text">DESARROLLADOR DE SOFTWARE</div>
                            <img src={desarr_sof} alt="" />
                            <p>-Creación y diseños de nuevos sistemas.</p>
                            <p>-Mejoramiento de programas ya existentes.</p>
                            <p>-Evaluar sistemas nuevos y existentes.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="text img_center">ANALISTA DE BASE DE DATOS</div>
                            <img src={anali_bd} alt="" />
                            <p>-Creación de perfiles de datos y transformación.</p>
                            <p>-Realizar análisis de entorno.</p>
                            <p>-Recopilar y procesar datos.</p>
                        </div>
                    </div>
                </div>
                
            </div>   
        </section>
    )
}