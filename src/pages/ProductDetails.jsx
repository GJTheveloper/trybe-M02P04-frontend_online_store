import propTypes from 'prop-types';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Comment from '../components/Comment';
import Review from '../components/Review';
import * as api from '../services/api';
import {
  getReviewToLocalStorage,
  setReviewToLocalStorage,
  setItemToLocalStorage,
} from '../services/localStorage';
import ToCartButton from '../components/ToCartButton';

class ProductDetails extends Component {
  state = {
    product: {},
    email: '',
    comment: '',
    haveRating: true,
    rate: '',
    loading: true,
  }

  componentDidMount = async () => {
    const { match } = this.props;
    const { params } = match;
    const { productId } = params;
    const product = await api.getDetailsFromProductId(productId);
    this.setState({ product });
    const reviews = getReviewToLocalStorage();
    if (reviews) {
      const reviewsFiltered = reviews.filter((review) => review.product.id === productId);
      this.setState({
        reviewsFiltered,
        loading: false,
      });
    }
  }

  inputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, () => this.disableNoRating());
  }

  disableNoRating = () => {
    const { rate } = this.state;
    if (rate.length > 0) {
      return this.setState({ haveRating: false });
    }
    return this.setState({ haveRating: true });
  }

  onClick = (event) => {
    event.preventDefault();
    const {
      email,
      comment,
      rate,
      product,
    } = this.state;
    setReviewToLocalStorage(({ email, comment, rate, product }));
    const reviews = getReviewToLocalStorage();
    if (reviews) {
      const reviewsFiltered = reviews
        .filter((review) => review.product.id === product.id);
      this.setState(
        {
          reviewsFiltered,
          loading: false,
          email: '',
          comment: '',
          rate: '',
        },
      );
    }
  }

  onClickButtonAddToCart = () => {
    const { product } = this.state;
    setItemToLocalStorage(product);
  }

  render() {
    const {
      product,
      email,
      comment,
      haveRating,
      reviewsFiltered,
      loading,
    } = this.state;

    return (
      <div>
        <h2 data-testid="product-detail-name">{product.title}</h2>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{`R$: ${product.price}`}</p>
        <ToCartButton
          id={ product.id
            ? product.id
            : '' }
          onClick={ this.onClickButtonAddToCart }
          dataTestId="product-detail-add-to-cart"
        />
        <Review
          email={ email }
          comment={ comment }
          onInputChange={ this.inputChange }
          onClick={ this.onClick }
          haveRating={ haveRating }
        />
        <h2>Comentários recentes</h2>
        {
          !loading && reviewsFiltered.map(({
            email: emailReview,
            comment: commentReview,
            rate,
          }, index) => (
            <Comment
              key={ index }
              email={ emailReview }
              comment={ commentReview }
              rate={ rate }
            />
          ))
        }
        <Link
          className="carrinho"
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          <FiShoppingCart size={ 30 } />
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      productId: propTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
