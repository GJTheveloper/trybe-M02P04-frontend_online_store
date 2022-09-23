import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { getItemsLocalStorage, setItemToLocalStorage } from '../services/localStorage';
import CartCard from '../components/CartCard';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      emptyCart: true,
      items: [],
    };
  }

  componentDidMount() {
    this.updateLocalStorage();
  }

  updateLocalStorage = () => {
    const items = getItemsLocalStorage();
    if (!items || items.length === 0) {
      this.setState({
        emptyCart: true,
        items: [],
      });
    } else {
      const filteredItems = this.addAmount(items);
      this.setState({
        emptyCart: false,
        items: filteredItems,
      });
    }
  }

  createObject = (item, quantity) => ({
    item,
    quantity,
  });

  addAmount = (items) => {
    const newArr = items.reduce((acc, item) => {
      const qtd = items.reduce((total, valor) => {
        if (valor.title === item.title) {
          return total + 1;
        }
        return total;
      }, 0);
      if (!acc.some((element) => element.item.title === item.title)) {
        acc.push(this.createObject(item, qtd));
      }
      return acc;
    }, []);
    return newArr;
  }

  onClickIncreaseQuantity = ({ target }) => {
    const { id } = target;
    const cartItems = getItemsLocalStorage('cartItems');
    const element = cartItems.find((item) => item.id === id);
    setItemToLocalStorage(element);
    this.updateLocalStorage();
  }

  onClickDecreaseQuantity = ({ target: { id } }) => {
    const cartItems = getItemsLocalStorage('cartItems');
    const elementFound = cartItems.find((item) => item.id === id);
    const indexElement = cartItems.indexOf(elementFound);
    cartItems.splice(indexElement, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    this.updateLocalStorage();
  }

  render() {
    const { emptyCart, items } = this.state;
    return (
      <div>
        <Link to="/" />
        <section>
          <p>Carrinho de Compras</p>
        </section>
        <main>
          {
            emptyCart && (
              <h1 data-testid="shopping-cart-empty-message">
                Seu carrinho está vazio
              </h1>
            )
          }
          {
            items.map((item, index) => (<CartCard
              { ...item }
              onClickIncreaseQuantity={ this.onClickIncreaseQuantity }
              onClickDecreaseQuantity={ this.onClickDecreaseQuantity }
              key={ index }
            />))
          }
          <Link to="/checkout">
            <button data-testid="checkout-products" type="button">
              Finalizar a Compra
            </button>
          </Link>
        </main>
      </div>
    );
  }
}

export default ShoppingCart;
