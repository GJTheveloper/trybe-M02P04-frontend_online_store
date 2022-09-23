import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { setItemToLocalStorage } from '../services/localStorage';
import ToCartButton from './ToCartButton';
import ProductInfo from './ProductInfo';

class Card extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  onClickButtonAddToCart = () => {
    setItemToLocalStorage(this.props);
  }

  render() {
    const {
      id,
    } = this.props;

    return (
      <div data-testid="product">
        <ProductInfo
          { ...this.props }
        />
        <ToCartButton
          id={ id }
          onClick={ this.onClickButtonAddToCart }
          dataTestId="product-add-to-cart"
        />
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
