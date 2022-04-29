/* eslint-disable no-undef */
import React, {useState} from 'react';
import axios from 'axios';
import {BASE_URL} from '../../constants/url.js';

function CharacterListPage (){

    // eslint-disable-next-line no-unused-vars
    const [characterList, setCharacterList] = useState([])

        // eslint-disable-next-line no-unused-vars
        const getCharacterList = () =>{
            axios.get(`${BASE_URL}/people/`)
            
            .then((response) =>console.log(response))
            .catch((error) => console.log("Error:",error.message))
                    
        }

    return (<h1>Lista de Personagens </h1>   )
           
}

export default CharacterListPage;