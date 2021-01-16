import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header row">
          <div className="logo-container">
            <a href="/" className="logo"><span className="at">@</span>4R-Spot</a>
            <p>Nothing Can End Here</p>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/sigin">Sigin</a>
          </div>
        </header>
        <main>
          <Route path="/products/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All Rights Reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
