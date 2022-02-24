import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div data-aos="zoom-in-up" data-aos-duration="3000" className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>{price}</strong>
          <small> € </small>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
