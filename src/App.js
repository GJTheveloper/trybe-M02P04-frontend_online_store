import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import ProductsDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={ () => <Home /> } />
        <Route path="/shoppingcart" component={ () => <ShoppingCart /> } />
        <Route path="/product/:productId" component={ ProductsDetails } />
        <Route path="/checkout" component={ () => <Checkout /> } />
      </BrowserRouter>
    </div>
  );
}

export default App;
