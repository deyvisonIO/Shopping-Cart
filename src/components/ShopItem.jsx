import { shopItems } from './Shop';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { CartItems } from './CartItems';

export function ShopItem( { addCartItem, cartItems, showCartItems, handleShowCartItems } ) {
  const params = useParams();
  const [item] = shopItems.filter(item => item.name == params.itemId);

  const [itemQuantity, setItemQuantity] = useState(1);

  const addQuantity = () => {
    setItemQuantity(itemQuantity + 1)  
  }
  const removeQuantity = () => {
    if (itemQuantity === 1) return;
    setItemQuantity(itemQuantity - 1)  

  }
  const changeQuantity = () => {
    const quantity = document.getElementById("itemQuantity");

    if (quantity.value < 1) {
      setItemQuantity(1);
      return;
    }
    setItemQuantity(quantity.value)
  }

  return (
    <div className='itemPage'>
      <img src={item.img} alt="" className='itemImg' />
      <div className='itemDescriptionDiv'>
        <div>
          <h1 className='itemTitle'>{item.name}</h1>
          <p className='itemPriceLabel' >Price: <span className='itemPrice' >$ {item.price}</span></p>
        </div>
        <div>
          <button onClick={removeQuantity} className='addQuantityBtn' >-</button>
          <input type="number" min="1" value={itemQuantity} id='itemQuantity' onChange={changeQuantity} />
          <button onClick={addQuantity} className='addQuantityBtn' >+</button>
        </div>
        <button className='addCartBtn' onClick={(e) => addCartItem(item, itemQuantity)}>Add to Cart</button>
      </div>
      { (showCartItems) ? <CartItems cartItems={cartItems} handleShowCartItems={handleShowCartItems} /> : null }
    </div>
  )
}

function addToCart(item, quantity) {
  const cartItem = {
    ...item,
    quantity,
  }
  
  return cartItem;
}