import App from './App'
import React from './React'
export default class ListaMatch extends React.Component {

    render() {
        return <div> Perfil Selecionados </div>
        }
    }


/* import React from 'react'
import React, { useState, useEffect} from 'react'
import axios from 'axios'

const Post = (props) => {
    const [curtido, setCurtido] = useState(false)
    const [matchPerfil, setMatchPerfil] = useState('')
}


useEffect(() =>{
    const getProfiles = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")
        .then(response => {
            setMatchPerfil(response.data.results);
        })
        .catch(err => {
            console.log(err);
        })
    }

})


const novalistaMatch = [...useState.listaMatch] */