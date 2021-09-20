import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      category: 'Accesorios para Vehículos', // < LEMBRAR DE ATUALIZAR
      searchText: '',
      productsResponse: [],
    };
  }

  componentDidMount() {
    // const { isLoading } = this.state;

    // if (isLoading) {
    //   this.getProducts();
    // }
  }

  getProducts = async () => {
    const { category, searchText } = this.state;
    console.log('getprodudcts');

    const productsResponse = await getProductsFromCategoryAndQuery(category, searchText);
    this.setState({
      isLoading: false,
      productsResponse });
  }

  handleInputChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  handleClick = () => {
    const { category, searchText } = this.state;
    console.log('handleclick');

    this.setState({ isLoading: true });
    this.getProducts(category, searchText);
  }

  renderResults = () => {
    const { productsResponse } = this.state;

    if (!productsResponse.length) {
      return <p>Nenhum produto foi encontrado</p>;
    }

    return productsResponse.map((product) => <ProductCard product={ product } />);
  }

  render() {
    const { handleInputChange, handleClick,
      state: { isLoading, searchText } } = this;

    return (
      <main>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <form>
          <input
            type="text"
            name="searchText"
            id="query-input"
            value={ searchText }
            onChange={ handleInputChange }
            data-testid="query-input"
          />
          <button
            type="submit"
            data-testid="query-button"
            onClick={ handleClick }
          >
            Pesquisar
          </button>
        </form>
        { isLoading && <Loading /> }
      </main>
    );
  }
}
