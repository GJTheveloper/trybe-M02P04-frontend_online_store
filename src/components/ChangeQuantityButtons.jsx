import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChangeQuantityButtons extends Component {
  render() {
    const { quantity, onClickIncreaseQuantity, onClickDecreaseQuantity, id } = this.props;
    return (
      <>
        <button
          data-testid="product-decrease-quantity"
          id={ id }
          onClick={ onClickDecreaseQuantity }
          type="button"
        >
          -
        </button>
        <span data-testid="shopping-cart-product-quantity">
          {quantity}
        </span>
        <button
          data-testid="product-increase-quantity"
          id={ id }
          onClick={ onClickIncreaseQuantity }
          type="button"
        >
          +
        </button>
      </>
    );
  }
}

ChangeQuantityButtons.propTypes = {
  quantity: PropTypes.number.isRequired,
  onClickDecreaseQuantity: PropTypes.func.isRequired,
  onClickIncreaseQuantity: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ChangeQuantityButtons;
