import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from '../Rating';
import './ProductReview.css';

const INITIAL_STATE = {
  email: '',
  rating: '',
  comment: '',
};

export default class ProductReview extends Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    const customerReview = this.state;
    const { productId } = this.props;
    const savedReviews = JSON.parse(localStorage.getItem(productId));
    localStorage.setItem(productId, JSON.stringify([...savedReviews, customerReview]));
    this.setState(INITIAL_STATE);
  }

  renderSavedReviews = () => {
    const { productId } = this.props;
    if (!JSON.parse(localStorage.getItem(productId))) {
      localStorage.setItem(productId, JSON.stringify([]));
    }
    const savedReviews = JSON.parse(localStorage.getItem(productId));
    return (
      <section className="all-reviews-container">
        { savedReviews.map((review, index) => (
          <div key={ index }>
            <div className="review-container">
              <p className="email-review">{ review.email }</p>
              <p className="rating-review">
                { `Nota: ${review.rating}` }
              </p>
              <p className="comment-review">{ review.comment }</p>
            </div>
            <hr />
          </div>
        ))}
      </section>
    );
  }

  render() {
    const { email, comment } = this.state;
    return (
      <section>
        <h2>Avaliações</h2>
        <form
          className="form-review"
          onSubmit={ this.handleClick }
        >
          <input
            type="email"
            name="email"
            value={ email }
            placeholder="Email"
            onChange={ this.handleChange }
            required
          />
          <Rating
            handleChange={ this.handleChange }
          />
          <textarea
            name="comment"
            value={ comment }
            data-testid="product-detail-evaluation"
            placeholder="Mensagem (opcional)"
            onChange={ this.handleChange }
            rows="3"
            cols="50"
          />
          <button
            type="submit"
          >
            Avaliar
          </button>
        </form>
        { this.renderSavedReviews() }
      </section>
    );
  }
}

ProductReview.propTypes = {
  productId: PropTypes.string.isRequired,
};
