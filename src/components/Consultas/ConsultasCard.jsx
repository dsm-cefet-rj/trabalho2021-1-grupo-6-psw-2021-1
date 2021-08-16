import React, { Component } from 'react';

export default class ConsultasCard extends Component {
    render(){ 
        return(
          <section> 
            <a href="/#" class="list-group-item list-group-item-action" aria-current="true">
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
          </section> 
        );
    }
}