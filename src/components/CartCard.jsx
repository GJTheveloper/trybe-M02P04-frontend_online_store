import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChangeQuantityButtons from './ChangeQuantityButtons';

export default class CartCard extends Component {
  render() {
    const {
      item,
      quantity,
      onClickIncreaseQuantity,
      onClickDecreaseQuantity,
    } = this.props;
    const { title, id, thumbnail, price } = item;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>
          {
            ` Preço Total R$: ${parseFloat(price * quantity).toFixed(2)}`
          }
        </p>
        <ChangeQuantityButtons
          id={ id }
          onClickIncreaseQuantity={ onClickIncreaseQuantity }
          onClickDecreaseQuantity={ onClickDecreaseQuantity }
          quantity={ quantity }
        />
      </div>
    );
  }
}

CartCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
  onClickDecreaseQuantity: PropTypes.func.isRequired,
  onClickIncreaseQuantity: PropTypes.func.isRequired,
};
