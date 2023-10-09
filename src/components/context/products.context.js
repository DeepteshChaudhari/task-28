import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext({ products: [] });

export const useProduct = () => useContext(ProductContext);

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/mocks/products.json")
      .then((response) => response.json())
      .then((result) => {
        if (result.products) {
          setProducts(result.products);
        }
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  const value = {
    products,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;
