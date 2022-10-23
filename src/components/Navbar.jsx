import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div className="header">
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            style={({isActive}) =>({ 
              color: "inherit",
              textDecoration: isActive ?  "underline": "none",
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
              color: "inherit",
              textDecoration: isActive ?  "underline" : "none",
            })}
          >
            Shop
          </NavLink>
        </li>
      </ul>
    </div>
  );
}