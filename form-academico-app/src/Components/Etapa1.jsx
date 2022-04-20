/* eslint-disable no-undef */
import React from "react";

export default class Etapa1 extends React.Component {
    render (){
        return (
        <div className="App">

        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <p>1. Qual seu nome?</p>
        <input value={this.props.inputSeuNome}
         />
        <br></br>
        <p>2. Qual sua idade</p>
        <input value={this.props.inputSuaIdade} />
        <br></br>
        <p>3. Qual seu e-mail</p>
        <input value={this.props.inputEmail} />  
        <br></br>
        
        <p>  
        
         <b>4. Qual a sua escolaridade? </b>{escolaridade_id}
        
        </p> 
        <reactHTMLDatalist
        name={"escolaridade_id"}
        onChange={this.escolaridade}
        className={"classone classtwo"}
        options={[
            {text: "Ensino médio incompleto" },
            {text: "Ensino médio completo" },
            {text: "Ensino superior incompleto" },
            {text: "Ensino superior completo" },
        ]}

        />
       <button onClick={this.props.onClickProxima}>Próxima etapa</button>
     
        </div>
        );
    }

}