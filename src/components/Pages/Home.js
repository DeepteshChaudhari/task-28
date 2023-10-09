import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./home.css";

import { useCart } from "../context/cart.context";
import { useProduct } from "../context/products.context";

function Home() {
  const { products } = useProduct();
  const { cartProducts, setCartProducts } = useCart();

  useEffect(() => {
    setCartProducts(cartProducts);
  }, []);

  const handleCart = (event, product) => {
    if (event.target.textContent === "Add to Cart") {
      let cartItem = [...cartProducts];
      cartItem.push({ ...product, quantity: 1 });
      setCartProducts(cartItem);
      event.target.textContent = "Remove From Cart";
    } else {
      setCartProducts(cartProducts.filter((item) => item.id !== product.id));
      event.target.textContent = "Add to Cart";
    }
  };

  return (
    <div className="productContainer">
      {products &&
        products.map((product) => {
          return (
            <ProductCard
              product={product}
              key={product.id}
              handleCart={handleCart}
            />
          );
        })}
    </div>
  );
}

export default Home;
