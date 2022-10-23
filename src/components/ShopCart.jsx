import { ShoppingCart } from 'phosphor-react';
import { useState } from 'react';

export function ShopCart({ cartItemsCount, handleShowCartItems }) {  

  return (
    <div className='shoppingCart' onClick={handleShowCartItems} >
      <span>Items: {cartItemsCount } </span>
      <ShoppingCart size={32} />
    </div>
  )
}