import React, { Component } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Categories from '../components/Categories';
import { getProductsFromCategory } from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      requestCategorie: '',
      products: '',
      isApi: false,
      notFound: false,
    };
  }

  onInputChange = ({ target }) => {
    this.setState({
      requestCategorie: target.value,
    });
  }

  onClickButtonSearch = async () => {
    const { requestCategorie } = this.state;
    const products = await getProductsFromCategory(requestCategorie);
    if (!products) {
      this.setState({
        isApi: true,
        notFound: true,
      });
    } else {
      this.setState({
        isApi: true,
        products: products.results,
      });
    }
  }

  render() {
    const { isApi, products, requestCategorie, notFound } = this.state;
    return (
      <main>
        <header>
          <form>
            <input
              type="text"
              name="search-input"
              id="search-input"
              data-testid="query-input"
              value={ requestCategorie }
              onChange={ this.onInputChange }
            />
            <button
              type="button"
              onClick={ this.onClickButtonSearch }
              data-testid="query-button"
            >
              Pesquisar
            </button>
          </form>

          <Link
            className="carrinho"
            to="/shoppingcart"
            data-testid="shopping-cart-button"
          >
            <FiShoppingCart size={ 30 } />
          </Link>

        </header>

        {
          !isApi && (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )
        }

        <Categories />

        {
          isApi && (notFound ? (
            <p>Nenhum produto foi encontrado</p>
          ) : (
            products.map((product, index) => <Card { ...product } key={ index } />)
          ))
        }
      </main>
    );
  }
}

export default Home;
