import React, { Component } from 'react';
import { Link} from 'react-router-dom';

export default class RegistrarPsic extends Component {
    render(){
      return(
        <div class="container-sm">
        <p class="h1 text-center">OnPsic</p>
        <p class="h4 text-center">Cadastre suas informações</p>
  
        <form>
          <div class="form-floating mb-3">
              <input type="number" class="form-control" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Digite seu CNP</label>
          </div>
          <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder="especialização" />
              <label for="floatingInput">Área de especialização</label>
          </div>
          <div class="col-sm-3 mb-3">
              <label class="visually-hidden" for="specificSizeSelect">Tipo de Atendimento</label>
              <select class="form-select" id="specificSizeSelect">
                <option selected disabled value>Tipo de Atendimento</option>
                <option value="1">Apenas presencial</option>
                <option value="2">Apenas remoto</option>
                <option value="2">Presencial e remoto</option>
              </select>
            </div>
          <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder="Região" />
              <label for="floatingInput">Região onde atua</label>
          </div>
          <div class="input-group mb-3">
              <span class="input-group-text">R$</span>
              <input type="number" class="form-control" aria-label="Valor da consulta" />
              <span class="input-group-text">,00</span>
            </div>
         
          <Link to="/psic"><button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" type="button" role="tab" aria-selected="true" onClick={() => alert('Conta criada com sucesso! ')}>Cadastrar</button></Link>

        </form>
      
      </div>
      
    );
    }
  }
  
