import { useEffect, useState } from "react"
import { CartItems } from "./CartItems";
import { ShopCard } from "./ShopCard"

export const shopItems = [
  {
    img: '/src/assets/shopItems/Samsung-27-odyssey.avif',
    name: "SAMSUNG 27'' ODYSSEY G4",
    price: 279.99,
  },
  {
    img: '/src/assets/shopItems/Samsung-27-odyssey-g5.avif',
    name: "SAMSUNG 27'' ODYSSEY G5",
    price: 299.99,
  },
  {
    img: '/src/assets/shopItems/Lg-ultragear-32.avif',
    name: "LG ULTRAGEAR 32''",
    price: 279.99,
  },
  {
    img: '/src/assets/shopItems/Msi-optix-27.avif',
    name: "MSI OPTIX 27''",
    price: 179.99,
  },
  {
    img: '/src/assets/shopItems/Korsair-k70.avif',
    name: 'KORSAIR - K70',
    price: 99.99,
  },
  {
    img: '/src/assets/shopItems/Korsair-k100.avif',
    name: 'KORSAIR - K100',
    price: 203.99,
  },
  {
    img: '/src/assets/shopItems/Logitech-g915-tkl.avif',
    name: 'LOGITECH - G915 TKL',
    price: 181.99,
  },
  {
    img: '/src/assets/shopItems/Logitech-g915-fullsize.avif',
    name: 'LOGITECH - G915 FULLSIZE',
    price: 187.99,
  },
  {
    img: '/src/assets/shopItems/Xbox-series-S-512.avif',
    name: 'XBOX SERIES S 512GB',
    price: 299.99,
  },
  {
    img: '/src/assets/shopItems/Xbox-series-X-1t.avif',
    name: 'XBOX SERIES X 1TB',
    price: 559.98,
  },
  {
    img: '/src/assets/shopItems/Playstation-5.avif',
    name: 'PLAYSTATION 5',
    price: 499.99,
  },
  {
    img: '/src/assets/shopItems/Nintendo-switch-oled.avif',
    name: 'NINTENDO SWITCH OLED',
    price: 314.99,
  },
]

export function Shop({ cartItems, showCartItems, handleShowCartItems }) {

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(
      shopItems.map(item => (
        <ShopCard key={item.name} name={item.name} img={item.img} price={item.price} />
      ))
    )
  }, [])

  return (
    <div className="shop">
      <div className="shopCards">
        {items}
      </div>
      { (showCartItems) ? <CartItems cartItems={cartItems} handleShowCartItems={handleShowCartItems} /> : null }
    </div>
  )
}