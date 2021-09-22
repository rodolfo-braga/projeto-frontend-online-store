import React, { Component } from 'react';
import './StarRating.css';

export default class StarRating extends Component {
  render() {
    return (
      <fieldset>
        <div className="estrelas">
          {/* <input type="radio" id="cm_star-empty" name="fb" value="" checked readOnly />
          <label htmlFor="cm_star-1"><i className="fa" /></label>
          <input type="radio" id="cm_star-1" name="fb" value="1" />
          <label htmlFor="cm_star-2"><i className="fa" /></label>
          <input type="radio" id="cm_star-2" name="fb" value="2" />
          <label htmlFor="cm_star-3"><i className="fa" /></label>
          <input type="radio" id="cm_star-3" name="fb" value="3" />
          <label htmlFor="cm_star-4"><i className="fa" /></label>
          <input type="radio" id="cm_star-4" name="fb" value="4" />
          <label htmlFor="cm_star-5"><i className="fa" /></label>
          <input type="radio" id="cm_star-5" name="fb" value="5" /> */}
          <input type="radio" id="cm_star-empty" name="fb" value="" checked readOnly />
          <label htmlFor="cm_star-1">
            <i className="fa" />
            <input type="radio" id="cm_star-1" name="fb" value="1" />
          </label>
          <label htmlFor="cm_star-2">
            <i className="fa" />
            <input type="radio" id="cm_star-2" name="fb" value="2" />
          </label>
          <label htmlFor="cm_star-3">
            <i className="fa" />
            <input type="radio" id="cm_star-3" name="fb" value="3" />
          </label>
          <label htmlFor="cm_star-4">
            <i className="fa" />
            <input type="radio" id="cm_star-4" name="fb" value="4" />
          </label>
          <label htmlFor="cm_star-5">
            <i className="fa" />
            <input type="radio" id="cm_star-5" name="fb" value="5" />
          </label>
        </div>
      </fieldset>
    );
  }
}

// https://pt.stackoverflow.com/questions/70484/vota%C3%A7%C3%A3o-em-estrela-com-input-radio-javascript-css/70502
