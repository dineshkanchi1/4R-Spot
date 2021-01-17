import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
function App() {

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header row">
          <div className="logo-container">
            <Link to="/" className="logo"><span className="at">@</span>4R-Spot</Link>
            <p>Nothing Can End Here</p>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length>0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link href="/sigin">SignIn</Link>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/products/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All Rights Reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
