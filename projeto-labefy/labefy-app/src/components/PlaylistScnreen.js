/* eslint-disable no-undef */
import React from 'react'
import axios from 'axios'
import styled from 'styled-components'



const PlayCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  width: 250px;
`
class PlaylistScnreen extends React.Component {
   state = {
       playlist:[],
       artist:[],
       music:[],
       urlPlaylist:[]
   }

   componentDidMount() {
    this.getAllPlaylists()
   
}

getAllPlaylists  = async () => {
    try{
const res = await axios.get(
'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
{
    headers: {
        Authorization: 'marcelo-prestes-gebru'
        }
    }
)

this.setState({playlist: res.data})
    } catch (err){
        console.log(err.response)
    }
}


deletePlaylist = async (playlistsId) => {
    try {
      const res = await axios.delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
          {
            headers: {
                Authorization: 'marcelo-prestes-gebru'
                }
            }
        )
alert('PlayList deletada!')
this.getAllPlaylists()
        }catch(error){
            console.log(error.response)
        }

    }
    render () {
        const renderPlaylists = this.state.playlist.map((play)=> {
           return(
            <PlayCard key={play.id} id="cardPlay">
                <span>{play.name}</span>
                <input placeholder="Qual nome do Cantor"
                value={this.state.artistInput}
                onChange={this.handleArtistInput}
                />
                <input placeholder="Qual nome da Música"
                value={this.state.musicInput}
                onChange={this.handleMusictInput}
                />

                <input placeholder="Adicionar Url"
                value={this.state.urlInput}
                onChange={this.handleUrlInput}
                />
                <button onClick={this.addTrackToPlaylist}>Adicionar</button>
                <button onClick={()=>this.deletePlaylist(play.id)}>
                   Deletar {play.name}
                </button>               
            </PlayCard>
        )
    })

    return (
        <div>
            <h3>Lista de playlists</h3>
            {renderPlaylists}
            <button onClick={this.props.goToSigUpPlayListScreen}> Criar uma nova PlayList</button>
        </div>
      )
    }
  }

export default PlaylistScnreen