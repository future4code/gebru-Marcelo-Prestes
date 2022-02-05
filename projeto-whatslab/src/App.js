import logo from './logo.svg';
import './App.css';


// eslint-disable-next-line no-undef
class App extends React.Component {
  
state = {
  inputRemetent: "",
  inputMenssage: "",
}

onChangeInputRemetent = (e) => {
console.log(e.target.value)
}

onChangeInputMenssage = (e) => {
  console.log(e.target.value)
}


  render() {
  return (
<div className="App">
    <input placeholder="Remetente" value={this.state.inputRemetent}/>
    
    
    <input placeholder="Mensagem" value={this.state.inputMenssage}/>
   onChange={this.onChangeInputMenssage} 
    </div>
  );

}  
    
}

export default App;
