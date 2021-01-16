import React from 'react'
import Rating from './Rating';

/**
* @author
* @function Product
**/

const Product = (props) => {
    const {product} = props;
  return(
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
            <Rating rating={product.rating} numReviews={product.numReviews}/>
            <div className="price">Rs.{product.price}</div>
        </div>
    </div>
   )

 }

export default Product