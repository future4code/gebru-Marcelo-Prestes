import React from 'react';
import SigUpPlayListScreen from './components/SigUpPlayListScreen'
import PlaylistScnreen from './components/PlaylistScnreen'
import axios from 'axios'

class App extends React.Component {
   state = {
       renderScreen:  'signUp'
   }
   
   chooseScreen = () => {
       switch (this.state.renderScreen) {
           case 'signUp':
              return <SigUpPlayListScreen gotoPlaylistScnreen={this.gotoPlaylistScnreen}/>
               //return <SigUpPlayListScreen goToSigUpPlayListScreen={this.goToSigUpPlayListScreen}/>
            case 'Playlist':
                return  <PlaylistScnreen goToSigUpPlayListScreen={this.gotoPlaylistScnreen}/>
            default:
                return <h2>Erro</h2>
       }
   }

  _goToSigUpPlayListScreen = () => {
    this.setState({ renderScreen: 'signUp' });
  };
  get goToSigUpPlayListScreen() {
    return this._goToSigUpPlayListScreen;
  }
  set goToSigUpPlayListScreen(value) {
    this._goToSigUpPlayListScreen = value;
  }

goToPlaylistScnreen = () => {
    this.setState({renderScreen:'Playlist'})
}

    render() {
        return (
            <div>
        <h1>LabeFay</h1>       
        {this.chooseScreen()}
        </div>
        )
    }
}


export default App