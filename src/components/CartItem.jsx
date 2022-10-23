export function CartItem({ item }) {
  return (
    <div className="cartItem">
      <img src={item.img} alt="" className="cartItemImg"/>
      <div className="cartItemInfo">
        <h2 className="cartItemName"> {item.name} </h2>
        <p className="cartItemPrice"> Price: $ {item.price} </p>
        <p className="cartItemQuantity"> Quantity: {item.quantity} </p>
      </div>
    </div>
  )
}