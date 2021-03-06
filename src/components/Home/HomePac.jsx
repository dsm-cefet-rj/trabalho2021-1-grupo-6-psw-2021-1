import React, { Component } from 'react';

import ConsultasList from "../Consultas/ConsultasList";
import ConsultasForm from "../Consultas/ConsultasForm";

import {Container, Typography } from "@material-ui/core"
export default class HomePac extends Component {

  constructor(){
    super();
    this.state = {
      cards:[]
    }
  }

  createCard(title, text){
    const newCard = {title, text};
    const newArrayCards = [...this.state.cards, newCard]
    const newState = {
      cards:newArrayCards
    }
    this.setState(newState)
  }
    render(){
      return(
        <Container component="article" maxWidth="sm">
    <p class="h1 text-center">OnPsic</p>

    <div class="d-flex align-items-start">
      <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Suporte Humanizado</button>
        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Monitor de Humor</button>
      </div>
    </div>
    <ConsultasForm createCard={this.createCard.bind(this)}/>
    
    <div class="list-group">
      <h3>Consultas agendadas</h3>
      <a href="/#" class="list-group-item list-group-item-action active" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Psicólogo 01</h5>
          <small>08:00</small>
        </div>
        <p class="mb-1">Segunda-feira</p>
        <small>Remoto</small>
        <div class="d-grid gap-2 d-md-block mt-2 mb-1">
          <button class="btn btn-secondary" type="button">Contato</button>
        </div>
      </a>
      <ConsultasList cards={this.state.cards}/>
    </div>
    <form class="row g-3">
      <div class="col-sm-3 mb-3">
        <label class="visually-hidden" for="specificSizeSelect">Tipo de Especialista</label>
        <select class="form-select" id="specificSizeSelect">
          <option selected disabled value>Tipo de Especialista</option>
          <option value="1">Psicologia Escolar/Educacional</option>
          <option value="2">Psicologia Organizacional e do Trabalho</option>
          <option value="3">Psicologia Clínica</option>
          <option value="4">Psicologia Hospitalar</option>
          <option value="5">Psicopedagogia</option>
          <option value="6">Psicomotricidade</option>
          <option value="7">Neuropsicologia</option>
          <option value="8">Avaliação Psicológica</option>
        </select>
      </div>

      <div class="col-sm-3 mb-3">
        <label class="visually-hidden" for="specificSizeSelect">Motivo</label>
        <select class="form-select" id="specificSizeSelect">
          <option selected disabled value>Motivo</option>
          <option value="1">Luto</option>
          <option value="2">Estresse e Ansiedadee</option>
          <option value="3">Depressão</option>
          <option value="4">Relacionamentos</option>
          <option value="5">Vícios</option>
          <option value="6">Transtornos mentais</option>
          <option value="7">Prevenção</option>
        </select>
      </div>
    </form>

    <div class="card-group">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Drª Maria de Algo</h5>
          <p class="card-text">Especializações:
            <ul>
              <li><small class="text-muted">Autoconhecimento</small></li>
              <li><small class="text-muted">Depressão</small></li>
            </ul>
            <small class="text-muted">R$100/50min</small>
          </p>
          <div class="d-grid gap-2 d-md-block mt-2 mb-1">
            <button class="btn btn-secondary" type="button">Agendar</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Drº Pedro de Algo</h5>
          <p class="card-text">Especializações:
            <ul>
              <li><small class="text-muted">Autoestima</small></li>
              <li><small class="text-muted">Traumas</small></li>
              <li><small class="text-muted">Ansiedade</small></li>
            </ul>
            <small class="text-muted">R$80/50min</small>
          </p>
          <div class="d-grid gap-2 d-md-block mt-2 mb-1">
            <button class="btn btn-secondary" type="button">Agendar</button>
          </div>
        </div>
      </div>
    </div>
  </Container>
    );
    }
  }

  