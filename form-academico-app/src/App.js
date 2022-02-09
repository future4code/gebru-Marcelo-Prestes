
import React from "react"
import Etapa1 from "./Components/Etapa1"
import Etapa2 from "./Components/Etapa2"
import Etapa3 from "./Components/Etapa3"
import Etapa4 from "./Components/Etapa4"

export default class App extends React.Component {

  state = {
    PróximaEtapa: true,

  }

  constructor(props) {
    super(props);
    this.state = {
      escolaridade_id: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };


render () {

  var {escolaridade_id} = this.state;
  let pagina;
  if (this.state.PróximaEtapa.Etapa1){
    pagina = <Etapa2 />
  }
  else {
    pagina = <Etapa1 />
  }
  return (
    <div className="App">
      
    </div>
  );
}
}