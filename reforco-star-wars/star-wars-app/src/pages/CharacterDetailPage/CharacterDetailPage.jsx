/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect}from 'react';
import axios from 'axios'


function CharacterDetailPage(props){
    const [details,setDetails] = useState({})

useEffect(() => {
    getCharacterDetails()
}, [props.url])


    function getCharacterDetails() {
        axios.get(props.url)
            .then((response) => {
                console.log()
                setDetails(response.data)
            })
            .catch((error) => console.log(error.message));

    }

    return (
    <div>
    <h1>Deta-lhes dos personagens </h1>
    <p>{props.url}</p>
    <button onClick={props.goToListPage}>Voltar para lista de personagens</button>
    
    </div> )
    
    
    
}

export default CharacterDetailPage;