import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      searchText: '',
    };
  }

  handleInputChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  render() {
    const { handleInputChange, state: { searchText } } = this;

    return (
      <main>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <form>
          <input
            type="text"
            name="queryInput"
            id="query-input"
            value={ searchText }
            onChange={ handleInputChange }
            data-testid="query-input"
          />
          <button
            type="button"
            data-testid="query-button"
          >
            Pesquisar
          </button>
        </form>
      </main>
    );
  }
}
