import React from "react";

export default class Etapa2 extends React.Component {

    render (){
        return (
        <div className="App">

        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <p>1. Qual seu curso?</p>
        <input value={this.props.inputSeuNome}
         />
        <br></br>
        <p>2. Qual a unidade de ensino?</p>
        <input value={this.props.inputSuaIdade} />
        <br></br>
        <button onClick={this.props.onClickProxima}>Próxima etapa</button>
     
     </div>
     );
 }

}