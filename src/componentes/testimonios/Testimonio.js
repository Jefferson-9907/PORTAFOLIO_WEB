import React from 'react';
import profile_maribel  from "../../images/profile_maribel.png";
import profile_alexander  from "../../images/profile_alexander.png";
import profile_pamela  from "../../images/profile_pamela.jpg";
import './Testimonio.css';

export const Testimonio = () => {
    return (
        <section className="opinions" id="opinions">
        <div className="max-width">
            <h2 className="subt">TESTIMONIOS</h2>
            <div className="carousel">
                <div className="card">
                    <div className="box">
                        <img src={profile_maribel} alt="" />
                        <div className="text text-4">MARIBEL FIGUEROA</div>
                        <div className="text">(Madre de Jefferson Cagua)</div>
                        <p>Aparte de ser un buen hijo considero que Jefferson es una increíble persona, siempre le encanta 
                            ayudar a quienes necesitan de él, siempre está dispuesto a apoyar, personalmente puedo decir 
                            que en sus 21 años que tiene no le gustan los problemas y por eso siempre trata de resolver de 
                            la mejor manera cualquiera que sea el inconveniente, es muy aplicado desde niño y cada cosa que
                            se propone siempre lo logra, un ejemplo muy evidente es lo nque ahora está haciendo, él 
                            siempre quizo estudiar la Universidad y ayudar a resolver problemas computacionales, ese fué su 
                            sueño desde muy pequeño y lo está logrando.</p>
                    </div>
                </div>
            </div>
            <div className="carousel owl-carousel">
                <div className="card">
                    <div className="box">
                        <img src={profile_alexander} alt="" />
                        <div className="text text-4">ALEXANDER RAMOS</div>
                        <div className="text">(Estudiante de LIC. en Enfermería "ITB")</div>
                        <p>Puedo decir que Jefferson es una persona muy dedicada y da el 100% a lo que está realizando, he 
                            visto muchas actitudes que realmente son admirables pa mí y que lo serían para cualquier persona, 
                            es un chico muy responsable y se esfuerza mucho por conseguir lo que quiere, veo muchos avances en 
                            lo que respecta a lo profesional y me asombra mucho lo que hace porque no cualquier persona es 
                            apasionada por lo que hace, aparte de ser una persona muy honesta y por decirlo así es nintachable 
                            y los comentarios hacia él siempre serán positivos, me gustaría decir que su esencia es de una 
                            persona humilde que se preocupa por el bienestar de las personas que lo rodean my toma muy enserio 
                            su trabajo. </p>
                    </div>
                </div>
            </div>
            <div className="carousel owl-carousel">
                <div className="card">
                    <div className="box">
                        <img src={profile_pamela} alt="" />
                        <div className="text text-4">PAMELA CAGUA</div>
                        <div className="text">(Estudiante de Administración de Empresas "ULEAM")</div>
                        <p>A Jefferson lo considero un excelente hermano, una persona con la cual puedo contar siempre y para 
                            lo que sea, es un joven muy dedicado a sus estudios y muy centrado en todo lo que hace y dice, le 
                            enecanta resaltar en tod lo que hace y es un apersona que persigue sus sueños y por lo más altos 
                            que estos se encuentren él siempre trata de alcanzarlos, no solo es un amaravillosa persona 
                            snó también un incríble profesional que aún se está formando y le veo mucho futuro por 
                            delante porque una cosa es estudiar una carrera Universitaria y otra cosa es que tenga esa pequeña 
                            parte innata de él que me dice que llegará demasiado lejos, lo admiro mucho por ser siempre así.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}