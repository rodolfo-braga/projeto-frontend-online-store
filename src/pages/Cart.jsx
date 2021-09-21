import React, { Component } from 'react';
import CartItem from '../components/CartItem';
import Loading from '../components/Loading';

export default class Cart extends Component {
  constructor() {
    super();

    this.state = {
      cartItems: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems = () => {
    const getCartItems = JSON.parse((localStorage.getItem('savedCartItems')));
    console.log(getCartItems);
    this.setState({
      cartItems: getCartItems,
      isLoading: false,
    });
  }

  renderCartItems = (cartItems) => (
    <section>
      { cartItems.map((item) => <CartItem key={ item.id } item={ item } />) }
    </section>
  );

  render() {
    const { isLoading, cartItems } = this.state;

    return (
      <section data-testid="shopping-cart-empty-message">
        { isLoading && <Loading /> }
        { cartItems.length > 0
          ? this.renderCartItems(cartItems)
          : <h3>Seu carrinho está vazio</h3> }
      </section>
    );
  }
}
