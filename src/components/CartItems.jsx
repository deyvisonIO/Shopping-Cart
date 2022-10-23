import { CartItem } from "./CartItem";

export function CartItems({ cartItems, handleShowCartItems }) {
  console.log(cartItems)
  return (
    <div className="cartDiv">
      <div className="cartBackground" onClick={handleShowCartItems}></div>
      <div className="cartItems">
        {cartItems.map(item => (
          <CartItem
            key={item.name}
            item={item}
          />
        ))}
      </div>
    </div>
  )
}