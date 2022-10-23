export function ShopCard({img, name, price}) {
  return (
    <div className="shopCard">
      <img src={img} alt="" />
      <div className="cardInfo">
        <p className="cardTitle"> {name} </p>
        <p className="cardPrice"> ${price} </p>
      </div>
    </div>
  )
}