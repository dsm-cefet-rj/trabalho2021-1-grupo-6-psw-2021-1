import React, { Component, Provider } from 'react';

import "./assets/App.css";
import './assets/index.css';

import Routes from "./routes";

  const [consultas, setConsultas] useState(
    [{nome: 'Psicólogo 1', horario: '8:00', dia: 'segunda'},
     {nome: 'Psicólogo 2', horario: 'terça'}]
  );

class App extends Component  {
 
  render(){
    return(
    <Routes />
  );
  }
}


export default App;
