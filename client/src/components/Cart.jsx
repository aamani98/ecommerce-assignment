import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "./CartContextProvider";
import CartProduct from "./CartProduct";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.5rem 2rem",
        }}
      >
        <p className="status-msg">Cart</p>
        <button
          className="add-to-cart"
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button>
      </div>
      <div>
        {cart.length > 0 ? (
          cart.map((product) => {
            return <CartProduct key={product.id} {...product} />;
          })
        ) : (
          <div className="status-msg">
            <p>Your cart is empty</p>
          </div>
        )}
      </div>
    </>
  );
}
