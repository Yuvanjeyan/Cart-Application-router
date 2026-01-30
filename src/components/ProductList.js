import ProductCard from "./ProductCard";

function ProductList({ products, cart, addToCart }) {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          cart={cart}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
