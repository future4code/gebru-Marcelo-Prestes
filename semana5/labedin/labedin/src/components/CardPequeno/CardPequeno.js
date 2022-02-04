import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="peqcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.dados }</h4>
                <p>{ props.email }</p>
                <p>{ props.endereco }</p>
            </div>
        </div>
    )
}

export default CardPequeno;


