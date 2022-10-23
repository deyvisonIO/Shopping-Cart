import { Link } from "react-router-dom";
import '../style.css';

export function ShopCard({img, name, price}) {
  return (
    
      <div className="shopCard">
        <Link 
          to={name} 
        >
          <img src={img} alt="" className="cardImg"/>
        </Link>
        <Link 
          to={name} 
        >
          <div className="cardInfo">
            <p className="cardTitle"> {name} </p>
            <p className="cardPrice"> ${price} </p>
          </div>
        </Link>
        
      </div>
  )
}