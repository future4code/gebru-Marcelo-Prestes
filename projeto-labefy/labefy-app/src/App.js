/* eslint-disable react/jsx-no-undef */
import "./styles.css";
import axios from "axios";
import React from "react";


const urlPlaylist =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "marcelo-prestes-gebru"
  }
};

export default class App extends React.Component {

  state = {
    playlists: [],
    playlistInput: "",
    playlistIdInput: "" 

  };


  componentDidMount() {
    this.getAllPlaylists();
  }


  getAllPlaylists = () => {
    axios
      .get(urlPlaylist, headers)
      .then((res) => {


        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };


  createPlaylist = () => {

    const body = {
      name: this.state.playlistInput
    };
    axios
      .post(urlPlaylist, body, headers)
      .then((res) => {
        console.log(res.data.result.list);
        
        alert(`A playlist ${this.state.playlistInput} foi criada com sucesso`);
        
        this.setState({ playlistInput: "" });
        
        this.getAllPlaylists();
      })
      
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  

  onPlaylistTextChange = (event) => {
    this.setState({ playlistInput: event.target.value });
  };

  deletePlaylist = async (playlistId) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const res = await axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, {
        headers: {
          Authorization: 'marcelo-prestes-gebru'
        }
      })

      alert('PlayList deletade com sucesso!')
      this.getAllPlaylists()
    } catch (err) {
      console.log(err.response)
    };
  }




  onPlaylisIDtTextChange = (event) => {
    this.setState({ playlistIdInput: event.target.value });
  };
  render() {
    
    const playlistComponents = this.state.playlists.map((play) => {
      return (

        <ListCard key={play.id}>
        <span>{play.name}</span>
        <button onClick={() => this.deletePlaylist(play.id)}>Delete {play.name}</button>
      </ListCard>

      );
    });

    return (
      <div>
        <h1>LabeFay </h1>
        <input
         
          value={this.state.playlistInput}
          placeholder="Digite a sua Playlist"
          onChange={this.onPlaylistTextChange}
        />

       <button onClick={this.createPlaylist}>Criar</button>

       
        <div>
          <input
            value={this.state.playlistIdInput}
            placeholder="Digite o ID da Playlist"
            onChange={this.onPlaylisIDtTextChange}
          />
          <button onClick={this.deletePlaylist}>Deletar</button>
          {playlistComponents}
        </div>
      </div>
    );
  }
}
