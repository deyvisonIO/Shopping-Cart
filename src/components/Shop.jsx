import { useEffect, useState } from "react"
import { ShopCard } from "./ShopCard"

const shopItems = [
  {
    img: '',
    name: 'TEST',
    price: 1000,
  },
  {
    img: '',
    name: '',
    price: 0,
  },
  {
    img: '',
    name: '',
    price: 0,
  },
  {
    img: '',
    name: '',
    price: 0,
  },
  {
    img: '',
    name: '',
    price: 0,
  },
  {
    img: '',
    name: '',
    price: 0,
  },
  {
    img: '',
    name: '',
    price: 0,
  },
  {
    img: '',
    name: '',
    price: 0,
  },
  {
    img: '',
    name: '',
    price: 0,
  },
  {
    img: '',
    name: '',
    price: 0,
  },
  {
    img: '',
    name: '',
    price: 0,
  },
  {
    img: '',
    name: '',
    price: 0,
  },
]

export function Shop() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(
      shopItems.map(item => (
        <ShopCard key={item.name} name={item.name} img={item.img} price={item.price} />
      ))
    )
  })

  return (
    <div>
      <h1>Shop</h1>
      <div className="shopCards">
        {items}
      </div>
    </div>
  )
}