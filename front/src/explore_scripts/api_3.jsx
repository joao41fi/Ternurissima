import React, { Component } from 'react';

class Text_php extends Component {
  state = {
    message: "",
    value: 0
  };

  componentDidMount() {
    fetch('/api.php') // Substitua com a URL correta para sua API PHP
      .then(response => response.json())
      .then(data => this.setState({ message: data.message, value: data.value }))
      .catch(error => console.error('Erro:', error));
  }

  render() {
    return (
      <div>
        <h1>Exemplo de Integração PHP no React</h1>
        <p>Mensagem do PHP: {this.state.message}</p>
        <p>Valor do PHP: {this.state.value}</p>
      </div>
    );
  }
}

export default Text_php;
