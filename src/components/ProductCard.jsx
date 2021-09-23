import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  addCartItemOnClick = () => {
    const { product } = this.props;

    if (!JSON.parse(localStorage.getItem('savedCartItems'))) {
      localStorage.setItem('savedCartItems', JSON.stringify([]));
    }

    const getCartItems = JSON.parse((localStorage.getItem('savedCartItems')));

    localStorage.setItem('savedCartItems', JSON.stringify([...getCartItems, product]));
  };

  render() {
    const {
      product: { title, id, thumbnail, price },
    } = this.props;

    return (
      <div data-testid="product" id={ id } className="product-card">
        <Link data-testid="product-detail-link" to={ `product/details/${id}` }>
          <img src={ thumbnail } alt={ title } />
          <h3>{title}</h3>
          <span>
            Preço:
            {' '}
            {price}
          </span>
        </Link>
        <button
          type="button"
          onClick={ this.addCartItemOnClick }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
