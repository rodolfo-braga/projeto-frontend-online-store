import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 1,
    };
  }

  handleClick = ({ target }) => {
    const { value } = target;
    const { quantity } = this.state;

    if (value === 'decrease' && quantity > 0) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }));
    } else if (value === 'increase') {
      this.setState((prevState) => ({
        quantity: prevState.quantity + 1,
      }));
    }
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
        <button
          type="button"
          onClick={ this.handleClick }
          value="decrease"
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">
          { `Qtd: ${quantity}` }
        </p>
        <button
          type="button"
          onClick={ this.handleClick }
          value="increase"
          data-testid="product-increase-quantity"
        >
          +
        </button>
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
