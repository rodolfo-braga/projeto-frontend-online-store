import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import ListCategories from '../components/ListCategories';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      searchDone: false,
      category: null,
      searchText: '',
      productsResponse: [],
    };
  }

  handleInputChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  handleRadio = async ({ target: { checked, value, id } }) => {
    if (checked) {
      this.setState({
        category: value,
        productsResponse: [],
        isLoading: true,
      });
      const fetchCategory = await getProductsFromCategoryAndQuery(id, '$QUERY');
      this.setState({
        productsResponse: fetchCategory.results,
        isLoading: false,
        searchDone: true,
      });
    }
  }

  handleClick = async () => {
    const { category, searchText } = this.state;
    this.setState({ isLoading: true });

    const apiResponse = await getProductsFromCategoryAndQuery(category, searchText);

    this.setState({
      isLoading: false,
      searchDone: true,
      productsResponse: apiResponse.results,
    });
  }

  renderResults = () => {
    const { productsResponse } = this.state;

    if (productsResponse.length === 0) {
      return <p>Nenhum produto foi encontrado</p>;
    }

    return (
      <aside className="products-conteiner">
        { productsResponse
          .map((product) => <ProductCard product={ product } key={ product.id } />)}
      </aside>
    );
  }

  render() {
    const { renderResults, handleInputChange, handleClick, handleRadio,
      state: { isLoading, searchDone, searchText } } = this;

    return (
      <main>
        <header>
          <div className="header-content">
            <Link to="/cart" data-testid="shopping-cart-button" className="cart">
              Carrinho
            </Link>
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            <form>
              <input
                className="input-search"
                type="text"
                name="searchText"
                id="query-input"
                value={ searchText }
                onChange={ handleInputChange }
                data-testid="query-input"
              />
              <button
                className="input-button"
                color="primary"
                type="button"
                data-testid="query-button"
                onClick={ handleClick }
              >
                Pesquisar
              </button>
            </form>
          </div>
        </header>
        { isLoading && <Loading /> }
        { searchDone && renderResults() }
        <ListCategories handleRadio={ handleRadio } />
      </main>
    );
  }
}
