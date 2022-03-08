import React from "react";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem: { imageUrl, price, quantity, name } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">${price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
  // https://www.w3schools.com/charsets/ref_utf_dingbats.asp line 12
);

export default CheckoutItem;
