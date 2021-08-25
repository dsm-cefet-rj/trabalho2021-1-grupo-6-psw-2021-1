import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import HomePsic from "./components/Home/HomePsic";
import HomePac from "./components/Home/HomePac";
import Sobre from "./components/Sobre";
import Login from "./components/Login";
import Senha from "./components/Senha";
import RegistrarPsic from "./components/Registrar/RegistrarPsic";
import Registrar from "./components/Registrar/Registrar";
import HomeCounter from "./components/counter/HomeCounter";


const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { HomePsic }  path="/psic" exact />
           <Route component = { HomePac }  path="/pac" exact />
           <Route component = { Sobre }  path="/sobre" />
           <Route component = { Login }  path="/login" />
           <Route component = { Senha }  path="/senha" />
           <Route component = { Registrar }  path="/registrar" />
           <Route component = { RegistrarPsic }  path="/registrar_psic" />
           <Route component = { HomeCounter }  path="/counter" />
       </BrowserRouter>
   )
}

export default Routes;