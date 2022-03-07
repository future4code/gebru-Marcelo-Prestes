// Importar as bibliotecas
import axios from "axios";
import React from "react";

// Criar constantes reutilizáveis no código, para podermos reaproveitar informações

const urlUsers =
"https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "fayra-miranda-aulas"
  }
};

export default class App extends React.Component {

  state = {
    name: [],
    inputName: "",
    email: [],
    inputEmail: ""
  };
  

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios
      .get(urlUsers, headers)
      .then((res) => {
        // console.log(res.data.result.list);

        // Estamos mudando o estado da nossa playlist para os valores que estão no backend

        this.setState({ users: res.data });
      })
      .catch((err) => {
        console.log(err.response);
      })
  }


  createUser = () => {
      const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };
    
    axios
    .post(urlUsers, body, headers)
    .then((res) => {
    console.log(res.data)

    
    this.setState({ inputName: "" })
    this.setState({ inputEmail: "" })
    alert(`O usuário ${this.state.inputName} foi adicionado`)  
    
    this.getAllUsers()
      })
    .catch((err) => {
    console.log(err.res.data.message)
    alert("Cadastro inválido")

      });
  };

  mudaUser = (event) => {
  this.setState({ inputName: event.target.value });
  };
 
  mudaEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  render() {
  const   usersComponents = this.state.i this.state.users.map((novoUser) => {
  return <li key={novoUser.id}> {novoUser.name} </li>; 
    })
    console.log(this.state.users)
    return (
      <div>
        <h1>Usuarios </h1>
        <input
          // Criamos o valor do input como a alteração que foi escrita pelo usuário.

          // Utilizamos o OnChange para quando escrevermos no input, mudar o texto e podemos enviar as informações

          value={this.state.inputName}
          placeholder="Nome usúario"
          onChange={this.onUsersTextChange}
        />
        <input
            value={this.state.inputEmail}
          placeholder="Email"
          onChange={this.onEmailTextChange}
        />
        {/* Quando clicarmos no botão,precisamos chamar a função que cria uma nova playlist. Para isso usamos o this.createPlaylist */}

        <button onClick={this.createUser}>Eviar</button>
        {/* Chamamos o nosso map, em que passamos playlist por playlist */}

        {usersComponents}
      </div>
    );
  }
}
