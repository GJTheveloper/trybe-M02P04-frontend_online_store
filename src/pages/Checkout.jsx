import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getItemsLocalStorage } from '../services/localStorage';
import ProductInfo from '../components/ProductInfo';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    const itemsFromLocalStorage = getItemsLocalStorage();
    this.setState({
      items: this.addAmount(itemsFromLocalStorage),
    });
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

  getSumOfCheckout = (items) => (
    items.reduce((acc, item) => (
      acc + (item.item.price * item.quantity)
    ), 0)
  );

  render() {
    const { items } = this.state;
    return (
      <form>
        <Link to="/">
          <button type="button">Home</button>
        </Link>
        <fieldset>
          {
            items.map(({ item, quantity }) => (
              <ProductInfo
                key={ item.id }
                { ...item }
                quantity={ quantity }
              />
            ))
          }
          <p>
            {`total: ${this.getSumOfCheckout(items)}`}
          </p>
        </fieldset>
        <fieldset>
          <label htmlFor="checkout-fullname">
            Nome Completo:
            <input
              data-testid="checkout-fullname"
              id="checkout-fullname"
              name=""
              type="text"
            />
          </label>
          <label htmlFor="checkout-email">
            E-mail:
            <input
              data-testid="checkout-email"
              id="checkout-email"
              name=""
              type="email"
            />
          </label>
          <label htmlFor="checkout-cpf">
            CPF:
            <input
              data-testid="checkout-cpf"
              id="checkout-cpf"
              name=""
              type="text"
            />
          </label>
          <label htmlFor="checkout-phone">
            Celular:
            <input
              data-testid="checkout-phone"
              id="checkout-phone"
              name=""
              type="tel"
            />
          </label>
          <label htmlFor="checkout-cep">
            CEP:
            <input
              data-testid="checkout-cep"
              id=""
              name=""
              type="text"
            />
          </label>
          <label htmlFor="checkout-address">
            Endereço:
            <input
              data-testid="checkout-address"
              id=""
              name=""
              type="text"
            />
          </label>
        </fieldset>
        <fieldset />
        <button type="button">Comprar</button>
      </form>
    );
  }
}

export default Checkout;
