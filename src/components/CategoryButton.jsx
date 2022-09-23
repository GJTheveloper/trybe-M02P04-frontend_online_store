import PropTypes from 'prop-types';
import React, { Component } from 'react';

class categoryButton extends Component {
  render() {
    const { categoryDescripition, categoryId, onClick } = this.props;
    return (
      <label data-testid="category" htmlFor={ categoryId }>
        {categoryDescripition}
        <input
          onClick={ onClick }
          name="categorySelection"
          id={ categoryId }
          type="radio"
        />
      </label>
    );
  }
}

categoryButton.propTypes = {
  categoryDescripition: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default categoryButton;
