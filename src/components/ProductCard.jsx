import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { product: { title, id, thumbnail, price } } = this.props;

    return (
      <div data-testid="product" id={ id }>
        <Link
          data-testid="product-detail-link"
          to={ `product/details/${id}` }
        />
      </div>
    );
  }
}
