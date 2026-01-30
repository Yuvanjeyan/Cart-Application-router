import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

function Products({ cart, addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <ProductList
      products={products}
      cart={cart}
      addToCart={addToCart}
    />
  );
}

export default Products;
