import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Home extends Component {
    render(){
      return(
          <div class="container-sm">
        <p class="h1 text-center">OnPsic</p>
        <p class="h4 text-center">A sua plataforma de consulta terapeutica online.</p>
      
   <div class="d-flex align-items-start">
     <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <Link to="/sobre"><button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" type="button" role="tab" aria-selected="true">Sobre nós</button></Link>
          <Link to="/login"><button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Login</button></Link>
          <Link to="/registrar"><button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Registrar</button></Link>
      </div>
     </div>
      </div>
    );
    }
  }

  
