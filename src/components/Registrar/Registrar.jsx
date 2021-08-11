import React, { Component } from 'react';

export default class Registrar extends Component {
    render(){
      return(
        <div class="container-sm">
        <p class="h1 text-center">OnPsic</p>
        <p class="h4 text-center">Cadastre suas informações</p>

      <form>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="Nome" />
            <label for="floatingInput">Nome</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="Sobrenome" />
            <label for="floatingInput">Sobrenome</label>
        </div>
        <div class="form-floating mb-3">
            <input type="number" class="form-control" id="floatingInput" placeholder="CPF" />
            <label for="floatingInput">CPF</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="exemplo@email.com" />
            <label for="floatingInput">exemplo@email.com</label>
        </div>
        <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Senha" />
            <label for="floatingPassword">Senha</label>
        </div>
        
        <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Confirmar senha" />
            <label for="floatingPassword">Confirmar senha</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="Número de Telefone" />
            <label for="floatingInput">Número de Telefone - (00) 12345-6789</label>
        </div>

        <div class="col-sm-3 mb-3">
            <label class="visually-hidden" for="specificSizeSelect">Preference</label>
            <select class="form-select" id="specificSizeSelect">
              <option selected disabled value>Logar como...</option>
              <option value="1">Paciente</option>
              <option value="2">Psicólogo</option>
            </select>
          </div>
          <a href="./home_psic.html"><button type="submit" class="btn btn-primary">Entrar</button></a>
      </form>
    </div>
    );
  }
}
  