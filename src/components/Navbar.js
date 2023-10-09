import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";

import { useCart } from "./context/cart.context";

function Navbar() {
  const { cartProducts } = useCart();

  return (
    <div className="Navbar">
      <div className="logo">My Shop</div>
      <span className="Home">
        <Link to={"/"}>Home</Link>
      </span>

      <Link to={"/cart"}>
        <button className="btn">
          <AiOutlineShoppingCart />
          <span>{cartProducts.length}</span>
        </button>
      </Link>
    </div>
  );
}

export default Navbar;
