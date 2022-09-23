import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
  render() {
    const {
      email,
      comment,
      rate,
    } = this.props;
    return (
      <div>
        <h1>{email}</h1>
        <p>{comment}</p>
        <p>{rate}</p>
      </div>
    );
  }
}
Comment.propTypes = {
  email: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
};

export default Comment;
