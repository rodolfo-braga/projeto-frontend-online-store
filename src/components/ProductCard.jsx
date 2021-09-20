import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { product: { title, id, thumbnail, price } } = this.props;

    return (
      <div data-testid="product" id={ id }>
        <Link
          data-testid="product-detail-link"
          to={ `product/details/${id}` }
        >
          <h3>{ title }</h3>
          <img src={ thumbnail } alt={ title } />
          <span>{ price }</span>
        </Link>
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
