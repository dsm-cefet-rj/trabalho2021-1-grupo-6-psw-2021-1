import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

<<<<<<< HEAD
                <button type="submit" class="btn btn-primary">Entrar</button>
=======
                <button type="submit" class="btn btn-primary" onClick={() => alert('Logado com sucesso!')}>Entrar</button>
>>>>>>> 43bc8c2b07eebeacd83c90d15684807b51c1b2af
                <Link to="/HomePac"></Link>
                <Link to="/senha"><small>Esqueceu a senha?</small></Link>
            </form>
        </div>
  );
  }
}
