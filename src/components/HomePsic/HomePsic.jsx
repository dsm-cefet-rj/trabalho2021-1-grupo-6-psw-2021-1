import React, { Component } from 'react';


import PacientesList from "../PacientesList";
import PsicForm from "../PsicForm";

export default class HomePsic extends Component {

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
        <div class="container-sm">
        <p class="h1 text-center">OnPsic</p>
    
        <div class="d-flex align-items-start">
          <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Suporte Humanizado</button>
          </div>
        </div>
    
        <div class="list-group">
          <h3>Meus Serviços</h3>

          <PsicForm createCard={this.createCard.bind(this)}/>
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
          <PacientesList cards={this.state.cards}/>
        </div>
      </div>
    );
    }
  }

  