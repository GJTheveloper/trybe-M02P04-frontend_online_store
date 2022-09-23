import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setItemToLocalStorage } from '../services/localStorage';

class ProductInfo extends Component {
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
      title,
      thumbnail,
      price,
      id,
      quantity,
    } = this.props;

    return (
      <>
        <img src={ thumbnail } alt={ title } />
        <div>
          <h4>{title}</h4>
          <p>{price * quantity}</p>
        </div>
        <Link
          data-testid="product-detail-link"
          key={ id }
          to={ {
            pathname: `/product/${id}`,
          } }
        >
          <button
            type="button"
          >
            Detalhes
          </button>
        </Link>
      </>
    );
  }
}

ProductInfo.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number,
};

ProductInfo.defaultProps = {
  quantity: 1,
};

export default ProductInfo;
