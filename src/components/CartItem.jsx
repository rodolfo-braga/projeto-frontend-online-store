import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 1,
    };
  }

  render() {
    const {
      props: { item: { title, price, thumbnail } },
      state: { quantity },
    } = this;

    return (
      <div>
        <h4 data-testid="shopping-cart-product-name">{ title }</h4>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <p data-testid="shopping-cart-product-quantity">{ `Qtd: ${quantity}` }</p>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};
