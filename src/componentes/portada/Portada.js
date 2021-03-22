import React from "react"
import './Portada.css';

export const Portada = () => {
    return (
        <div className="portada" id="portada">
            <div className="max-width">
                <div className="portada-content">
                    <div className="text-1">Hola, mi nombre es</div>
                    <div className="text-2">Jefferson Cagua</div>
                    <div className="text-3">Estudiante de Ingeniería de Software</div>
                    <div className="fras">"El destino no está escrito, somos nosotros mismos quienes lo hacemos con cada desición que tomamos"</div>
                    <a href="#contact" className="menu-btn">Contacto</a>
                </div>
            </div>
        </div>
    )
}