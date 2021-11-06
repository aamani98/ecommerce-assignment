import React, { useState, useEffect } from "react";
import { axiosInstance } from "../Config";
import Product from "./Product";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasEnded, setHasEnded] = useState(false);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    setLoading(true);
    const { data: responseProducts } = await axiosInstance.get(
      `/products?page=${page}`
    );
    if (responseProducts.length === 0) {
      setHasEnded(true);
    } else {
      setProducts([...products, ...responseProducts]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!hasEnded) {
      getProducts();
    }
  }, [page]);

  useEffect(() => {
    document.addEventListener("scroll", trackScrolling);
  }, [products]);

  const trackScrolling = () => {
    if (
      window.innerHeight + Math.ceil(document.documentElement.scrollTop) ===
      document.documentElement.offsetHeight
    ) {
      document.removeEventListener("scroll", trackScrolling);
      setPage(page + 1);
    }
  };

  return (
    <>
      <div className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      {loading && (
        <div className="status-msg">
          <p>Loading...</p>
        </div>
      )}
      {hasEnded && (
        <div className="status-msg">
          <p>You're all caught up!</p>
        </div>
      )}
    </>
  );
}
