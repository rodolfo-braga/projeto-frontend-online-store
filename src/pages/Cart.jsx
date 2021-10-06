import React, { Component } from 'react';
import CartItem from '../components/CartItem';
import Loading from '../components/Loading';
import Home from './Home';

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
    if (!JSON.parse(localStorage.getItem('savedCartItems'))) {
      localStorage.setItem('savedCartItems', JSON.stringify([]));
    }

    const { isLoading, cartItems } = this.state;

    return (
      <section data-testid="shopping-cart-empty-message">
        <Home />
        <div className="cart-container">
          <h2>Carrinho</h2>
          { isLoading && <Loading /> }
          { cartItems.length > 0
            ? this.renderCartItems(cartItems)
            : <h3>Seu carrinho está vazio</h3> }
        </div>
      </section>
    );
  }
}
