import React from "react";
import { Acerca } from "./componentes/acerca/Acerca";
import { Servicio } from "./componentes/servicios/Servicio";
import { Contacto } from "./componentes/contacto/Contacto";
import { Portafolio } from "./componentes/portafolio/Portafolio";
import { Testimonio } from "./componentes/testimonios/Testimonio";
import { Header } from "./componentes/header/Header";
import { Portada } from "./componentes/portada/Portada";
import 'boxicons';


import { BrowserRouter as Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route>
      <Header/>
      <Portada/>
      <Acerca/>
      <Servicio/>
      <Portafolio/>
      <Testimonio/>
      <Contacto/>
      </Route>
    </div>
  );
}

export default App;
