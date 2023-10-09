import { createContext, useContext, useState } from "react";
const CartContext = createContext({
  cartProducts: [],
  setCartProducts: () => Promise,
});
export const useCart = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const value = { cartProducts, setCartProducts };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
