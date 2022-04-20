import React from 'react';
import './style.css';


// eslint-disable-next-line no-undef
export default class App extends React.Component {
  
state = {
  inputRemetent: "",
  inputMenssage: "",
};

onChangeRemetent = (e) => {
this.setState({inputRemetent: e.target.value});

};

// eslint-disable-next-line no-dupe-class-members
onChangeMenssage = (e) => {
  this.setState({inputMenssage: e.target.value});
  


  this.setState({
    inputRemetent: "",
    inputMenssage: "",
    
  });};


  
  render() {
  return (
    <div className="App">
    <p>{this.state.inputRemetent}</p>
    <input placeholder="Remetente" 
    value={this.state.inputRemetent}
    onChange={this.onChangeRemetent}/>
    

    <p>{this.state.inputMenssage}</p>
    <input placeholder="Mensagem" 
    value={this.state.inputMenssage} 
    onChange={this.onChangeMenssage}/>
    
    </div>
  );

} 
}