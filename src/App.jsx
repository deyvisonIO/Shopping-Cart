import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Homepage } from './components/Homepage'
import { Shop } from './components/Shop'
import { ShopItem } from './components/ShopItem'
import { ShopCart } from './components/ShopCart'
import './style.css'


function App() {  

  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [showCartItems, setShowCartItems] = useState(false);
  
  const addCartItem = (item, quantity) => {
    
    const cartItem = {
      ...item,
      price: quantity * item.price,
      quantity,
    }
    setCartItems(cartItems.concat(cartItem));
    setCartItemsCount(cartItemsCount + 1);
  }

  const handleShowCartItems = () => {
    console.log("test")
    setShowCartItems(!showCartItems);
    console.log(showCartItems)

  }

  return (
  <BrowserRouter>
    <Navbar />
    <ShopCart cartItemsCount={cartItemsCount} handleShowCartItems={handleShowCartItems} />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route 
        path="/shop" 
        element={
          <Shop 
            showCartItems={showCartItems}
            cartItems={cartItems}
            handleShowCartItems={handleShowCartItems}
          />
        }
      />
      <Route
        path="/shop/:itemId"
        element={
          <ShopItem 
            addCartItem={addCartItem}
            showCartItems={showCartItems}
            cartItems={cartItems}
            handleShowCartItems={handleShowCartItems}
          />
        }
      />
    </Routes>
  </BrowserRouter>
  )
}

export default App
