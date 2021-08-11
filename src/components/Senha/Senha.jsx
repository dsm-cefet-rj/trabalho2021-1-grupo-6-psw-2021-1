import React, { Component } from 'react';

export default class Senha extends Component {
    render(){
      return(
        <div class="container-sm">
        <p class="h1 text-center">OnPsic</p>
  
          <form>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="exemplo@email.com" />
                <label for="floatingInput">exemplo@email.com</label>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
          </form>
      </div>
    );
    }
  }
  