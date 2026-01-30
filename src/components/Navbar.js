import {Link} from 'react-router-dom';

function Navbar({ cartCount}) {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Cart Application</h1>
      {/* <button className="cart-btn" onClick={openCart}>
        Cart ({cartCount})
      </button> */}
      <Link to="/" className='nav-btn'>Products</Link>
      <Link to="/cart" className='nav-btn'>Cart ({cartCount})</Link>
    </nav>
  );
}

export default Navbar;
