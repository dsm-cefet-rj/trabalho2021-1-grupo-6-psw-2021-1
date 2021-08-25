import React, { Component } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { useHistory } from 'react-router-dom';

export default class PsicForm extends Component{
    
    
=======

export default class PsicForm extends Component{
>>>>>>> 43bc8c2b07eebeacd83c90d15684807b51c1b2af
=======

export default class PsicForm extends Component{
>>>>>>> 43bc8c2b07eebeacd83c90d15684807b51c1b2af
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
