/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_URL} from '../../constants/url.js';
import {CharacterCard} from "../CharacterListPage/listPage"

function CharacterListPage(props) {

    // eslint-disable-next-line no-unused-vars
    const [characterList, setCharacterList] = useState([])

    function getCharacterList() {
        axios.get(`${BASE_URL}/people/`)
        .then((response) =>                 
        setCharacterList(response.data.results)
        )               
        .catch((error) => console.log("Error:",error.message))
                
    }



    useEffect(() => {
        getCharacterList()

    },)
        // eslint-disable-next-line no-unused-vars
     
        function showCharacters (){
            return characterList.map((character,index) => {
                return <CharacterCard onClick={()=> props.goToDetailsPage(character.url)}
                 key={index}>{character.name}</CharacterCard>;
            })
        }

    return (
    <div>
        <h1>Lista de Personagens </h1> 
        {showCharacters()}
    </div>)
           
}

export default CharacterListPage;