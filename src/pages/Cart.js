function Cart({ cart, removeFromCart, increaseQty, decreaseQty }) {
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const discount = totalPrice * 0.1;
  const finalPrice = totalPrice - discount;

  return (
    <div className="cart-page">
      <h2>Cart</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map(item => (
        <div key={item.id} className="cart-row">
          <span className="cart-title">{item.title}</span>
          <span>₹ {item.price}</span>

          <div className="qty">
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <span>₹ {(item.price * item.quantity).toFixed(2)}</span>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="cart-summary">
          <p>Total: ₹ {totalPrice.toFixed(2)}</p>
          <p>Discount (10%): ₹ {discount.toFixed(2)}</p>
          <h3>Final Price: ₹ {finalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
