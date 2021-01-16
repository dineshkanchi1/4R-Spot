import React from 'react';
import data from './data';
function App() {
  return (
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
        <div className="row center">
          {
            data.products.map(product =>(
              <div className="card" key={product._id}>
                <a href={`/products/${product._id}`}>
                  <img
                    className="medium"
                    src={product.image}
                    alt={product.name}
                    width="200px"
                    height="300px"
                  />
                </a>
                <div className="card-body">
                  <a href={`/products/${product._id}`}>
                    <h2>{product.name}</h2>
                  </a>
                  <div className="rating">
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star-o"></i></span>
                  </div>
                  <div className="price">Rs.{product.price}</div>
                </div>
              </div>
            ))
          }
          
        </div>
      </main>
      <footer className="row center">All Rights Reserved</footer>
    </div>
  );
}

export default App;
