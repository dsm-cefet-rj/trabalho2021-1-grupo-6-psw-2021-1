import React, { Component } from 'react';
import {Container, Typography } from "@material-ui/core"
import RegistrarForm from './RegistrarForm';
export default class RegistrarPsic extends Component {
    render(){
      return(
        <Container component="article" maxWidth="sm">
        <p class="h1 text-center">OnPsic</p>
        <p class="h4 text-center">Cadastre suas informações</p>
        <RegistrarForm aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
      </Container>
    );
    }
  }
  
  function aoEnviarForm(dados){
    console.log(dados);
  }
  
  function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido:false, texto:"CPF deve ter 11 digitos."}
    }else{
      return {valido:true, texto:""}
    }
  }