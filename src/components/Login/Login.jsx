import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
export default class Login extends Component {
    render(){
        return(
            <div id="login">
                <h3 class="text-center text-white pt-5">Login form</h3>
                <div class="container">
                    <div id="login-row" class="row justify-content-center align-items-center">
                        <div id="login-column" class="col-md-6">
                            <div id="login-box" class="col-md-12">
                                <form id="login-form" class="form" action="" method="post">
                                    <h3 class="text-center text-info">Login</h3>
                                    <div class="form-group">
                                        <label for="username" class="text-info">Login:</label><br />
                                        <input type="text" name="username" id="username" class="form-control"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="password" class="text-info">Senha:</label><br /> 
                                        <input type="text" name="password" id="password" class="form-control"/><br />
                                    </div>
                                    <div class="form-group">
                                        <label for="remember-me" class="text-info"><span>Remember me</span><span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br/>
                                        <a href="./Login">
                                        <input type="submit" name="submit" class="btn btn-info btn-md" value="Logar"/>
                                        </a>
                                    </div>
                                    <div id="register-link" class="text-right"> 
                                        <a href="./Registrar" class="text-info">Registrar</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}
    
