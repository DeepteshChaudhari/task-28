import "./cart.css";
import CartCard from "../ProductCard/CartCard";

import { useCart } from "../context/cart.context";

function Cart() {
  const { cartProducts, setCartProducts } = useCart();

  const handleQuantity = (value, product) => {
    let price = product.price;

    const newProd = cartProducts.map((item) => {
      if (item.id === product.id) {
        return { ...item, addPrice: value * price, quantity: value };
      }
      return { ...item };
    });
    setCartProducts(newProd);
  };
  const handleRemove = (product) => {
    const newCartList = cartProducts.filter((item) => item.id !== product.id);
    setCartProducts(newCartList);
  };
  const total = cartProducts.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <>
      <div className="cartContainer">
        {cartProducts.length > 0 ? (
          <div>
            {cartProducts.map((product, index) => {
              return (
                <CartCard
                  product={product}
                  key={index}
                  handleQuantity={handleQuantity}
                  handleRemove={handleRemove}
                />
              );
            })}
            <h2 className="subtotal">
              <span>Total : </span>
              <span>${total}</span>
            </h2>
          </div>
        ) : (
          <p className="emptycart">Your Cart is Empty</p>
        )}
      </div>
    </>
  );
}

export default Cart;
