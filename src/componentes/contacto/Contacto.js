import React from 'react';
import './Contacto.css';

export const Contacto = () => {
    return (
        <div className="contact" id="contact">
            <div className="max-width">
            <h2 className="subt">CONTÁCTAME</h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="text text-4">¿Deseas Contactarme?</div>
                        <p>Si deseas contactarme a continuación se encuentra un formulario para su respectivo llenado y 
                            de esa manera resolver cualquier inconveniente o duda ya sea en el ámbito laboral o personal.</p>
                        <div className="icons">
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <div className="info">
                                    <div className="head">Nombre</div>
                                    <div className="sub-title">Jefferson Cagua</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="info">
                                    <div className="head">Ciudad</div>
                                    <div className="sub-title">Milagro, Guayas</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title">jcaguaf@unemi.edu.ec</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <div className="text">Envía un mensaje para contactarme</div>
                        <form action="#">
                            <div className="fields">
                                <div className="field name">
                                    <input type="text" placeholder="Nombre" required />
                                </div>
                                <div className="field email">
                                    <input type="email" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="field">
                                <input type="text" placeholder="Asunto" required />
                            </div>
                            <div className="field textarea">
                                <textarea cols="30" rows="10" placeholder="Mensaje..." required></textarea>
                            </div>
                            <div className="button">
                                <button type="submit">Enviar Mensaje</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}