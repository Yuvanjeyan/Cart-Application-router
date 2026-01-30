function ProductCard({ product, cart=[], addToCart }) {
  const inCart = cart.find(item => item.id === product.id);

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      {/* <p>{product.description}</p> */}
      <p>₹ {product.price}</p>

      {inCart ? (
        <button className="remove-btn">Remove from Cart</button>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
}

export default ProductCard;
