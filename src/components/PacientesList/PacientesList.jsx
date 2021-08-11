import React, { Component } from 'react';
import PacientesCard from '../PacientesCard';

export default class PacientesList extends Component{
    
    render(){
        return(
        <ul>
            {this.props.cards.map((card, index) => {
                return(
                    <li key={index}> 
                        <PacientesCard index={index+2} />
                    </li>
                );
            })} 
        </ul>
        );
    }
   
}