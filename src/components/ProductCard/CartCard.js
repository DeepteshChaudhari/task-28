import React from "react";

function CartCard({ product, handleQuantity, handleRemove }) {
  console.log(product);
  // const total =
  return (
    <>
      <div className="cartCard">
        <div className="details">
          <img src={product.images[0]} alt="productsPhoto"></img>
          <div style={{ width: "450px" }}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
          <h4 className="mobprice">Price: {product.price}</h4>
          <select onChange={(e) => handleQuantity(e.target.value, product)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={() => handleRemove(product)}>Remove</button>
        </div>
        <div>
          <h4 className="subtotal">
            <spa>SubTotal Price:</spa>{" "}
            <span>$ {product.addPrice ? product.addPrice : product.price}</span>
          </h4>
          <h4 className="subtotal">
            <span>Shipping : </span>
            <span>FREE</span>
          </h4>
        </div>
      </div>
    </>
  );
}

export default CartCard;
