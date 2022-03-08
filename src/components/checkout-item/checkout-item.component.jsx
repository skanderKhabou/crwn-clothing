import React from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span>&#10094;</span>
        {quantity}
        <span>&#10095;</span>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
  // https://www.w3schools.com/charsets/ref_utf_dingbats.asp line 12
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  // we pass the item as proprety
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
