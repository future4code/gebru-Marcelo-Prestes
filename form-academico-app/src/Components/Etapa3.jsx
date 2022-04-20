import React from "react";

export default class Etapa3 extends React.Component {
    render (){
        return (
        <div className="App">

        <h1>ETAPA 3 -INFORMAÇÕES GERAIS DE ENSINO</h1>
        <p>7. Por que você não terminou um curso de graduação?</p>
        <input value={this.props.inputSuperiorSN}
         />
        <br></br>
        <p>8. Você fez algum curso complementar?</p>
        <input value={this.props.inputCursoComplementar} />
        <br></br>
        <button onClick={this.props.onClickProxima}>Próxima etapa</button>
     
     </div>
     );
 }

}