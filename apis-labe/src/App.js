import React from "react";
import styles from 'components/styled.components.css'

export default class App extends React.Component {
  state = {
    inputName: "",
    inputEmail: ""
  };

  onChangeInputName = (event) => {
    this.setState({ inputName: event.target.value });
    console.log(this.state.inputName);
  };

  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
    console.log(this.state.inputEmail);
  };

  render() {
    return (
      <div className={styles.App}>
        Nome:{" "}
        <input
          placeholder="Nome"
          value={this.state.inputName}
          onChange={this.onChangeInputName}
        />
        Email:{" "}
        <input
          placeholder="Email"
          value={this.state.inputEmail}
          onChange={this.onChangeInputEmail}
        />
      </div>
    );
  }
}
