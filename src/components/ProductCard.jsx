import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import addCartItemOnClick from '../services/manageCartItems';

export default class ProductCard extends Component {
  render() {
    const {
      product: { title, id, thumbnail, price, category_id: categoryId },
      product,
    } = this.props;

    return (
      <div data-testid="product" id={ id } className="product-card">
        <Link
          data-testid="product-detail-link"
          to={ `/details/${id}/${title}/${categoryId}` }
        >
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
          onClick={ () => addCartItemOnClick(product) }
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
    category_id: PropTypes.string,
  }).isRequired,
};
