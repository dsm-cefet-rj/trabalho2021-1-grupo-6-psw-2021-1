import React from 'react';
import { Link } from 'react-router-dom'


/*Botões de suporte da página HomePsic */
const ButtonSupport = (props) => {
    return (
        <div class="container-sm">
            <p class="h1 text-center">OnPsic</p>

            <div class="d-flex align-items-start">
                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Suporte Humanizado</button>
                    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Monitor de Humor</button>
                </div>
            </div>
        </div>
    );
}


export default ButtonSupport;