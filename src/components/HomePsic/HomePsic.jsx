import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Sobre from "./Sobre";
// import Login from "./Login";

export default class HomePsic extends Component {
    render(){
      return(
        <div class="container-sm">
        <p class="h1 text-center">OnPsic</p>
    
        <div class="d-flex align-items-start">
          <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Suporte Humanizado</button>
          </div>
        </div>
    
        <div class="list-group">
          <h3>Meus Serviços</h3>
          <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Paciente 01</h5>
              <small>08:00</small>
            </div>
            <p class="mb-1">Segunda-feira</p>
              <small>Remoto</small>
              <div class="d-grid gap-2 d-md-block mt-2 mb-1">
                <button class="btn btn-secondary" type="button">Contato</button>
                <button class="btn btn-secondary" type="button">Monitor de Humor</button>
              </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Paciente 02</h5>
                <small>10:00</small>
              </div>
              <p class="mb-1">Terça-feira</p>
              <small>Remoto</small>
              <div class="d-grid gap-2 d-md-block mt-2 mb-1">
                <button class="btn btn-secondary" type="button">Contato</button>
                <button class="btn btn-secondary" type="button">Monitor de Humor</button>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Paciente 03</h5>
                <small>15:00</small>
              </div>
              <p class="mb-1">Sábado</p>
              <small>Presencial</small>
              <div class="d-grid gap-2 d-md-block mt-2 mb-1">
                <button class="btn btn-secondary" type="button">Contato</button>
                <button class="btn btn-secondary" type="button">Monitor de Humor</button>
              </div>
            </a>
        </div>
      </div>
    );
    }
  }

  