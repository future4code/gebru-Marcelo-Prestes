  import React from 'react';
  import styled from 'styled-components'
  import Post from './components/Post/Post';



  const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `
  const MeuInput = styled.div`
    display: flex;
    max-width: 50%;
    min-width:20%;
    margin-top: 0.5%;
    margin-bottom: 1.5%;
    `

  class App extends React.Component {
    state = {
      post: [
        {
          nomeUsuario: 'paulinha',
            fotoUsuario:'https://picsum.photos/50/50',
            fotoPost:'https://picsum.photos/200/150'
        },
        
        {
          nomeUsuario:'Matheus',
            fotoUsuario:'https://picsum.photos/id/1005/5760/3840',
            fotoPost:'https://picsum.photos/id/1012/3973/2639',
        },
        {
          nomeUsuario:'Claudia',
            fotoUsuario:'https://picsum.photos/id/1011/5472/3648',
            fotoPost: 'https://picsum.photos/id/1013/4256/2832',
        },
      ],


        valorNomeUsuario:"",
        valorFotoUsuario:"",
        valorPost:""
        
  }


  postarNovoPost = () => {

    const newPost = {

      nomeUsuario: this.state.valorNomeUsuario,
      fotoUsuario: this.state.valorFotoUsuario,
      fotoPost: this.state.valorPost
    };

    const newPosts = [...this.state.post, newPost];
    this.setState({post: newPosts});

    
    this.setState({
      valorNomeUsuario:"",
      valorFotoUsuario:"",
      ValorPost:""
    });

  }
    onChangeInputNomeUsuario = (e) =>{
      this.setState({valorNomeUsuario: e.target.value});
    }
    onChangeInputFotoUsuario = (e) =>{
      this.setState({valorFotoUsuario: e.target.value})
    }
    onChangeInputPost = (e) =>{
      this.setState({valorPost: e.target.value})
    }
    render() {
      const postList = this.state.post.map((pos) =>{

        return (
          
          <MainContainer>
          <Post
          nome={pos.nomeUsuario}
          fotoUsuario={pos.fotoUsuario}
          fotoPost={pos.fotoPost}
          />
          </MainContainer>
        );

      })

      return (
        <>
      <MinhaDiv>
      <MeuInput
        value={this.status.valorNomeUsuario}
        onChange={this.onChangeInputNomeUsuario}
        placeholder={"Nome usúario"}
        />

    <MeuInput
        value={this.status.valorFotoUsuario}
        onChange={this.onChangeInputFotoUsuario}
        placeholder={"Foto"}
        />

  <MeuInput
        value={this.status.ValorPost}
        onChange={this.onChangeInputPost}
        placeholder={"Novo Post"}
        />
        <button onclick={this.postarNovoPost}>Novo Post</button>
        </MinhaDiv>
        {postList}
        </>
    
    )
  }
  export default App;
