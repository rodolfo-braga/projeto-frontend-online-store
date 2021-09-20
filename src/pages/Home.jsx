import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      categoriesList: '',
    };
    this.requestCategories = this.requestCategories.bind(this);
  }

  requestCategories() {
    const categories = getCategories();
    categories.then((results) => {
      this.setState({ categoriesList: results });
    });
  }

  render() {
    const { categoriesList } = this.state;
    return (
      <main>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <aside>
          Categorias
        </aside>
      </main>
    );
  }
}
