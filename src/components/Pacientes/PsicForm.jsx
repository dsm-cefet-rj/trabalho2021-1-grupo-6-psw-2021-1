import React, { Component } from 'react';

export default class PsicForm extends Component{
    _createCard(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.createCard();
    }

    render(){
        return(
        <form onSubmit={this._createCard.bind(this)}>
            <button>Novo Paciente</button>
          </form>
          );
    }
}
