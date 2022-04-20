/* eslint-disable no-undef */
import React from 'react'
import axios from "axios";


class SigUpPlayListScreen extends React.Component {
    state = {
        playlistInput:'',
        artistInput:'',
        musicInput:'',
        urlInput:'',
    }
    
    handlePlaylistInput = (e) => {
        this.setState({playlistInput: e.target.value })

    }

    handleArtistInput = (e) => {
        this.setState({artistInput: e.target.value })

    }

    handleMusictInput = (e) => {
        this.setState({musicInput: e.target.value })

    }

    handleUrlInput = (e) => {
        this.setState({urlInput: e.target.value })

    }


    createPlaylist = async() => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        
        const body = {
            name: this.state.playlistInput,
        }

        try {
        const res = await axios.post(url, body, {
            headers:{
                Authorization: 'marcelo-prestes-gebru'
            }
        })

        alert(`PlayList ${this.state.playlistInput}foi criada`)
        this.setState({playlistInput:''})
    } catch (err) {
        alert(err.response.data.message)
    }
    }


    addTrackToPlaylist = async(playlistsId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
        const body = {
            name: this.state.musicInput,
            artist: this.state.artistInput,
            url: this.state.urlInput,
        }
        try {
            const res = await axios.post(url, body, {
                headers: {
                    Authorization : 'marcelo-prestes-gebru'
                }
            })     
    
              alert(`Musica ${this.state.musicInput}foi adicionada`)
                 this.setState({musicInput:''})
                } catch (err) {
    alert(err.response.data.message)
}
}


    render() {
        return (
            <div>
                <h3>Tela Criação de Playlist</h3>
            <div>
                <input 
                placeholder="Adione o nome da PlayList"
                value={this.state.playlistInput}
                onChange={this.handlePlaylistInput}
                />
            <button onClick={this.createPlaylist}>Criar</button>
            </div>
            <button onClick={this.props.gotoPlaylistScnreen}>Ir para Playlists</button>  
            </div>
          
            )
    }
}

export default SigUpPlayListScreen