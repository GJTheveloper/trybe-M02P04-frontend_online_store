import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FiStar } from 'react-icons/fi';

// https://metroui.org.ua/rating.html

class Review extends Component {
  render() {
    const {
      email,
      comment,
      onInputChange,
      onClick,
      haveRating,
    } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="user-email">
            <input
              type="email"
              name="email"
              id="user-email"
              data-testid="product-detail-email"
              value={ email }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="user-comment">
            <textarea
              type="text"
              name="comment"
              id="user-comment"
              data-testid="product-detail-evaluation"
              value={ comment }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rate1">
            <FiStar size={ 20 } />
            <input
              id="rate1"
              data-testid="1-rating"
              name="rate"
              value="1"
              type="radio"
              onChange={ onInputChange }
            />
          </label>
          <FiStar size={ 20 } />
          <label htmlFor="rate2">
            <input
              id="rate2"
              data-testid="2-rating"
              name="rate"
              value="2"
              type="radio"
              onChange={ onInputChange }
            />
          </label>
          <FiStar size={ 20 } />
          <label htmlFor="rate3">
            <input
              id="rate3"
              data-testid="3-rating"
              name="rate"
              value="3"
              type="radio"
              onChange={ onInputChange }
            />
          </label>
          <FiStar size={ 20 } />
          <label htmlFor="rate4">
            <input
              id="rate4"
              data-testid="4-rating"
              name="rate"
              value="4"
              type="radio"
              onChange={ onInputChange }
            />
          </label>
          <FiStar size={ 20 } />
          <label htmlFor="rate5">
            <input
              id="rate5"
              data-testid="5-rating"
              name="rate"
              value="5"
              type="radio"
              onChange={ onInputChange }
            />
          </label>
          <button
            type="button"
            name="button"
            data-testid="submit-review-btn"
            onClick={ onClick }
            disabled={ haveRating }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}
Review.propTypes = {
  email: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  haveRating: PropTypes.bool.isRequired,
};

export default Review;
