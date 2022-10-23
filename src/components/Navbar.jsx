import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div className="header">
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            style={({isActive}) =>({ 
              color: isActive ? "white": "inherit",
              backgroundColor: isActive ?  "black" : "white",
              textDecoration: "none",
              padding: "1rem 2rem",

            })}
            end
          >
            Home
          </NavLink>
        </li>
        <li >
          <NavLink 
            to="shop"
            style={({isActive}) =>({ 
              color: isActive ? "white": "inherit",
              backgroundColor: isActive ?  "black" : "white",
              textDecoration: "none",
              padding: "1rem 2rem",
            })}
          >
            Shop
          </NavLink>
        </li>
      </ul>
    </div>
  );
}