import React, { Component } from 'react';
import ConsultasCard from './ConsultasCard';

export default class ConsultasList extends Component{
    
    render(){
        return(
        <ul>
            {this.props.cards.map((card, index) => {
                return(
                    <li key={index}> 
                        <ConsultasCard index={index+2} />
                    </li>
                );
            })} 
        </ul>
        );
    }
   
}