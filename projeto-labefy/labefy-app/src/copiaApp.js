import React from 'react';
import PlaylistScnreen from './components/PlaylistScnreen';
import SigUpPlayListScreen from './telaCriaPlayList';
import axios from 'axios'

class App extends React.Component {
   state = {
       renderScreen: 'signUp'
   }
   
   chosseScreen = () => {
       switch (this.state.renderScreen) {
           case 'signUp':
               return <SigUpPlayListScreen goToSigUpPlayListScreen={this.goToSigUpPlayListScreen}/>
            case 'Playlist':
                return  <PlaylistScnreen gotoPlaylistScnreen={this.gotoPlaylistScnreen}/>
            default:
                return <h2>Erro</h2>
       }
   }

goToSigUpPlayListScreen = ()=>{
    this.setState({renderScreen:'signUp'})
}

gotoPlaylistScnreen = () => {
    this.setState({renderScreen:'Playlist'})
}

    render() {
        return (
            <div>
        <h1>LabeFay</h1>       
        {this.chosseScreen()}
        </div>
        )
    }
}


export default App