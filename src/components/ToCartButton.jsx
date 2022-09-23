import React from 'react';
import PropTypes from 'prop-types';

class toCartButton extends React.Component {
  render() {
    const { id, onClick, dataTestId } = this.props;
    return (
      <button
        type="button"
        onClick={ onClick }
        data-testid={ dataTestId }
        id={ id }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

toCartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default toCartButton;
