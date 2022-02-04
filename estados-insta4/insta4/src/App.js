import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`




class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      <Post
        nomeUsuario={'Matheus'}
        fotoUsuario={'https://picsum.photos/id/1005/5760/3840'}
        fotoPost={'https://picsum.photos/id/1012/3973/2639'}
      />

      <Post
        nomeUsuario={'Claudia'}
        fotoUsuario={'https://picsum.photos/id/1011/5472/3648'}
        fotoPost={'https://picsum.photos/id/1013/4256/2832'}
      />
      </MainContainer>
     
    );
  }
}


export default App;
