import React, { Component } from 'react';
import * as api from '../services/api';
import Card from './Card';
import CategoryButton from './CategoryButton';

class Categories extends Component {
  state = {
    categories: [],
    productsFromCategory: [],
  }

  componentDidMount() {
    api.getCategories().then((categoriesArray) => this.setState({
      categories: categoriesArray,
    }));
  }

  getCategorieOnClick = async (event) => {
    const getId = event.target.id;
    const getFetchApi = await api.getProductsFromCategoryId(getId);
    const getProductsFromId = getFetchApi.results;
    this.setState({
      productsFromCategory: getProductsFromId,
    });
  }

  render() {
    const { categories, productsFromCategory } = this.state;
    return (
      <section>
        <section>
          {categories.map(({ name, id }) => (
            <CategoryButton
              key={ id }
              categoryDescripition={ name }
              categoryId={ id }
              onClick={ this.getCategorieOnClick }
            />
          )) }
        </section>
        <section>
          {
            productsFromCategory
              .map((product) => <Card { ...product } key={ product.id } />)
          }
        </section>
      </section>
    );
  }
}

export default Categories;
