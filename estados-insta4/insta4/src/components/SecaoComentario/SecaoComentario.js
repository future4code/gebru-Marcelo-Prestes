import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		inputComantario:""

	};

	onChangeComentario = (e) =>{
				this.setState({ inputComantario: e.target.value });
			console.log(this.state.inputComantario)
		  };
	

	render() {
		return (<CommentContainer className="App">
			
			<InputComentario
			
				placeholder={'Comentário'}
				value={this.state.inputComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>);
	}
}
