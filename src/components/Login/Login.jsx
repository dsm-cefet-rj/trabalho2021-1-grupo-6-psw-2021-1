import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Login from "./Login";
// import Sobre from "./Sobre";
// import Usuario from "./Usuario";


export default class Login extends Component {
  render(){
    return(
        <div class="container-sm">
            <p class="h1 text-center">OnPsic</p>

            <form>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="exemplo@email.com" />
                    <label for="floatingInput">exemplo@email.com</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Senha" />
                    <label for="floatingPassword">Senha</label>
                </div>

                <button type="submit" class="btn btn-primary">Entrar</button>
                <Link to="/senha"><small>Esqueceu a senha?</small></Link>
            </form>
        </div>
  );
  }
}
