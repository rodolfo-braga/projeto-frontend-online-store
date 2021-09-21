import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.productDetails();
  }

  productDetails = async () => {
    const { match: { params: { id, title, categoryId } } } = this.props;

    const productList = await getProductsFromCategoryAndQuery(categoryId, title);
    const product = productList.results.find((item) => item.id === id);
    this.setState({
      product,
    });
  }

  render() {
    const { product: { title, price, thumbnail } } = this.state;
    return (
      <section>
        <Link to="/Cart">Carrinho</Link>
        <div data-testid="product-detail-name">
          <h1>{ title }</h1>
          <p>{ price }</p>
          <img src={ thumbnail } alt={ title } />
        </div>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      categoryId: PropTypes.string,
    }),
  }).isRequired,
};
