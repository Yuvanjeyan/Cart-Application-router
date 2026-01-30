import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

import './App.css';

function App() {

  //store the cart items
  const [cart, setCart] = useState([]);

  const addToCArt = (product) => {
    const exist = cart.find(item=> item.id === product.id);
    if(exist){
      alert("Item already added to the cart");
    }
    else{
      setCart([...cart, {...product, quantity: 1}])
    }
  }

  const removeFromCart = (id)=>{
    setCart(cart.filter(item=> item.id !== id));
  }

  const increaseQty = (id)=>{
    setCart(cart.map(item=>
      item.id === id ? {...item, quantity: item.quantity + 1} : item
    ))
  }

  const decreaseQty = (id)=>{
    setCart(cart.map(item=>
      item.id===id && item.quantity > 1 ? {
        ...item,quantity: item.quantity - 1
      } : item
    ))
  }
  return(
    <>
      <Navbar cartCount={cart.length}/>
      <Routes>
        <Route path="/" element={<Products addToCart={addToCArt}/>}/>
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} increaseQty={increaseQty} decreaseQty={decreaseQty}/>}/>
      </Routes>
    </>
  )

}
export default App;