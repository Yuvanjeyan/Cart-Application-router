function CartModal({
  cart,
  closeModal,
  removeFromCart,
  increaseQty,
  decreaseQty
}) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Cart Items</h2>

        {cart.length === 0 && <p>No items in the cart</p>}

        <div className="cart-table">
          {cart.map((item) => (
            <div key={item.id} className="cart-row">
              <img src={item.image} alt={item.title} />

              <span className="cart-title">{item.title}</span>

              <span className="cart-price">₹ {item.price}</span>

              {/* Quantity controls */}
              <div className="qty-controls">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>

              <button
                className="btn-remove-cart-item"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <button onClick={closeModal} className="close-btn">
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;
