import React, { useState, useEffect, Component } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {addConsultaServer, updateConsultaServer} from './ConsultasSlice'

const consultas = useSelector(state => state.projetos)
const history = useHistory();
const dispatch = useDispatch();
let {nome} = useParams();

    const[consulta, setConsulta] = useState(
        nome ? consultas.filter((p) => p.nome === nome)[0] ?? {} : {});

    const[actionType, ] = useState(
        nome ?
            consultas.filter((p) => p.id)[0]
                ? 'consultas/updateConsulta'
                : 'consultas/addConsulta'
                : 'consultas/addConsulta');

    function handleInputChange(e){
        setConsulta( {...consulta, [e.target.name]: e.target.value} )
    }
    
    function handleSubmit(e){
        e.preventDefault();
        if(actionType === 'consultas/addConsulta'){
            dispatch(addConsulta(consulta));
        }else{ 
            dispatch(updateConsulta(consulta));
        }
        props.setConsultas(props.consultas.concat(consulta));
        history.push('/Consultas');

    }

    useEffect(() => {document.title = 
            `Consulta: ${consulta.nome}`;
        return() => {document.title = 'Título'}

    } , [consulta.nome])

function consultasReducer(consultas/*state*/, action){
    switch(action.type){
        case'add_consulta':
    }
}