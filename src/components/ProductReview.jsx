import React, { Component } from 'react';
import StarRating from './StarRating';

export default class ProductReview extends Component {
  render() {
    return (
      <section>
        <h2>Avaliações</h2>
        <form>
          <input
            type="email"
            placeholder="Email"
            // onChange={}
          />
          <StarRating />
          <textarea
            data-testid="product-detail-evaluation"
            placeholder="Mensagem (opcional)"
          />
          <button
            type="button"
            // onClick={}
          >
            Avaliar
          </button>
        </form>
      </section>
    );
  }
}
