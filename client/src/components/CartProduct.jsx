import React, { useContext } from "react";
import { CartContext } from "./CartContextProvider";

export default function CartProduct({ title, image, description, price, id }) {
  const { cart, setCart } = useContext(CartContext);
  const removeFromCart = () => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };
  return (
    <div className="cart-product">
      <img className="cart-product-image" src={image} alt="" />
      <div className="cart-product-details">
        <p className="product-title">{title}</p>
        <p className="product-description">{description}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
          }}
        >
          <p className="product-price">{price} $</p>
          <button className="add-to-cart" onClick={removeFromCart}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
