import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </div>
    );
  }
}