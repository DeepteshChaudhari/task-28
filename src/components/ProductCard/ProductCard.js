import React from "react";

function ProductCard({ product, handleCart }) {
  return (
    <>
      <div className="card">
        <img src={product.images[0]} alt="productImage"></img>
        <h3>{product.title}</h3>
        <p>
          <b>Descriptiom : </b> {product.description}
        </p>
        <h4>Price : ${product.price}</h4>
        <button onClick={(event) => handleCart(event, product)}>
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default ProductCard;
