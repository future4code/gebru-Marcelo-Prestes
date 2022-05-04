/* eslint-disable no-undef */
import React, {useState} from 'react';
import axios from 'axios';
import {BASE_URL} from '../../constants/url.js';


function CharacterListPage() {

    // eslint-disable-next-line no-unused-vars
    const [characterList, setCharacterList] = useState([])

        // eslint-disable-next-line no-unused-vars
        function getCharacterList() {
            axios.get(`${BASE_URL}/people/`)
            
            .then((response) =>                 
            setCharacterList(response.data.results)
            )
                
            .catch((error) => console.log("Error:",error.message))
                    
        }

        function showCharactersList() {
            return characterList.map((character) =>{
                return <p>{character.name}</p>
            })
        }

    return (
    <div>
        <h1>Lista de Personagens </h1> 
        {showCharactersList()}
    </div>)
           
}

export default CharacterListPage;