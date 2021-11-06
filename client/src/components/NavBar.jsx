import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContextProvider";

export default function NavBar() {
  const { cart } = useContext(CartContext);
  return (
    <div className="nav-bar">
      <div className="nav-bar-title">E-Shop</div>
      <div className="nav-bar-icons">
        <i className="fa fa-user fa-2x icon" aria-hidden="true"></i>
        {cart.length > 0 && (
          <span className="nav-bar-cart-count">{cart.length}</span>
        )}
        <Link to="/cart">
          <i
            className="fa fa-shopping-cart fa-2x icon cart-icon"
            aria-hidden="true"
          ></i>
        </Link>
      </div>
    </div>
  );
}
