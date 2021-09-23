import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Rating extends Component {
  render() {
    const { handleChange } = this.props;

    return (
      <fieldset>
        Nota:
        <label htmlFor="rating-1">
          <input
            type="radio"
            id="rating-1"
            name="rating"
            value="1"
            onChange={ handleChange }
            required
          />
          1
        </label>
        <label htmlFor="rating-2">
          <input
            type="radio"
            id="rating-2"
            name="rating"
            value="2"
            onChange={ handleChange }
          />
          2
        </label>
        <label htmlFor="rating-3">
          <input
            type="radio"
            id="rating-3"
            name="rating"
            value="3"
            onChange={ handleChange }
          />
          3
        </label>
        <label htmlFor="rating-4">
          <input
            type="radio"
            id="rating-4"
            name="rating"
            value="4"
            onChange={ handleChange }
          />
          4
        </label>
        <label htmlFor="rating-5">
          <input
            type="radio"
            id="rating-5"
            name="rating"
            value="5"
            onChange={ handleChange }
          />
          5
        </label>
      </fieldset>
    );
  }
}

Rating.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
