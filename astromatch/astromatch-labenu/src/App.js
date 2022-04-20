/* eslint-disable no-undef */
/* eslint-disable default-case */
import React from 'react';
import axios from 'axios'
import PerfisTela from './components/PerfisTela';
import ListaMatch from './components/ListaMatch'
//import React, { useState, useEffect} from 'react'
export default class App extends React.Component {
  state = {
    telaAtual: "List",
    perfilMatch: [],
    
  };


  selectPage = ()=>{
    switch (this.state.telaAtual){
      case "List":
        return <PerfisTela/>
      case "detail":
        return <ListaMatch/>
      default:
        return <PerfisTela/>
    }
  }
 componentDidMount(){
   this.pegaPerfil();
 }


  pegaPerfil = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
    axios
    .get(url)
    .then(response => this.setState({perfilMatch:response.data.person})) 
    .catch((err) => console.log(err.response))


}
render() {
  return <div>{this.selectPage()}
    {this.state.perfilMatch}
  <button onClick={this.pegaPerfil}>Mostrar próximo perfil</button>
  </div>

}
}
