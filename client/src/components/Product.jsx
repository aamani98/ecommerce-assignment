import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "./CartContextProvider";

export default function Product(props) {
  const { title, image, rating, price } = props;
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const addToCart = () => {
    setCart([...cart, props]);
    navigate("/cart");
  };

  return (
    <div className="product">
      <img
        className="product-image"
        src={image}
        alt=""
        height="250px"
        width="250px"
      />

      <div className="product-title">
        {title.length > 30 ? title.substring(0, 25) + ".." : title}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "80%",
        }}
      >
        <div>
          <p className="product-price">{price} $</p>
          <span>
            <i className="fa fa-star star-icon" aria-hidden="true"></i>
          </span>
          <span className="product-rating">{rating.rate}</span>
        </div>
        <div>
          <button className="add-to-cart" onClick={addToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
